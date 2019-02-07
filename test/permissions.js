var fs        = require('fs'),
    assert    = require('chai').assert;


function modeString(mode) {
  return '0' + (mode & 0777).toString(8);
}

// Return true if a mode doesn't have any execute bits.
function modeNoExecute(mode) {
  return 0 == (mode & 0111);
}

['parrots', 'guests', 'flags'].forEach(function(type) {
  describe(type + " gifs", function() {

    it("in HD should be read only", function() {
      let hd_gifs = fs.readdirSync(__dirname + '/../' + type + '/hd');

      hd_gifs.forEach(function(gif) {
        let mode = fs.statSync(__dirname + '/../' + type + '/hd/' + gif).mode;
        assert(modeNoExecute(mode), gif + " has bad permissions, " + modeString(mode));
      });
    });

    it("in SD should be read only", function() {
      let gifs = fs.readdirSync(__dirname + '/../' + type);

      gifs.forEach(function(gif) {
        if(gif == "hd") { return; }
        let mode = fs.statSync(__dirname + '/../' + type + '/' + gif).mode;
        assert(modeNoExecute(mode), gif + " has bad permissions, " + modeString(mode));
      });
    });
  });
});
