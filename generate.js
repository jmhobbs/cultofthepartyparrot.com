var Mustache = require('mustache'),
    yaml     = require('js-yaml'),
    fs       = require('fs'),
    exec     = require('child_process').exec;

var parrots = JSON.parse(fs.readFileSync("parrots.json")),
    emoji   = [];

fs.writeFileSync("index.html", Mustache.render(fs.readFileSync("index.mustache").toString(), {parrots: parrots}));

parrots.forEach(function (e, i, a) {
  emoji.push({
    name: e.gif.replace('.gif', ''),
    src: "http://cultofthepartyparrot.com/parrots/" + e.gif
  });
});

fs.writeFileSync("parrotparty.yaml", yaml.dump({title: "parrotparty", emojis: emoji}));

exec('zip -ur parrots parrots', function (error, stdout, stderr) { console.log(stdout); console.log(stderr); }); 
