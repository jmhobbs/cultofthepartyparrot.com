#!/usr/bin/env python
import sys
import glob
import argparse
import os

from selenium import webdriver


class ParrotUploader():
    browser = None
    loggged_in = False

    def __init__(self, slack_team):
        self.browser = webdriver.Chrome()
        self.slack_team = slack_team

    def login(self, username, password):
        if self.loggged_in:
            return

        self.browser.get('https://{}.slack.com/signin'.format(self.slack_team))
        username_field = self.browser.find_element(value="email")
        password_field = self.browser.find_element(value='password')

        username_field.send_keys(username)
        password_field.send_keys(password)
        username_field.submit()

        self.loggged_in = True

    def upload(self, parrot_path):
        if not self.loggged_in:
            raise ValueError("you must first login before uploading")
        emoji_url = 'https://{}.slack.com/customize/emoji'.format(self.slack_team)
        if emoji_url not in self.browser.current_url:
            self.browser.get(emoji_url)

        emoji_name = self.browser.find_element(value='emojiname')
        parrot_name = os.path.basename(parrot_path).split('.')[0]
        emoji_name.send_keys(parrot_name)

        emoji_file = self.browser.find_element(value='emojiimg')
        emoji_file .send_keys(parrot_path)
        emoji_file.submit()

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

    args = parser.parse_args()

    uploader = ParrotUploader(slack_team=args.slack_team)
    try:
        uploader.login(args.username, args.password)

        dir_path = os.path.dirname(os.path.realpath(__file__))
        for parrot in glob.glob(os.path.join(dir_path, 'parrots/*')):
            uploader.upload(parrot)
    finally:
        uploader.cleanup()

if __name__ == '__main__':
    sys.exit(main())
