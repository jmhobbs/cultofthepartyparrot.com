# [cultofthepartyparrot.com](http://cultofthepartyparrot.com)

[![Build Status](https://travis-ci.org/jmhobbs/cultofthepartyparrot.com.svg?branch=master)](https://travis-ci.org/jmhobbs/cultofthepartyparrot.com)
[![Netlify Status](https://api.netlify.com/api/v1/badges/a923b5c1-d312-4530-aa1f-5ab01a588cfc/deploy-status)](https://app.netlify.com/sites/cultofthepartyparrot/deploys)

```
                          ........:oo:........
                       o//ssssssssyhhysssss+////o                   .'''''''''''''''''.
                 mddmmm/::ddddddddddddddmmmyss::/mmN               |   PARTY OR DIE   |
                 o..+oodddmmmhhhhhhhhhhhdmmmmmdddooy               | ,................'
              h::oyyhddmmm+++///////////++++++mmmddy::s            |/
           Nyyo[[sddhyyyyy::::::::::::::::::::yyymmh//oyym
           h..:oohmm+:://///::::////////////////+mmmmms..sNN
           m++sddmmm+::hddhhy::+ddddddddddddddhhhmmmmmdhh+++d
        Nsssyyhmmhssooodmmhhh::+mmdyyyyyyyyddddddmmmmmmmmo::d
      mmd../mmmmmo::shhdmmhhh::+mmhooooooooyhhmmmmmmmmmmmyssdmm
      +++++smmdddo::///dmmhhh::+mmhooooooooooommmmmddddmmmdd/++m
      ``+hhhmmhoo/:::::oooooossymmhooooooooyyymmdoooooydddmmo//N
      ++:mmmmmy:::::::::::::/yyhmmhooooooooyhhmmd:::::+yyhmmyssddd
      ooommmmmy:::::::::::::://ommhooooooooooommd:::::://shhdmm+..
      yyhmmh++/::::::::::::::::+mmhooooooooyyymmd::::::::/++hmm+//
      dddmmh++/::::::::::::::::+mmhooooooooyhhddh:::::::::::hmmysshhd
      mmmmmdhhs::::::::::::::::+mmhoooooooohhhhhy:::::::::::hmmhhh``+
      mmmmmh++/::::::::::::::::+mmdhhsooooodmm++/:::::::::::hmmsss``+
      dddmmhoo+::::::::::::::::+dddddyssyyydmm::::::::::::::hmmsoo++o
      dddmmdhho::::::::::::::::+hhdmmddddmmmmm::::::::::::::hmmsooNNN
      mmmmmh///::::::::::::::::+hhdmmmmmmmmddd::::::::::::::hmmsoo++/
      yyhmmdss+::::::::::::::::/ooydddmmmmmsoo::::::::::::::yddhyy::+
      ++ommmmmy:::::::::::::::::::ohhdmmddd/::::::::::::::::shhdmmsssNNNmmN
      ..+mmmmmy:::::::::::::::::::://shh+//:::::::::::::::::://dmmmmdoo+..o
      ``+dddmmhss+:::::::::::::::::::+++/::::::::::::::::::::::ooodddhhysshNNy++m
      ``+hhdmmdhhs///:::::::::::::::::::::::::::::::::::::::::::::yyymmmmmmmmo++hNNmdd
      ``+hhdmmdhhhhh+:::::::::::::::::::::::::::::::::::::::::::::::/hhhhhdmmmmmsoo...
      ``+ddmmmdhhhhhyyyyyyyyyyyo:::::::::::::::::::::::::::::::::::::+++++sdddmmdhhsss//+
      ``+mmmmmhsshhhhhhhhhhhhhhy++/:::::::::::::::::::::::::::::::::::::::+ssyyydmmddd///hhd
      ``+mmmmmy::shhhhhhhhhhhhhhhhs:::::::::::::::::::::::::::::::::::::::::::::ymmmmmmmh../
      ``+mmmmmy:://////////////ohhhyy+::::::::::::::::::::::::::::::::::::::::::///hddmmmhhs++s
      ``+mmmmmhssssssssssssssssydddddysssssssssssssssssssssssssssssssssssssssssssssdddmmmmmy::s
      ``+mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmhooh
```

The only Slack reaction gifs you'll ever need.

## Thanks

{{#contributors}}
 * [@{{username}}](https://github.com/{{username}}) for {{#contributions}}{{#and}} and {{/and}}[{{action}}](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/{{pr}}){{#comma}}, {{/comma}}{{/contributions}}
{{/contributors}}

# Contributing!

 1. Add your parrot gif to `parrots/` and append an entry to `parrots.json`
 1. Make sure your parrot gif file is named [name]parrot.gif in all lower case e.g. `exampleparrot.gif`
 1. Open a PR
 1. PARTY

# Deploying!

 1. `npm install`
 1. `bash make build`
 1. Upload the contents of `dist/` somewhere!

# Automated Upload

## Slack via `emojipacks`

>**WARNING:** Due to a recent Slack update, which changes their emoji upload UI, this method using emojipacks may not work. A current workaround is to use the `Neutral Face Emoji Tools` Chrome extension. This extension allows you to batch upload emojis by dragging and dropping the files into it's UI. You can find the extension [here](https://chrome.google.com/webstore/detail/neutral-face-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej).

First, you need to clone this repo and run the build script with `npm run build` or `yarn build`.

It will generate a `dist/` folder containing the website build files; we only need the  `dist/parrotparty.yaml`. Copy the file path.

Then, run `emojipacks` (`npm i -g emojipacks` if you don't have it yet): you'll be asked to enter your Slack credentials plus _the path of the yaml file_. That's all! Enjoy your parrots.


## Discord via Mr. Parrot

  1. [Click this link](https://discordapp.com/oauth2/authorize?client_id=394830082058747905&permissions=1074006016&scope=bot) to invite the bot to your server
  2. Enjoy!
