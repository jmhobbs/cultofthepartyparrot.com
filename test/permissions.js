var fs        = require('fs'),
    assert    = require('chai').assert;


function modeString(mode) {
 return '0' + (mode & 0777).toString(8);
}

// Return true if a mode doesn't have any execute bits.
function modeNoExecute(mode) {
  return 0 == (mode & 0111);
}

describe("gifs", function() {

    it("in HD should be read only", function() {
        var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots/hd'),
            guests_hd_gifs  = fs.readdirSync(__dirname + '/../guests/hd');

        parrot_hd_gifs.forEach(function(gif) {
            var mode = fs.statSync(__dirname + '/../parrots/hd/' + gif).mode;
            assert(modeNoExecute(mode), gif + " has bad permissions, " + modeString(mode));
        });

        guests_hd_gifs.forEach(function(gif) {
            var mode = fs.statSync(__dirname + '/../guests/hd/' + gif).mode;
            assert(modeNoExecute(mode), gif + " has bad permissions, " + modeString(mode));
        });
    });

    it("in SD should be read only", function() {
        var parrot_gifs = fs.readdirSync(__dirname + '/../parrots'),
            guests_gifs  = fs.readdirSync(__dirname + '/../guests');

        parrot_gifs.forEach(function(gif) {
            if(gif == "hd") { return; }
            var mode = fs.statSync(__dirname + '/../parrots/' + gif).mode;
            assert(modeNoExecute(mode), gif + " has bad permissions, " + modeString(mode));
        });

        guests_gifs.forEach(function(gif) {
            if(gif == "hd") { return; }
            var mode = fs.statSync(__dirname + '/../guests/' + gif).mode;
            assert(modeNoExecute(mode), gif + " has bad permissions, " + modeString(mode));
        });
    });
});

