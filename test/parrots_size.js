var fs      = require('fs'),
    assert  = require('chai').assert,
    convert = require('convert-units');


describe("parrots", function() {

    it("in HD should weight less than 64KB", function() {

        var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots/hd');
        parrot_hd_gifs.forEach(function(gif) {

            var size = fs.statSync(__dirname + '/../parrots/hd/' + gif).size;
            assert(size <= convert(64).from('KB').to('B'), gif + " is too big(" + convert(size).from('B').to('KB') + " KB)");

        });
    });

    it("in SD should weight less than 64KB", function() {

        var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots');
        parrot_hd_gifs.forEach(function(gif) {

            var size = fs.statSync(__dirname + '/../parrots/' + gif).size;
            assert(size <= convert(64).from('KB').to('B'), gif + " is too big(" + convert(size).from('B').to('KB') + " KB)");

        });
    });
});

