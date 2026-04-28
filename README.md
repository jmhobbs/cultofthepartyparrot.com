# [cultofthepartyparrot.com](http://cultofthepartyparrot.com)

[![Build Status](https://circleci.com/gh/jmhobbs/cultofthepartyparrot.com/tree/main.svg?style=shield)](https://circleci.com/gh/jmhobbs/cultofthepartyparrot.com/tree/main)
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

# Contributing!

 1. Add your parrot gif to `parrots/` and append an entry to `parrots.yaml` (not `parrots.json`!)
 1. Make sure your parrot gif file is named [name]parrot.gif in all lower case e.g. `exampleparrot.gif`
 1. Open a PR
 1. PARTY

# Deploying!

 1. `npm install`
 1. Ensure you have the other tools installed. A brewfile is provided for MacOS users (`brew bundle install --file=./Brewfile`).  Running `bash make verify-install` will verify all tools are installed and available.
     - [`gulp` global runner](https://gulpjs.com/) - `npm install --global gulp-cli`
     - [`jq`](https://jqlang.github.io/jq/)
     - [`gifsicle`](https://www.lcdf.org/gifsicle/)
     - [`pngcrush`](https://github.com/Kjuly/pngcrush)
     - [`jpegtran`](https://www.libjpeg-turbo.org/)
     - [`imagemagick`](https://imagemagick.org/index.php)
 1. Run `bash make build` to generate everything. There is not a dev/watch mode, unfortunately.
 1. Upload the contents of `dist/` somewhere!

# Automated Upload

## Slack via `emojipacks`

>**WARNING:** Due to a recent Slack update, which changes their emoji upload UI, this method using emojipacks may not work. A current workaround is to use the `Neutral Face Emoji Tools` Chrome extension. This extension allows you to batch upload emojis by dragging and dropping the files into its UI. You can find the extension [here](https://chrome.google.com/webstore/detail/neutral-face-emoji-tools/anchoacphlfbdomdlomnbbfhcmcdmjej).

First, you need to clone this repo and run the build script with `npm run build` or `yarn build`.

It will generate a `dist/` folder containing the website build files; we only need the  `dist/parrotparty.yaml`. Copy the file path.

Then, run `emojipacks` (`npm i -g emojipacks` if you don't have it yet): you'll be asked to enter your Slack credentials plus _the path of the yaml file_. That's all! Enjoy your parrots.


## Discord via Mr. Parrot

  1. [Click this link](https://discordapp.com/oauth2/authorize?client_id=394830082058747905&permissions=1074006016&scope=bot) to invite the bot to your server
  2. Enjoy!

## Thanks!

<div markdown="1">
    <a href="https://github.com/mermop"><img src="https://avatars.githubusercontent.com/mermop?s=40&v=4" height="40" alt="@mermop Avatar" /></a>
    <a href="https://github.com/ianfixes"><img src="https://avatars.githubusercontent.com/ianfixes?s=40&v=4" height="40" alt="@ianfixes Avatar" /></a>
    <a href="https://github.com/gjtorikian"><img src="https://avatars.githubusercontent.com/gjtorikian?s=40&v=4" height="40" alt="@gjtorikian Avatar" /></a>
    <a href="https://github.com/ermanc"><img src="https://avatars.githubusercontent.com/ermanc?s=40&v=4" height="40" alt="@ermanc Avatar" /></a>
    <a href="https://github.com/glentakahashi"><img src="https://avatars.githubusercontent.com/glentakahashi?s=40&v=4" height="40" alt="@glentakahashi Avatar" /></a>
    <a href="https://github.com/daveyarwood"><img src="https://avatars.githubusercontent.com/daveyarwood?s=40&v=4" height="40" alt="@daveyarwood Avatar" /></a>
    <a href="https://github.com/tysondreeder"><img src="https://avatars.githubusercontent.com/tysondreeder?s=40&v=4" height="40" alt="@tysondreeder Avatar" /></a>
    <a href="https://github.com/hrimhari"><img src="https://avatars.githubusercontent.com/hrimhari?s=40&v=4" height="40" alt="@hrimhari Avatar" /></a>
    <a href="https://github.com/ernestoacevedo"><img src="https://avatars.githubusercontent.com/ernestoacevedo?s=40&v=4" height="40" alt="@ernestoacevedo Avatar" /></a>
    <a href="https://github.com/andyhmltn"><img src="https://avatars.githubusercontent.com/andyhmltn?s=40&v=4" height="40" alt="@andyhmltn Avatar" /></a>
    <a href="https://github.com/oliviag"><img src="https://avatars.githubusercontent.com/oliviag?s=40&v=4" height="40" alt="@oliviag Avatar" /></a>
    <a href="https://github.com/ultrafez"><img src="https://avatars.githubusercontent.com/ultrafez?s=40&v=4" height="40" alt="@ultrafez Avatar" /></a>
    <a href="https://github.com/samlindsaylevine"><img src="https://avatars.githubusercontent.com/samlindsaylevine?s=40&v=4" height="40" alt="@samlindsaylevine Avatar" /></a>
    <a href="https://github.com/joaorgsampaio"><img src="https://avatars.githubusercontent.com/joaorgsampaio?s=40&v=4" height="40" alt="@joaorgsampaio Avatar" /></a>
    <a href="https://github.com/natelowry"><img src="https://avatars.githubusercontent.com/natelowry?s=40&v=4" height="40" alt="@natelowry Avatar" /></a>
    <a href="https://github.com/kyprifog"><img src="https://avatars.githubusercontent.com/kyprifog?s=40&v=4" height="40" alt="@kyprifog Avatar" /></a>
    <a href="https://github.com/chalisegrogan"><img src="https://avatars.githubusercontent.com/chalisegrogan?s=40&v=4" height="40" alt="@chalisegrogan Avatar" /></a>
    <a href="https://github.com/westerlund"><img src="https://avatars.githubusercontent.com/westerlund?s=40&v=4" height="40" alt="@westerlund Avatar" /></a>
    <a href="https://github.com/clangen"><img src="https://avatars.githubusercontent.com/clangen?s=40&v=4" height="40" alt="@clangen Avatar" /></a>
    <a href="https://github.com/chemikpil"><img src="https://avatars.githubusercontent.com/chemikpil?s=40&v=4" height="40" alt="@chemikpil Avatar" /></a>
    <a href="https://github.com/jhildings"><img src="https://avatars.githubusercontent.com/jhildings?s=40&v=4" height="40" alt="@jhildings Avatar" /></a>
    <a href="https://github.com/schaney"><img src="https://avatars.githubusercontent.com/schaney?s=40&v=4" height="40" alt="@schaney Avatar" /></a>
    <a href="https://github.com/321Fetch"><img src="https://avatars.githubusercontent.com/321Fetch?s=40&v=4" height="40" alt="@321Fetch Avatar" /></a>
    <a href="https://github.com/camilaazuma"><img src="https://avatars.githubusercontent.com/camilaazuma?s=40&v=4" height="40" alt="@camilaazuma Avatar" /></a>
    <a href="https://github.com/kbvincent"><img src="https://avatars.githubusercontent.com/kbvincent?s=40&v=4" height="40" alt="@kbvincent Avatar" /></a>
    <a href="https://github.com/francoislg"><img src="https://avatars.githubusercontent.com/francoislg?s=40&v=4" height="40" alt="@francoislg Avatar" /></a>
    <a href="https://github.com/c-r-a-f"><img src="https://avatars.githubusercontent.com/c-r-a-f?s=40&v=4" height="40" alt="@c-r-a-f Avatar" /></a>
    <a href="https://github.com/curiousepic"><img src="https://avatars.githubusercontent.com/curiousepic?s=40&v=4" height="40" alt="@curiousepic Avatar" /></a>
    <a href="https://github.com/marcthayer"><img src="https://avatars.githubusercontent.com/marcthayer?s=40&v=4" height="40" alt="@marcthayer Avatar" /></a>
    <a href="https://github.com/tianyuliu"><img src="https://avatars.githubusercontent.com/tianyuliu?s=40&v=4" height="40" alt="@tianyuliu Avatar" /></a>
    <a href="https://github.com/Omlahid"><img src="https://avatars.githubusercontent.com/Omlahid?s=40&v=4" height="40" alt="@Omlahid Avatar" /></a>
    <a href="https://github.com/vaicine"><img src="https://avatars.githubusercontent.com/vaicine?s=40&v=4" height="40" alt="@vaicine Avatar" /></a>
    <a href="https://github.com/deedeelavinder"><img src="https://avatars.githubusercontent.com/deedeelavinder?s=40&v=4" height="40" alt="@deedeelavinder Avatar" /></a>
    <a href="https://github.com/jcoutch"><img src="https://avatars.githubusercontent.com/jcoutch?s=40&v=4" height="40" alt="@jcoutch Avatar" /></a>
    <a href="https://github.com/paul-russo"><img src="https://avatars.githubusercontent.com/paul-russo?s=40&v=4" height="40" alt="@paul-russo Avatar" /></a>
    <a href="https://github.com/lucymhdavies"><img src="https://avatars.githubusercontent.com/lucymhdavies?s=40&v=4" height="40" alt="@lucymhdavies Avatar" /></a>
    <a href="https://github.com/viktorsec"><img src="https://avatars.githubusercontent.com/viktorsec?s=40&v=4" height="40" alt="@viktorsec Avatar" /></a>
    <a href="https://github.com/ada-lovecraft"><img src="https://avatars.githubusercontent.com/ada-lovecraft?s=40&v=4" height="40" alt="@ada-lovecraft Avatar" /></a>
    <a href="https://github.com/mjaniszew"><img src="https://avatars.githubusercontent.com/mjaniszew?s=40&v=4" height="40" alt="@mjaniszew Avatar" /></a>
    <a href="https://github.com/melinerunen"><img src="https://avatars.githubusercontent.com/melinerunen?s=40&v=4" height="40" alt="@melinerunen Avatar" /></a>
    <a href="https://github.com/joekieffer"><img src="https://avatars.githubusercontent.com/joekieffer?s=40&v=4" height="40" alt="@joekieffer Avatar" /></a>
    <a href="https://github.com/erinknight242"><img src="https://avatars.githubusercontent.com/erinknight242?s=40&v=4" height="40" alt="@erinknight242 Avatar" /></a>
    <a href="https://github.com/trekroot"><img src="https://avatars.githubusercontent.com/trekroot?s=40&v=4" height="40" alt="@trekroot Avatar" /></a>
    <a href="https://github.com/KeesKoffeman"><img src="https://avatars.githubusercontent.com/KeesKoffeman?s=40&v=4" height="40" alt="@KeesKoffeman Avatar" /></a>
    <a href="https://github.com/shiruken"><img src="https://avatars.githubusercontent.com/shiruken?s=40&v=4" height="40" alt="@shiruken Avatar" /></a>
    <a href="https://github.com/bdrelling "><img src="https://avatars.githubusercontent.com/bdrelling ?s=40&v=4" height="40" alt="@bdrelling  Avatar" /></a>
    <a href="https://github.com/KySmith1"><img src="https://avatars.githubusercontent.com/KySmith1?s=40&v=4" height="40" alt="@KySmith1 Avatar" /></a>
    <a href="https://github.com/arturocr"><img src="https://avatars.githubusercontent.com/arturocr?s=40&v=4" height="40" alt="@arturocr Avatar" /></a>
    <a href="https://github.com/jgknight"><img src="https://avatars.githubusercontent.com/jgknight?s=40&v=4" height="40" alt="@jgknight Avatar" /></a>
    <a href="https://github.com/nlgcabrera"><img src="https://avatars.githubusercontent.com/nlgcabrera?s=40&v=4" height="40" alt="@nlgcabrera Avatar" /></a>
    <a href="https://github.com/santiycr"><img src="https://avatars.githubusercontent.com/santiycr?s=40&v=4" height="40" alt="@santiycr Avatar" /></a>
    <a href="https://github.com/zvuc"><img src="https://avatars.githubusercontent.com/zvuc?s=40&v=4" height="40" alt="@zvuc Avatar" /></a>
    <a href="https://github.com/emicba"><img src="https://avatars.githubusercontent.com/emicba?s=40&v=4" height="40" alt="@emicba Avatar" /></a>
    <a href="https://github.com/hrousley"><img src="https://avatars.githubusercontent.com/hrousley?s=40&v=4" height="40" alt="@hrousley Avatar" /></a>
    <a href="https://github.com/trekroot "><img src="https://avatars.githubusercontent.com/trekroot ?s=40&v=4" height="40" alt="@trekroot  Avatar" /></a>
    <a href="https://github.com/trcliao"><img src="https://avatars.githubusercontent.com/trcliao?s=40&v=4" height="40" alt="@trcliao Avatar" /></a>
    <a href="https://github.com/ErinMorelli"><img src="https://avatars.githubusercontent.com/ErinMorelli?s=40&v=4" height="40" alt="@ErinMorelli Avatar" /></a>
    <a href="https://github.com/belltailjp"><img src="https://avatars.githubusercontent.com/belltailjp?s=40&v=4" height="40" alt="@belltailjp Avatar" /></a>
    <a href="https://github.com/breadadams"><img src="https://avatars.githubusercontent.com/breadadams?s=40&v=4" height="40" alt="@breadadams Avatar" /></a>
    <a href="https://github.com/danrichman"><img src="https://avatars.githubusercontent.com/danrichman?s=40&v=4" height="40" alt="@danrichman Avatar" /></a>
    <a href="https://github.com/rickyhoots"><img src="https://avatars.githubusercontent.com/rickyhoots?s=40&v=4" height="40" alt="@rickyhoots Avatar" /></a>
    <a href="https://github.com/cavpollo"><img src="https://avatars.githubusercontent.com/cavpollo?s=40&v=4" height="40" alt="@cavpollo Avatar" /></a>
    <a href="https://github.com/nuragic"><img src="https://avatars.githubusercontent.com/nuragic?s=40&v=4" height="40" alt="@nuragic Avatar" /></a>
    <a href="https://github.com/TheoKanning"><img src="https://avatars.githubusercontent.com/TheoKanning?s=40&v=4" height="40" alt="@TheoKanning Avatar" /></a>
    <a href="https://github.com/zix99"><img src="https://avatars.githubusercontent.com/zix99?s=40&v=4" height="40" alt="@zix99 Avatar" /></a>
    <a href="https://github.com/justalemon"><img src="https://avatars.githubusercontent.com/justalemon?s=40&v=4" height="40" alt="@justalemon Avatar" /></a>
    <a href="https://github.com/matthewjwolff"><img src="https://avatars.githubusercontent.com/matthewjwolff?s=40&v=4" height="40" alt="@matthewjwolff Avatar" /></a>
    <a href="https://github.com/kiwivogel"><img src="https://avatars.githubusercontent.com/kiwivogel?s=40&v=4" height="40" alt="@kiwivogel Avatar" /></a>
    <a href="https://github.com/Darth-Arminius"><img src="https://avatars.githubusercontent.com/Darth-Arminius?s=40&v=4" height="40" alt="@Darth-Arminius Avatar" /></a>
    <a href="https://github.com/emmajam"><img src="https://avatars.githubusercontent.com/emmajam?s=40&v=4" height="40" alt="@emmajam Avatar" /></a>
    <a href="https://github.com/juniormucciolo"><img src="https://avatars.githubusercontent.com/juniormucciolo?s=40&v=4" height="40" alt="@juniormucciolo Avatar" /></a>
    <a href="https://github.com/mrkolby"><img src="https://avatars.githubusercontent.com/mrkolby?s=40&v=4" height="40" alt="@mrkolby Avatar" /></a>
    <a href="https://github.com/christianrank"><img src="https://avatars.githubusercontent.com/christianrank?s=40&v=4" height="40" alt="@christianrank Avatar" /></a>
    <a href="https://github.com/eokuwwy"><img src="https://avatars.githubusercontent.com/eokuwwy?s=40&v=4" height="40" alt="@eokuwwy Avatar" /></a>
    <a href="https://github.com/jesivasq"><img src="https://avatars.githubusercontent.com/jesivasq?s=40&v=4" height="40" alt="@jesivasq Avatar" /></a>
    <a href="https://github.com/armills"><img src="https://avatars.githubusercontent.com/armills?s=40&v=4" height="40" alt="@armills Avatar" /></a>
    <a href="https://github.com/smlevorse"><img src="https://avatars.githubusercontent.com/smlevorse?s=40&v=4" height="40" alt="@smlevorse Avatar" /></a>
    <a href="https://github.com/bushong1"><img src="https://avatars.githubusercontent.com/bushong1?s=40&v=4" height="40" alt="@bushong1 Avatar" /></a>
    <a href="https://github.com/sashforth"><img src="https://avatars.githubusercontent.com/sashforth?s=40&v=4" height="40" alt="@sashforth Avatar" /></a>
    <a href="https://github.com/mconiglio"><img src="https://avatars.githubusercontent.com/mconiglio?s=40&v=4" height="40" alt="@mconiglio Avatar" /></a>
    <a href="https://github.com/felipericieri"><img src="https://avatars.githubusercontent.com/felipericieri?s=40&v=4" height="40" alt="@felipericieri Avatar" /></a>
    <a href="https://github.com/davin-english"><img src="https://avatars.githubusercontent.com/davin-english?s=40&v=4" height="40" alt="@davin-english Avatar" /></a>
    <a href="https://github.com/tgockel"><img src="https://avatars.githubusercontent.com/tgockel?s=40&v=4" height="40" alt="@tgockel Avatar" /></a>
    <a href="https://github.com/moigonzalez"><img src="https://avatars.githubusercontent.com/moigonzalez?s=40&v=4" height="40" alt="@moigonzalez Avatar" /></a>
    <a href="https://github.com/georgegillams"><img src="https://avatars.githubusercontent.com/georgegillams?s=40&v=4" height="40" alt="@georgegillams Avatar" /></a>
    <a href="https://github.com/unlobito"><img src="https://avatars.githubusercontent.com/unlobito?s=40&v=4" height="40" alt="@unlobito Avatar" /></a>
    <a href="https://github.com/borisrev"><img src="https://avatars.githubusercontent.com/borisrev?s=40&v=4" height="40" alt="@borisrev Avatar" /></a>
    <a href="https://github.com/Jegama"><img src="https://avatars.githubusercontent.com/Jegama?s=40&v=4" height="40" alt="@Jegama Avatar" /></a>
    <a href="https://github.com/oXis"><img src="https://avatars.githubusercontent.com/oXis?s=40&v=4" height="40" alt="@oXis Avatar" /></a>
    <a href="https://github.com/dp12"><img src="https://avatars.githubusercontent.com/dp12?s=40&v=4" height="40" alt="@dp12 Avatar" /></a>
    <a href="https://github.com/uberchemist"><img src="https://avatars.githubusercontent.com/uberchemist?s=40&v=4" height="40" alt="@uberchemist Avatar" /></a>
    <a href="https://github.com/dtexlyn"><img src="https://avatars.githubusercontent.com/dtexlyn?s=40&v=4" height="40" alt="@dtexlyn Avatar" /></a>
    <a href="https://github.com/jpac-run"><img src="https://avatars.githubusercontent.com/jpac-run?s=40&v=4" height="40" alt="@jpac-run Avatar" /></a>
    <a href="https://github.com/sadleremy"><img src="https://avatars.githubusercontent.com/sadleremy?s=40&v=4" height="40" alt="@sadleremy Avatar" /></a>
    <a href="https://github.com/kareiva"><img src="https://avatars.githubusercontent.com/kareiva?s=40&v=4" height="40" alt="@kareiva Avatar" /></a>
    <a href="https://github.com/oibind"><img src="https://avatars.githubusercontent.com/oibind?s=40&v=4" height="40" alt="@oibind Avatar" /></a>
    <a href="https://github.com/TheOnlyGhostwolf"><img src="https://avatars.githubusercontent.com/TheOnlyGhostwolf?s=40&v=4" height="40" alt="@TheOnlyGhostwolf Avatar" /></a>
    <a href="https://github.com/WilliamCollishaw"><img src="https://avatars.githubusercontent.com/WilliamCollishaw?s=40&v=4" height="40" alt="@WilliamCollishaw Avatar" /></a>
    <a href="https://github.com/pacbroens"><img src="https://avatars.githubusercontent.com/pacbroens?s=40&v=4" height="40" alt="@pacbroens Avatar" /></a>
    <a href="https://github.com/WyTeav"><img src="https://avatars.githubusercontent.com/WyTeav?s=40&v=4" height="40" alt="@WyTeav Avatar" /></a>
    <a href="https://github.com/urielsalis"><img src="https://avatars.githubusercontent.com/urielsalis?s=40&v=4" height="40" alt="@urielsalis Avatar" /></a>
    <a href="https://github.com/rsimai"><img src="https://avatars.githubusercontent.com/rsimai?s=40&v=4" height="40" alt="@rsimai Avatar" /></a>
    <a href="https://github.com/mbifulco"><img src="https://avatars.githubusercontent.com/mbifulco?s=40&v=4" height="40" alt="@mbifulco Avatar" /></a>
    <a href="https://github.com/alessandroniciforo"><img src="https://avatars.githubusercontent.com/alessandroniciforo?s=40&v=4" height="40" alt="@alessandroniciforo Avatar" /></a>
    <a href="https://github.com/itmart"><img src="https://avatars.githubusercontent.com/itmart?s=40&v=4" height="40" alt="@itmart Avatar" /></a>
    <a href="https://github.com/gabrieltal"><img src="https://avatars.githubusercontent.com/gabrieltal?s=40&v=4" height="40" alt="@gabrieltal Avatar" /></a>
    <a href="https://github.com/Tobski"><img src="https://avatars.githubusercontent.com/Tobski?s=40&v=4" height="40" alt="@Tobski Avatar" /></a>
    <a href="https://github.com/Mindflayo"><img src="https://avatars.githubusercontent.com/Mindflayo?s=40&v=4" height="40" alt="@Mindflayo Avatar" /></a>
    <a href="https://github.com/pauleks"><img src="https://avatars.githubusercontent.com/pauleks?s=40&v=4" height="40" alt="@pauleks Avatar" /></a>
    <a href="https://github.com/donnavitan"><img src="https://avatars.githubusercontent.com/donnavitan?s=40&v=4" height="40" alt="@donnavitan Avatar" /></a>
    <a href="https://github.com/kevinhhuynh"><img src="https://avatars.githubusercontent.com/kevinhhuynh?s=40&v=4" height="40" alt="@kevinhhuynh Avatar" /></a>
    <a href="https://github.com/noSim"><img src="https://avatars.githubusercontent.com/noSim?s=40&v=4" height="40" alt="@noSim Avatar" /></a>
    <a href="https://github.com/martin-gnodtke"><img src="https://avatars.githubusercontent.com/martin-gnodtke?s=40&v=4" height="40" alt="@martin-gnodtke Avatar" /></a>
    <a href="https://github.com/zschallz"><img src="https://avatars.githubusercontent.com/zschallz?s=40&v=4" height="40" alt="@zschallz Avatar" /></a>
    <a href="https://github.com/cpobdev"><img src="https://avatars.githubusercontent.com/cpobdev?s=40&v=4" height="40" alt="@cpobdev Avatar" /></a>
    <a href="https://github.com/ayatothos"><img src="https://avatars.githubusercontent.com/ayatothos?s=40&v=4" height="40" alt="@ayatothos Avatar" /></a>
    <a href="https://github.com/poulad"><img src="https://avatars.githubusercontent.com/poulad?s=40&v=4" height="40" alt="@poulad Avatar" /></a>
    <a href="https://github.com/wand2016"><img src="https://avatars.githubusercontent.com/wand2016?s=40&v=4" height="40" alt="@wand2016 Avatar" /></a>
    <a href="https://github.com/cscashby"><img src="https://avatars.githubusercontent.com/cscashby?s=40&v=4" height="40" alt="@cscashby Avatar" /></a>
    <a href="https://github.com/TortoiseWrath"><img src="https://avatars.githubusercontent.com/TortoiseWrath?s=40&v=4" height="40" alt="@TortoiseWrath Avatar" /></a>
    <a href="https://github.com/akihanari"><img src="https://avatars.githubusercontent.com/akihanari?s=40&v=4" height="40" alt="@akihanari Avatar" /></a>
    <a href="https://github.com/deadbeef404"><img src="https://avatars.githubusercontent.com/deadbeef404?s=40&v=4" height="40" alt="@deadbeef404 Avatar" /></a>
    <a href="https://github.com/BrendanBerkley"><img src="https://avatars.githubusercontent.com/BrendanBerkley?s=40&v=4" height="40" alt="@BrendanBerkley Avatar" /></a>
    <a href="https://github.com/zymbaluk"><img src="https://avatars.githubusercontent.com/zymbaluk?s=40&v=4" height="40" alt="@zymbaluk Avatar" /></a>
    <a href="https://github.com/wowu"><img src="https://avatars.githubusercontent.com/wowu?s=40&v=4" height="40" alt="@wowu Avatar" /></a>
    <a href="https://github.com/jnbgfrtyuh"><img src="https://avatars.githubusercontent.com/jnbgfrtyuh?s=40&v=4" height="40" alt="@jnbgfrtyuh Avatar" /></a>
    <a href="https://github.com/FlowerSan"><img src="https://avatars.githubusercontent.com/FlowerSan?s=40&v=4" height="40" alt="@FlowerSan Avatar" /></a>
    <a href="https://github.com/HidingCherry"><img src="https://avatars.githubusercontent.com/HidingCherry?s=40&v=4" height="40" alt="@HidingCherry Avatar" /></a>
    <a href="https://github.com/guiprou"><img src="https://avatars.githubusercontent.com/guiprou?s=40&v=4" height="40" alt="@guiprou Avatar" /></a>
    <a href="https://github.com/yumx02"><img src="https://avatars.githubusercontent.com/yumx02?s=40&v=4" height="40" alt="@yumx02 Avatar" /></a>
    <a href="https://github.com/danryder"><img src="https://avatars.githubusercontent.com/danryder?s=40&v=4" height="40" alt="@danryder Avatar" /></a>
    <a href="https://github.com/KotoriK"><img src="https://avatars.githubusercontent.com/KotoriK?s=40&v=4" height="40" alt="@KotoriK Avatar" /></a>
    <a href="https://github.com/jesusjimsa"><img src="https://avatars.githubusercontent.com/jesusjimsa?s=40&v=4" height="40" alt="@jesusjimsa Avatar" /></a>
    <a href="https://github.com/jack-green"><img src="https://avatars.githubusercontent.com/jack-green?s=40&v=4" height="40" alt="@jack-green Avatar" /></a>
    <a href="https://github.com/kyourikey"><img src="https://avatars.githubusercontent.com/kyourikey?s=40&v=4" height="40" alt="@kyourikey Avatar" /></a>
    <a href="https://github.com/KoichiroGIF"><img src="https://avatars.githubusercontent.com/KoichiroGIF?s=40&v=4" height="40" alt="@KoichiroGIF Avatar" /></a>
    <a href="https://github.com/jtrnw"><img src="https://avatars.githubusercontent.com/jtrnw?s=40&v=4" height="40" alt="@jtrnw Avatar" /></a>
    <a href="https://github.com/don-code"><img src="https://avatars.githubusercontent.com/don-code?s=40&v=4" height="40" alt="@don-code Avatar" /></a>
    <a href="https://github.com/Energy-core"><img src="https://avatars.githubusercontent.com/Energy-core?s=40&v=4" height="40" alt="@Energy-core Avatar" /></a>
    <a href="https://github.com/ladomi"><img src="https://avatars.githubusercontent.com/ladomi?s=40&v=4" height="40" alt="@ladomi Avatar" /></a>
    <a href="https://github.com/yutofukushima"><img src="https://avatars.githubusercontent.com/yutofukushima?s=40&v=4" height="40" alt="@yutofukushima Avatar" /></a>
    <a href="https://github.com/nduggar"><img src="https://avatars.githubusercontent.com/nduggar?s=40&v=4" height="40" alt="@nduggar Avatar" /></a>
    <a href="https://github.com/nathanielw"><img src="https://avatars.githubusercontent.com/nathanielw?s=40&v=4" height="40" alt="@nathanielw Avatar" /></a>
    <a href="https://github.com/tan14007"><img src="https://avatars.githubusercontent.com/tan14007?s=40&v=4" height="40" alt="@tan14007 Avatar" /></a>
    <a href="https://github.com/jeyemwey"><img src="https://avatars.githubusercontent.com/jeyemwey?s=40&v=4" height="40" alt="@jeyemwey Avatar" /></a>
    <a href="https://github.com/namchaunguyen"><img src="https://avatars.githubusercontent.com/namchaunguyen?s=40&v=4" height="40" alt="@namchaunguyen Avatar" /></a>
    <a href="https://github.com/xMcLOVINx"><img src="https://avatars.githubusercontent.com/xMcLOVINx?s=40&v=4" height="40" alt="@xMcLOVINx Avatar" /></a>
    <a href="https://github.com/bolajiscott"><img src="https://avatars.githubusercontent.com/bolajiscott?s=40&v=4" height="40" alt="@bolajiscott Avatar" /></a>
    <a href="https://github.com/lahdekorpi"><img src="https://avatars.githubusercontent.com/lahdekorpi?s=40&v=4" height="40" alt="@lahdekorpi Avatar" /></a>
    <a href="https://github.com/Quron"><img src="https://avatars.githubusercontent.com/Quron?s=40&v=4" height="40" alt="@Quron Avatar" /></a>
    <a href="https://github.com/masonanders"><img src="https://avatars.githubusercontent.com/masonanders?s=40&v=4" height="40" alt="@masonanders Avatar" /></a>
    <a href="https://github.com/ochan12"><img src="https://avatars.githubusercontent.com/ochan12?s=40&v=4" height="40" alt="@ochan12 Avatar" /></a>
    <a href="https://github.com/graph1994"><img src="https://avatars.githubusercontent.com/graph1994?s=40&v=4" height="40" alt="@graph1994 Avatar" /></a>
    <a href="https://github.com/jacobrose"><img src="https://avatars.githubusercontent.com/jacobrose?s=40&v=4" height="40" alt="@jacobrose Avatar" /></a>
    <a href="https://github.com/Fikemox"><img src="https://avatars.githubusercontent.com/Fikemox?s=40&v=4" height="40" alt="@Fikemox Avatar" /></a>
    <a href="https://github.com/shazena"><img src="https://avatars.githubusercontent.com/shazena?s=40&v=4" height="40" alt="@shazena Avatar" /></a>
    <a href="https://github.com/claveaumax"><img src="https://avatars.githubusercontent.com/claveaumax?s=40&v=4" height="40" alt="@claveaumax Avatar" /></a>
    <a href="https://github.com/viktigpetterr"><img src="https://avatars.githubusercontent.com/viktigpetterr?s=40&v=4" height="40" alt="@viktigpetterr Avatar" /></a>
    <a href="https://github.com/ioki-klaus"><img src="https://avatars.githubusercontent.com/ioki-klaus?s=40&v=4" height="40" alt="@ioki-klaus Avatar" /></a>
    <a href="https://github.com/LeonardoCerqueira96"><img src="https://avatars.githubusercontent.com/LeonardoCerqueira96?s=40&v=4" height="40" alt="@LeonardoCerqueira96 Avatar" /></a>
    <a href="https://github.com/AdrienPoupa"><img src="https://avatars.githubusercontent.com/AdrienPoupa?s=40&v=4" height="40" alt="@AdrienPoupa Avatar" /></a>
    <a href="https://github.com/mattruston"><img src="https://avatars.githubusercontent.com/mattruston?s=40&v=4" height="40" alt="@mattruston Avatar" /></a>
    <a href="https://github.com/liamdawson"><img src="https://avatars.githubusercontent.com/liamdawson?s=40&v=4" height="40" alt="@liamdawson Avatar" /></a>
    <a href="https://github.com/Krlier"><img src="https://avatars.githubusercontent.com/Krlier?s=40&v=4" height="40" alt="@Krlier Avatar" /></a>
    <a href="https://github.com/aamorin"><img src="https://avatars.githubusercontent.com/aamorin?s=40&v=4" height="40" alt="@aamorin Avatar" /></a>
    <a href="https://github.com/maxgoedjen"><img src="https://avatars.githubusercontent.com/maxgoedjen?s=40&v=4" height="40" alt="@maxgoedjen Avatar" /></a>
    <a href="https://github.com/theRealWardo"><img src="https://avatars.githubusercontent.com/theRealWardo?s=40&v=4" height="40" alt="@theRealWardo Avatar" /></a>
    <a href="https://github.com/yakiimo121"><img src="https://avatars.githubusercontent.com/yakiimo121?s=40&v=4" height="40" alt="@yakiimo121 Avatar" /></a>
    <a href="https://github.com/aaronpace"><img src="https://avatars.githubusercontent.com/aaronpace?s=40&v=4" height="40" alt="@aaronpace Avatar" /></a>
    <a href="https://github.com/ishaanharry"><img src="https://avatars.githubusercontent.com/ishaanharry?s=40&v=4" height="40" alt="@ishaanharry Avatar" /></a>
    <a href="https://github.com/rjcausarano"><img src="https://avatars.githubusercontent.com/rjcausarano?s=40&v=4" height="40" alt="@rjcausarano Avatar" /></a>
    <a href="https://github.com/Panquesito7"><img src="https://avatars.githubusercontent.com/Panquesito7?s=40&v=4" height="40" alt="@Panquesito7 Avatar" /></a>
    <a href="https://github.com/mikiilis"><img src="https://avatars.githubusercontent.com/mikiilis?s=40&v=4" height="40" alt="@mikiilis Avatar" /></a>
    <a href="https://github.com/kaas3000"><img src="https://avatars.githubusercontent.com/kaas3000?s=40&v=4" height="40" alt="@kaas3000 Avatar" /></a>
    <a href="https://github.com/infinitewarp"><img src="https://avatars.githubusercontent.com/infinitewarp?s=40&v=4" height="40" alt="@infinitewarp Avatar" /></a>
    <a href="https://github.com/samyouxyz"><img src="https://avatars.githubusercontent.com/samyouxyz?s=40&v=4" height="40" alt="@samyouxyz Avatar" /></a>
    <a href="https://github.com/greywillfade"><img src="https://avatars.githubusercontent.com/greywillfade?s=40&v=4" height="40" alt="@greywillfade Avatar" /></a>
    <a href="https://github.com/phil-chp"><img src="https://avatars.githubusercontent.com/phil-chp?s=40&v=4" height="40" alt="@phil-chp Avatar" /></a>
    <a href="https://github.com/dunklesToast"><img src="https://avatars.githubusercontent.com/dunklesToast?s=40&v=4" height="40" alt="@dunklesToast Avatar" /></a>
    <a href="https://github.com/ezbc"><img src="https://avatars.githubusercontent.com/ezbc?s=40&v=4" height="40" alt="@ezbc Avatar" /></a>
    <a href="https://github.com/revolutionart"><img src="https://avatars.githubusercontent.com/revolutionart?s=40&v=4" height="40" alt="@revolutionart Avatar" /></a>
    <a href="https://github.com/prome17"><img src="https://avatars.githubusercontent.com/prome17?s=40&v=4" height="40" alt="@prome17 Avatar" /></a>
    <a href="https://github.com/YodaDaCoda"><img src="https://avatars.githubusercontent.com/YodaDaCoda?s=40&v=4" height="40" alt="@YodaDaCoda Avatar" /></a>
    <a href="https://github.com/banjobyster"><img src="https://avatars.githubusercontent.com/banjobyster?s=40&v=4" height="40" alt="@banjobyster Avatar" /></a>
    <a href="https://github.com/MarcoSchiavello"><img src="https://avatars.githubusercontent.com/MarcoSchiavello?s=40&v=4" height="40" alt="@MarcoSchiavello Avatar" /></a>
    <a href="https://github.com/Nonmant"><img src="https://avatars.githubusercontent.com/Nonmant?s=40&v=4" height="40" alt="@Nonmant Avatar" /></a>
    <a href="https://github.com/LucianeFernandesRoque"><img src="https://avatars.githubusercontent.com/LucianeFernandesRoque?s=40&v=4" height="40" alt="@LucianeFernandesRoque Avatar" /></a>
    <a href="https://github.com/OliverVermeulen"><img src="https://avatars.githubusercontent.com/OliverVermeulen?s=40&v=4" height="40" alt="@OliverVermeulen Avatar" /></a>
    <a href="https://github.com/TimGoldbach"><img src="https://avatars.githubusercontent.com/TimGoldbach?s=40&v=4" height="40" alt="@TimGoldbach Avatar" /></a>
    <a href="https://github.com/zoidyzoidzoid"><img src="https://avatars.githubusercontent.com/zoidyzoidzoid?s=40&v=4" height="40" alt="@zoidyzoidzoid Avatar" /></a>
    <a href="https://github.com/marianabeldi"><img src="https://avatars.githubusercontent.com/marianabeldi?s=40&v=4" height="40" alt="@marianabeldi Avatar" /></a>
    <a href="https://github.com/TopHatGuy12"><img src="https://avatars.githubusercontent.com/TopHatGuy12?s=40&v=4" height="40" alt="@TopHatGuy12 Avatar" /></a>
    <a href="https://github.com/bnfld"><img src="https://avatars.githubusercontent.com/bnfld?s=40&v=4" height="40" alt="@bnfld Avatar" /></a>
    <a href="https://github.com/BrendanXBoyd"><img src="https://avatars.githubusercontent.com/BrendanXBoyd?s=40&v=4" height="40" alt="@BrendanXBoyd Avatar" /></a>
    <a href="https://github.com/Bharadwajshivam28"><img src="https://avatars.githubusercontent.com/Bharadwajshivam28?s=40&v=4" height="40" alt="@Bharadwajshivam28 Avatar" /></a>
    <a href="https://github.com/lopes-vincent"><img src="https://avatars.githubusercontent.com/lopes-vincent?s=40&v=4" height="40" alt="@lopes-vincent Avatar" /></a>
    <a href="https://github.com/leanormandon"><img src="https://avatars.githubusercontent.com/leanormandon?s=40&v=4" height="40" alt="@leanormandon Avatar" /></a>
    <a href="https://github.com/snball6"><img src="https://avatars.githubusercontent.com/snball6?s=40&v=4" height="40" alt="@snball6 Avatar" /></a>
    <a href="https://github.com/luke-brooks"><img src="https://avatars.githubusercontent.com/luke-brooks?s=40&v=4" height="40" alt="@luke-brooks Avatar" /></a>
    <a href="https://github.com/josebenitezg"><img src="https://avatars.githubusercontent.com/josebenitezg?s=40&v=4" height="40" alt="@josebenitezg Avatar" /></a>
    <a href="https://github.com/WeiJian123-tech"><img src="https://avatars.githubusercontent.com/WeiJian123-tech?s=40&v=4" height="40" alt="@WeiJian123-tech Avatar" /></a>
    <a href="https://github.com/ANSHIKA-26"><img src="https://avatars.githubusercontent.com/ANSHIKA-26?s=40&v=4" height="40" alt="@ANSHIKA-26 Avatar" /></a>
    <a href="https://github.com/edent"><img src="https://avatars.githubusercontent.com/edent?s=40&v=4" height="40" alt="@edent Avatar" /></a>
    <a href="https://github.com/kirby-b"><img src="https://avatars.githubusercontent.com/kirby-b?s=40&v=4" height="40" alt="@kirby-b Avatar" /></a>
    <a href="https://github.com/cudy789"><img src="https://avatars.githubusercontent.com/cudy789?s=40&v=4" height="40" alt="@cudy789 Avatar" /></a>
    <a href="https://github.com/MrCyGuy"><img src="https://avatars.githubusercontent.com/MrCyGuy?s=40&v=4" height="40" alt="@MrCyGuy Avatar" /></a>
    <a href="https://github.com/thischarles"><img src="https://avatars.githubusercontent.com/thischarles?s=40&v=4" height="40" alt="@thischarles Avatar" /></a>
    <a href="https://github.com/cseeman"><img src="https://avatars.githubusercontent.com/cseeman?s=40&v=4" height="40" alt="@cseeman Avatar" /></a>
    <a href="https://github.com/99991"><img src="https://avatars.githubusercontent.com/99991?s=40&v=4" height="40" alt="@99991 Avatar" /></a>
    <a href="https://github.com/chickenisamazing"><img src="https://avatars.githubusercontent.com/chickenisamazing?s=40&v=4" height="40" alt="@chickenisamazing Avatar" /></a>
    <a href="https://github.com/thomwiggers"><img src="https://avatars.githubusercontent.com/thomwiggers?s=40&v=4" height="40" alt="@thomwiggers Avatar" /></a>
    <a href="https://github.com/idow09"><img src="https://avatars.githubusercontent.com/idow09?s=40&v=4" height="40" alt="@idow09 Avatar" /></a>
    <a href="https://github.com/AngelRionCervi"><img src="https://avatars.githubusercontent.com/AngelRionCervi?s=40&v=4" height="40" alt="@AngelRionCervi Avatar" /></a>
    <a href="https://github.com/milen-sage"><img src="https://avatars.githubusercontent.com/milen-sage?s=40&v=4" height="40" alt="@milen-sage Avatar" /></a>
    <a href="https://github.com/makiharu"><img src="https://avatars.githubusercontent.com/makiharu?s=40&v=4" height="40" alt="@makiharu Avatar" /></a>
</div>

### Contributions

 * [@mermop](https://github.com/mermop) for [sourcing the original party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/2)
 * [@ianfixes](https://github.com/ianfixes) for [making shuffle parrot and shuffle further parrot chain together better](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/4)
 * [@gjtorikian](https://github.com/gjtorikian) for [s&#x2F;Github&#x2F;GitHub&#x2F;](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/5)
 * [@ermanc](https://github.com/ermanc) for [conga line parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/7)
 * [@glentakahashi](https://github.com/glentakahashi) for [the deeply moving sad parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/10) and [the Party Cop](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/11)
 * [@daveyarwood](https://github.com/daveyarwood) for [fast and slow parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/13)
 * [@tysondreeder](https://github.com/tysondreeder) for [deal with it parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/16)
 * [@hrimhari](https://github.com/hrimhari) for [reverse conga parrot and a smoother aussie parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/18) and [conga party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/24)
 * [@ernestoacevedo](https://github.com/ernestoacevedo) for [fiesta parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/20)
 * [@andyhmltn](https://github.com/andyhmltn) for [chill, explody and shuffle party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/23)
 * [@oliviag](https://github.com/oliviag) for [ice cream parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/26)
 * [@ultrafez](https://github.com/ultrafez) for [doing the wave](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/27) and [improve the parrot wave](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/275)
 * [@samlindsaylevine](https://github.com/samlindsaylevine) for [Aussie conga line parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/28)
 * [@joaorgsampaio](https://github.com/joaorgsampaio) for [moonwalking parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/29)
 * [@natelowry](https://github.com/natelowry) for [bringing the sass](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/33)
 * [@kyprifog](https://github.com/kyprifog) for [confused parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/35)
 * [@chalisegrogan](https://github.com/chalisegrogan) for [🍕 parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/34)
 * [@westerlund](https://github.com/westerlund) for [🍔 parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/36)
 * [@clangen](https://github.com/clangen) for [coffee parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/38)
 * [@chemikpil](https://github.com/chemikpil) for [mustache parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/46) and [christmas parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/49)
 * [@jhildings](https://github.com/jhildings) for [parrot anatomy lessons](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/50)
 * [@schaney](https://github.com/schaney) for [witness protection parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/52) and [a one way ticket to flavor town](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/66)
 * [@321Fetch](https://github.com/321Fetch) for [keyboard app link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/54)
 * [@camilaazuma](https://github.com/camilaazuma) for [sleepy and beer parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/57)
 * [@kbvincent](https://github.com/kbvincent) for [six great parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/58), [wizard parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/62) and [HD gentleman parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/96)
 * [@francoislg](https://github.com/francoislg) for [upvote parrot and PPaaS](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/64)
 * [@c-r-a-f](https://github.com/c-r-a-f) for [twin and triplet parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/68)
 * [@curiousepic](https://github.com/curiousepic) for [stabalized parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/71)
 * [@marcthayer](https://github.com/marcthayer) for [banana parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/78) and [typo fixes](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/77)
 * [@tianyuliu](https://github.com/tianyuliu) for [ski parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/81), [halal parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/80), [ship it parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/84) and [COVID-19 parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/447)
 * [@Omlahid](https://github.com/Omlahid) for [Update PPaaS link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/88)
 * [@vaicine](https://github.com/vaicine) for [nyan parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/89)
 * [@deedeelavinder](https://github.com/deedeelavinder) for [love parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/90), [taco parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/130), [github party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/266), [help debug permissions errors](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/268) and [database parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/397)
 * [@jcoutch](https://github.com/jcoutch) for [Wendy parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/91)
 * [@paul-russo](https://github.com/paul-russo) for [typo fix](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/92)
 * [@lucymhdavies](https://github.com/lucymhdavies) for [sharing found parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/93)
 * [@viktorsec](https://github.com/viktorsec) for [making shuffle parrots chainable](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/30)
 * [@ada-lovecraft](https://github.com/ada-lovecraft) for [Party Parrot wants your soul](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/99)
 * [@mjaniszew](https://github.com/mjaniszew) for [touch bar parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/101)
 * [@melinerunen](https://github.com/melinerunen) for [HD only name fix](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/102), [64kb parrot cap](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/107) and [upload script tweaks](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/158)
 * [@joekieffer](https://github.com/joekieffer) for [🍩 parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/103)
 * [@erinknight242](https://github.com/erinknight242) for [fixing HD conga parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/113), [fixing parrot transparency](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/242) and [HD sassy parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/279)
 * [@trekroot](https://github.com/trekroot) for [disco, matrix, papal and stalker parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/121)
 * [@KeesKoffeman](https://github.com/KeesKoffeman) for [evil parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/123)
 * [@shiruken](https://github.com/shiruken) for [science parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/124)
 * [@bdrelling ](https://github.com/bdrelling ) for [pride parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/125)
 * [@KySmith1](https://github.com/KySmith1) for [revolutionary parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/128)
 * [@arturocr](https://github.com/arturocr) for [beret parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/137)
 * [@jgknight](https://github.com/jgknight) for [fidget spinner parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/138)
 * [@nlgcabrera](https://github.com/nlgcabrera) for [🍀 lucky parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/144)
 * [@santiycr](https://github.com/santiycr) for [automatic Slack upload script](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/150)
 * [@zvuc](https://github.com/zvuc) for [ultra fast parrot and slow mo parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/151)
 * [@emicba](https://github.com/emicba) for [rotating parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/152) and [blunt parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/166)
 * [@hrousley](https://github.com/hrousley) for [party owl](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/85)
 * [@trekroot ](https://github.com/trekroot ) for [birthday, jedi, invisible and angry parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/145)
 * [@trcliao](https://github.com/trcliao) for [angel parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/159)
 * [@ErinMorelli](https://github.com/ErinMorelli) for [pumpkin parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/161)
 * [@belltailjp](https://github.com/belltailjp) for [sushi parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/157)
 * [@breadadams](https://github.com/breadadams) for [fetch-the-parrot link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/155)
 * [@danrichman](https://github.com/danrichman) for [party pooper](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/167) and [party Gritty](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/355)
 * [@rickyhoots](https://github.com/rickyhoots) for [sint parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/178) and [Fix Sinterklaas typo](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/179)
 * [@cavpollo](https://github.com/cavpollo) for [cat parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/180)
 * [@nuragic](https://github.com/nuragic) for [web components](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/182) and [fix slack upload documentation](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/264)
 * [@TheoKanning](https://github.com/TheoKanning) for [pirate parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/185)
 * [@zix99](https://github.com/zix99) for [ceiling parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/186)
 * [@justalemon](https://github.com/justalemon) for [Discord bot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/187)
 * [@matthewjwolff](https://github.com/matthewjwolff) for [mardi gras parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/194), [ping pong parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/291) and [Party moogle](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/583)
 * [@kiwivogel](https://github.com/kiwivogel) for [soviet parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/197) and [Kubernetes guest](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/289)
 * [@Darth-Arminius](https://github.com/Darth-Arminius) for [sith parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/198), [various housekeeping contributions](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/350), [fix incorrect flag parrot names](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/395) and [reverse portal parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/356)
 * [@emmajam](https://github.com/emmajam) for [bitcoin parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/201)
 * [@juniormucciolo](https://github.com/juniormucciolo) for [portal parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/203)
 * [@mrkolby](https://github.com/mrkolby) for [flying money parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/208), [hard hat parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/206), [troll parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/207), [mustache parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/204), [bunny parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/216) and [Norwegian Blue parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/218)
 * [@christianrank](https://github.com/christianrank) for [schnitzel parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/215)
 * [@eokuwwy](https://github.com/eokuwwy) for [HD version of party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/209), [HD fast and ultrafast parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/212), [HD conga party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/213), [white walker parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/249), [deal with it now parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/280), [bootleg parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/281), [biker parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/282), [inverted parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/287), [Work From Home parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/445), [Hacker parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/641), [6-7 parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/678) and [Yeet parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/679)
 * [@jesivasq](https://github.com/jesivasq) for [portal parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/210)
 * [@armills](https://github.com/armills) for [improved invisible parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/221)
 * [@smlevorse](https://github.com/smlevorse) for [Transparront](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/225)
 * [@bushong1](https://github.com/bushong1) for [Washington Capitals parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/230)
 * [@sashforth](https://github.com/sashforth) for [stub parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/231) and [British parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/232)
 * [@mconiglio](https://github.com/mconiglio) for [fix it parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/235)
 * [@felipericieri](https://github.com/felipericieri) for [Brazillian World Cup parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/238)
 * [@davin-english](https://github.com/davin-english) for [marshmallow roasting parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/242)
 * [@tgockel](https://github.com/tgockel) for [guests slack upload](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/245), [doge parrot guest](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/246), [build script uglifycss detection](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/335) and [build script improvements](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/336)
 * [@moigonzalez](https://github.com/moigonzalez) for [link to parrotify-cli](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/251)
 * [@georgegillams](https://github.com/georgegillams) for [Open Source parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/253)
 * [@unlobito](https://github.com/unlobito) for [trans flag parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/254)
 * [@borisrev](https://github.com/borisrev) for [spy parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/255)
 * [@Jegama](https://github.com/Jegama) for [Calvinist parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/258), [flower parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/307) and [laptop parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/288)
 * [@oXis](https://github.com/oXis) for [French parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/261)
 * [@dp12](https://github.com/dp12) for [link to emacs parrot-mode](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/274)
 * [@uberchemist](https://github.com/uberchemist) for [HD Beer Parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/292), [HD American and Doge parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/295), [so many parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/312), [like, a lot of parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/303), [basically all the parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/300), [Party Nyan cat HD remake.](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/394), [HD Party Guy Fieri](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/386), [vertical and bouncing parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/371), [boba parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/367), [party keanu](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/368), [HD goth parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/362), [HD original parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/354) and [sherlock parrot, HD remakes](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/352)
 * [@dtexlyn](https://github.com/dtexlyn) for [bat parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/306)
 * [@jpac-run](https://github.com/jpac-run) for [fix Portugal Parrot name](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/313)
 * [@sadleremy](https://github.com/sadleremy) for [Party Sloth](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/316)
 * [@kareiva](https://github.com/kareiva) for [Lithuania Parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/323)
 * [@oibind](https://github.com/oibind) for [link to parrot.today](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/342)
 * [@TheOnlyGhostwolf](https://github.com/TheOnlyGhostwolf) for [fix Discord link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/401)
 * [@WilliamCollishaw](https://github.com/WilliamCollishaw) for [fix New Zealand typo](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/392), [Replace &lt;tt&gt; with &lt;code&gt;](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/482), [App store &#x2F; google play links and images](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/529), [Add .idea to git ignore](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/530), [security update on imagemin](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/531), [npm security updates](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/532), [README typo](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/570), [Lots of maintenance tasks](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/596) and [updated keyboard for iOS](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/627)
 * [@pacbroens](https://github.com/pacbroens) for [party bug](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/387) and [headphones parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/388)
 * [@WyTeav](https://github.com/WyTeav) for [short parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/381)
 * [@urielsalis](https://github.com/urielsalis) for [RIP Parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/379), [Revert It parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/474) and [Party Wumpus](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/493)
 * [@rsimai](https://github.com/rsimai) for [partygeeko](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/373), [Party Tux](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/649) and [Old man yells at parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/650)
 * [@mbifulco](https://github.com/mbifulco) for [typo fix](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/372)
 * [@alessandroniciforo](https://github.com/alessandroniciforo) for [fading parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/366)
 * [@itmart](https://github.com/itmart) for [tennis parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/358)
 * [@gabrieltal](https://github.com/gabrieltal) for [crying Jordan parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/357), [Michael Jackson parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/393) and [Picasso parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/423)
 * [@Tobski](https://github.com/Tobski) for [Braveheart parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/396)
 * [@Mindflayo](https://github.com/Mindflayo) for [PHParrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/399)
 * [@pauleks](https://github.com/pauleks) for [Update discord bot demo server link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/401)
 * [@donnavitan](https://github.com/donnavitan) for [Usability&#x2F;accessibility fix](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/404)
 * [@kevinhhuynh](https://github.com/kevinhhuynh) for [Maracas parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/410)
 * [@noSim](https://github.com/noSim) for [Merged parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/411)
 * [@martin-gnodtke](https://github.com/martin-gnodtke) for [Bob Ross parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/413) and [Yosemite Sam parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/414)
 * [@zschallz](https://github.com/zschallz) for [Move links to HTTPS](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/415)
 * [@cpobdev](https://github.com/cpobdev) for [Illuminati parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/416)
 * [@ayatothos](https://github.com/ayatothos) for [Heading parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/431)
 * [@poulad](https://github.com/poulad) for [InnerSource Commons parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/433)
 * [@wand2016](https://github.com/wand2016) for [Async parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/435)
 * [@cscashby](https://github.com/cscashby) for [Doctor parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/437)
 * [@TortoiseWrath](https://github.com/TortoiseWrath) for [Exceptionally Fast Parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/440)
 * [@akihanari](https://github.com/akihanari) for [Rythmical parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/441)
 * [@deadbeef404](https://github.com/deadbeef404) for [Metal parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/449)
 * [@BrendanBerkley](https://github.com/BrendanBerkley) for [wine parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/453)
 * [@zymbaluk](https://github.com/zymbaluk) for [party annoyed bird](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/454)
 * [@wowu](https://github.com/wowu) for [Ruby parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/461)
 * [@jnbgfrtyuh](https://github.com/jnbgfrtyuh) for [Node parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/464)
 * [@FlowerSan](https://github.com/FlowerSan) for [Hanami parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/465)
 * [@HidingCherry](https://github.com/HidingCherry) for [Fix YAML unicode](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/475)
 * [@guiprou](https://github.com/guiprou) for [Moon parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/460), [Daft Punk parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/472) and [Zouk parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/478)
 * [@yumx02](https://github.com/yumx02) for [Glimpse parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/481)
 * [@danryder](https://github.com/danryder) for [quarantine and work-from-home parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/455), [Everything&#39;s Fine, Headbanging and TP parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/457), [Preet Bharara parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/459), [Hypnosis parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/463) and [Jumping parrot and Jumping parrot Jr.](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/484)
 * [@KotoriK](https://github.com/KotoriK) for [Quad parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/486)
 * [@jesusjimsa](https://github.com/jesusjimsa) for [Daily parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/488)
 * [@jack-green](https://github.com/jack-green) for [Dab parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/489)
 * [@kyourikey](https://github.com/kyourikey) for [Poke parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/490)
 * [@KoichiroGIF](https://github.com/KoichiroGIF) for [Cake parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/491)
 * [@jtrnw](https://github.com/jtrnw) for [Unicorn parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/495)
 * [@don-code](https://github.com/don-code) for [Fix GitHub parrot background](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/496)
 * [@Energy-core](https://github.com/Energy-core) for [BiParrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/499)
 * [@ladomi](https://github.com/ladomi) for [Fastest parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/501) and [Fix Fastest parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/502)
 * [@yutofukushima](https://github.com/yutofukushima) for [Play Catch parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/503)
 * [@nduggar](https://github.com/nduggar) for [Imposter parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/505)
 * [@nathanielw](https://github.com/nathanielw) for [Link to Party-ify tool](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/509)
 * [@tan14007](https://github.com/tan14007) for [Fix Gentleman parrot colors](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/511)
 * [@jeyemwey](https://github.com/jeyemwey) for [Dark color scheme](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/513)
 * [@namchaunguyen](https://github.com/namchaunguyen) for [This Is Fine parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/516)
 * [@xMcLOVINx](https://github.com/xMcLOVINx) for [Turn Down for Watch parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/517)
 * [@bolajiscott](https://github.com/bolajiscott) for [Pear parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/519)
 * [@lahdekorpi](https://github.com/lahdekorpi) for [Tin foil hat parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/520)
 * [@Quron](https://github.com/Quron) for [Outline Dab parrot arm](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/500) and [Thread parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/521)
 * [@masonanders](https://github.com/masonanders) for [Kinda Sus parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/522)
 * [@ochan12](https://github.com/ochan12) for [Mate parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/525)
 * [@graph1994](https://github.com/graph1994) for [Ethereum parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/526)
 * [@jacobrose](https://github.com/jacobrose) for [Sneezy parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/533)
 * [@Fikemox](https://github.com/Fikemox) for [Accessible parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/536)
 * [@shazena](https://github.com/shazena) for [Python parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/537)
 * [@claveaumax](https://github.com/claveaumax) for [reee parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/538) and [Red Bull parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/539)
 * [@viktigpetterr](https://github.com/viktigpetterr) for [Vue parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/540)
 * [@ioki-klaus](https://github.com/ioki-klaus) for [Sideways parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/541)
 * [@LeonardoCerqueira96](https://github.com/LeonardoCerqueira96) for [Party GFM](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/542)
 * [@AdrienPoupa](https://github.com/AdrienPoupa) for [Quebec flag parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/543)
 * [@mattruston](https://github.com/mattruston) for [Party fsjal](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/545)
 * [@liamdawson](https://github.com/liamdawson) for [race-condition parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/546)
 * [@Krlier](https://github.com/Krlier) for [Balcony parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/549)
 * [@aamorin](https://github.com/aamorin) for [Uruguay name typo](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/551)
 * [@maxgoedjen](https://github.com/maxgoedjen) for [Vaccine parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/553)
 * [@theRealWardo](https://github.com/theRealWardo) for [Astronaut parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/558)
 * [@yakiimo121](https://github.com/yakiimo121) for [Autonomous parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/561)
 * [@aaronpace](https://github.com/aaronpace) for [HD Boom parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/562)
 * [@ishaanharry](https://github.com/ishaanharry) for [Fix Jedi and Sith parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/563)
 * [@rjcausarano](https://github.com/rjcausarano) for [Paraguay parrot improvements](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/564)
 * [@Panquesito7](https://github.com/Panquesito7) for [Fix GitHub link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/565)
 * [@mikiilis](https://github.com/mikiilis) for [Flag of Free Belarus parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/566)
 * [@kaas3000](https://github.com/kaas3000) for [Hide the parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/568)
 * [@infinitewarp](https://github.com/infinitewarp) for [Party Picard](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/572)
 * [@samyouxyz](https://github.com/samyouxyz) for [Party Rocket](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/577)
 * [@greywillfade](https://github.com/greywillfade) for [Deploy, Cursed, Up Arrow parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/578)
 * [@phil-chp](https://github.com/phil-chp) for [Fixed the small HD logo pop-in](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/580)
 * [@dunklesToast](https://github.com/dunklesToast) for [React parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/586)
 * [@ezbc](https://github.com/ezbc) for [Meld parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/436), [Merge Conflict parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/552), [Thank You parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/554), [merge-train parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/592), [merge-immediaely parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/591) and [stand-up parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/590)
 * [@revolutionart](https://github.com/revolutionart) for [Gumi parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/594)
 * [@prome17](https://github.com/prome17) for [Bad parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/597)
 * [@YodaDaCoda](https://github.com/YodaDaCoda) for [HD Coffee parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/598)
 * [@banjobyster](https://github.com/banjobyster) for [Pixelated Dizzy parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/604)
 * [@MarcoSchiavello](https://github.com/MarcoSchiavello) for [Chef parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/515), [Masked parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/575) and [Drupal parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/605)
 * [@Nonmant](https://github.com/Nonmant) for [Harold parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/607)
 * [@LucianeFernandesRoque](https://github.com/LucianeFernandesRoque) for [Fix autonomous parrot background](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/610)
 * [@OliverVermeulen](https://github.com/OliverVermeulen) for [MongoDB parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/611)
 * [@TimGoldbach](https://github.com/TimGoldbach) for [Matrix parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/614)
 * [@zoidyzoidzoid](https://github.com/zoidyzoidzoid) for [fix pear parrots backgrround](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/618)
 * [@marianabeldi](https://github.com/marianabeldi) for [Fix database parrot background](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/619)
 * [@TopHatGuy12](https://github.com/TopHatGuy12) for [Kraken parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/621)
 * [@bnfld](https://github.com/bnfld) for [Soccer parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/622)
 * [@BrendanXBoyd](https://github.com/BrendanXBoyd) for [Minion parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/625)
 * [@Bharadwajshivam28](https://github.com/Bharadwajshivam28) for [Party Bug background fix](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/628)
 * [@lopes-vincent](https://github.com/lopes-vincent) for [Blurry parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/629)
 * [@leanormandon](https://github.com/leanormandon) for [Croissant parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/630)
 * [@snball6](https://github.com/snball6) for [Disco Duck](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/579) and [Temporal Table parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/632)
 * [@luke-brooks](https://github.com/luke-brooks) for [Chef Kiss, Deleted, Fast Twins, and Vacation parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/633)
 * [@josebenitezg](https://github.com/josebenitezg) for [Espresso Martini parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/637)
 * [@WeiJian123-tech](https://github.com/WeiJian123-tech) for [Resonating Red parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/643)
 * [@ANSHIKA-26](https://github.com/ANSHIKA-26) for [Rich Party parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/648)
 * [@edent](https://github.com/edent) for [removing the dead Google Play link](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/645), [Jump to top button](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/653) and [HTML fixes](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/676)
 * [@kirby-b](https://github.com/kirby-b) for [Bride and Groom parrots](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/655)
 * [@cudy789](https://github.com/cudy789) for [Factorio Yellow Belt parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/659)
 * [@MrCyGuy](https://github.com/MrCyGuy) for [Sombrero parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/661)
 * [@thischarles](https://github.com/thischarles) for [HD Oriele, Clown parrot and Googly Eyes parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/665)
 * [@cseeman](https://github.com/cseeman) for [Party Pear™](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/666)
 * [@99991](https://github.com/99991) for [mail parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/669)
 * [@chickenisamazing](https://github.com/chickenisamazing) for [Next parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/671)
 * [@thomwiggers](https://github.com/thomwiggers) for [HDR parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/672)
 * [@idow09](https://github.com/idow09) for [Quantum parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/674)
 * [@AngelRionCervi](https://github.com/AngelRionCervi) for [Svelte parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/675)
 * [@milen-sage](https://github.com/milen-sage) for [Giftparrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/680)
 * [@makiharu](https://github.com/makiharu) for [HD Pizza Parrot](https://github.com/jmhobbs/cultofthepartyparrot.com/issues/682)

