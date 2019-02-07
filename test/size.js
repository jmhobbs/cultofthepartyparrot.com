var fs        = require('fs'),
    assert    = require('chai').assert,
    convert   = require('convert-units'),
    imageSize = require('image-size');


['parrots', 'guests', 'flags'].forEach(function(type) {
  describe(type + " gifs", function() {
    it("in HD should weight less than 64KB", function() {
      let gifs = fs.readdirSync(__dirname + '/../' + type + '/hd');

      gifs.forEach(function(gif) {
        let size = fs.statSync(__dirname + '/../' + type + '/hd/' + gif).size;
        assert(size <= convert(64).from('KB').to('B'), gif + " is too big(" + convert(size).from('B').to('KB') + " KB)");
      });
    });

    it("in SD should weight less than 64KB", function() {
      let gifs = fs.readdirSync(__dirname + '/../' + type);

      gifs.forEach(function(gif) {
        var size = fs.statSync(__dirname + '/../' + type + '/' + gif).size;
        assert(size <= convert(64).from('KB').to('B'), gif + " is too big(" + convert(size).from('B').to('KB') + " KB)");
      });
    });

    it("should never be wider or taller than 128px", function () {
      let hd_gifs = fs.readdirSync(__dirname + '/../' + type + '/hd'),
        gifs    = fs.readdirSync(__dirname + '/../' + type);

      gifs.forEach(function(gif) {
        if(gif == "hd") { return; } // Skip the HD directory
        let dimensions = imageSize(__dirname + '/../' + type + '/' + gif);
        assert(dimensions.width <= 128, gif + " is wider than 128px");
        assert(dimensions.height <= 128, gif + " is taller than 128px");
      });

      hd_gifs.forEach(function(gif) {
        let dimensions = imageSize(__dirname + '/../' + type + '/hd/' + gif);
        assert(dimensions.width <= 128, gif + " is wider than 128px");
        assert(dimensions.height <= 128, gif + " is taller than 128px");
      });
    });
  });
});
