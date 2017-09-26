# [cultofthepartyparrot.com](http://cultofthepartyparrot.com)

[![Build Status](https://travis-ci.org/jmhobbs/cultofthepartyparrot.com.svg?branch=master)](https://travis-ci.org/jmhobbs/cultofthepartyparrot.com)

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

The only Slack reaction gif's you'll ever need.

## Thanks

{{#contributors}}
 * [@{{username}}](https://github.com/{{username}}) for {{#contributions}}{{#and}} and {{/and}}[{{action}}](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/{{pr}}){{#comma}}, {{/comma}}{{/contributions}}
{{/contributors}}

# Contributing!

 1. Add your parrot gif to `parrots/` and append an entry to `parrots.json`
 1. Open a PR
 1. PARTY

# Deploying!

 1. `npm install`
 1. `gulp build`
 1. Upload it somewhere!

# Automated upload via Selenium

You'll need Python 3, Google Chrome and chromedriver (`brew install chromedriver`)
installed to run this:

 1. `python3 -m venv .venv`
 2. `pip install -r requirements.txt`
 3. `python upload_parrots.py --team YOUR_TEAM --username YOUR_EMAIL --password YOUR_PASS`

 __Notice__: The uploader won't re-write already existing parrots if they match by name.
