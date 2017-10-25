var fs        = require('fs'),
    assert    = require('chai').assert,
    convert   = require('convert-units'),
    imageSize = require('image-size');


describe("parrots", function() {

    it("in HD should weight less than 64KB", function() {

        var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots/hd');
        parrot_hd_gifs.forEach(function(gif) {

            var size = fs.statSync(__dirname + '/../parrots/hd/' + gif).size;
            assert(size <= convert(64).from('KB').to('B'), gif + " is too big(" + convert(size).from('B').to('KB') + " KB)");

        });
    });

    it("in SD should weight less than 64KB", function() {

        var parrot_gifs = fs.readdirSync(__dirname + '/../parrots');
        parrot_gifs.forEach(function(gif) {

            var size = fs.statSync(__dirname + '/../parrots/' + gif).size;
            assert(size <= convert(64).from('KB').to('B'), gif + " is too big(" + convert(size).from('B').to('KB') + " KB)");

        });
    });

    it("should never be wider or taller than 128px", function () {
        var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots/hd'),
            parrot_gifs    = fs.readdirSync(__dirname + '/../parrots');

        parrot_gifs.forEach(function(gif) {
          if(gif == "hd") { return; } // Skip the HD directory
          var dimensions = imageSize(__dirname + '/../parrots/' + gif);
          assert(dimensions.width <= 128, gif + " is wider than 128px");
          assert(dimensions.height <= 128, gif + " is taller than 128px");
        });

        parrot_hd_gifs.forEach(function(gif) {
          var dimensions = imageSize(__dirname + '/../parrots/hd/' + gif);
          assert(dimensions.width <= 128, gif + " is wider than 128px");
          assert(dimensions.height <= 128, gif + " is taller than 128px");
        });
    });
});

