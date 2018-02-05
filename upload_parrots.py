#!/usr/bin/env python
import sys
import glob
import argparse
import os
import time

from selenium import webdriver

from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


class ParrotUploader():
    browser = None
    loggged_in = False

    def __init__(self, slack_team):
        self.browser = webdriver.Chrome()
        self.slack_team = slack_team

    def login(self, username, password, google):
        if self.loggged_in:
            return

        self.browser.get('https://{}.slack.com/signin'.format(self.slack_team))

        if google.upper() == "Y":
            signin_button = self.browser.find_element_by_partial_link_text("Sign in with Google")
            signin_button.click()
            time.sleep(5)
            username_field = self.browser.find_element_by_tag_name("input")
            username_field.send_keys(username)
            username_next = self.browser.find_element_by_id("identifierNext")
            username_next.click()
            time.sleep(5)
            password_field = self.browser.find_element_by_name("password")
            password_field.send_keys(password)
            password_next = self.browser.find_element_by_id("passwordNext")
            password_next.click()
            time.sleep(5)
        elif google.upper() == "N":
            username_field = self.browser.find_element(value="email")
            password_field = self.browser.find_element(value='password')

            username_field.send_keys(username)
            password_field.send_keys(password)
            username_field.submit()
        else:
            print("[ERROR] Invalid google arg '" + google + "' - must be y or n")
            sys.exit()

        self.loggged_in = True

    def upload(self, parrot_path):
        if not self.loggged_in:
            raise ValueError("you must first login before uploading")
        emoji_url = 'https://{}.slack.com/customize/emoji'.format(self.slack_team)
        if emoji_url not in self.browser.current_url:
            self.browser.get(emoji_url)

        emoji_table = WebDriverWait(
            self.browser, 30).until(EC.presence_of_element_located(
                (By.ID, "custom_emoji")))
        parrot_name = os.path.basename(parrot_path).split('.')[0]
        if ":{}:".format(parrot_name) in emoji_table.text:
            print("emoji :{}: already exists".format(parrot_name))
            return
        emoji_name = self.browser.find_element(value='emojiname')
        emoji_name.clear()
        emoji_name.send_keys(parrot_name)

        emoji_file = self.browser.find_element(value='emojiimg')
        emoji_file .send_keys(parrot_path)
        emoji_file.submit()
        print("emoji :{}: uploaded".format(parrot_name))

    def cleanup(self):
        if self.browser:
            self.browser.quit()


def main():
    parser = argparse.ArgumentParser(
        description='Use a browser to automatically upload all party parrots into a Slack account')
    parser.add_argument('--team', dest='slack_team',
                        help='The slack team in which to upload')
    parser.add_argument('--username',
                        help='The slack username with which to upload')
    parser.add_argument('--password',
                        help='The slack password with which to login')
    parser.add_argument('--google',
                        help='y or n whether you use Google sign in for your Slack team')

    args = parser.parse_args()

    uploader = ParrotUploader(slack_team=args.slack_team)
    dir_path = os.path.dirname(os.path.realpath(__file__))
    all_the_parrots = glob.glob(os.path.join(dir_path, 'parrots/hd/*.gif'))
    all_the_parrots += glob.glob(os.path.join(dir_path, 'parrots/*.gif'))
    try:
        uploader.login(args.username, args.password, args.google)
        for parrot in all_the_parrots:
            uploader.upload(parrot)
    finally:
        uploader.cleanup()

if __name__ == '__main__':
    sys.exit(main())
