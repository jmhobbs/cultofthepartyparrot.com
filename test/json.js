var fs = require('fs'),
  YAML = require('js-yaml'),
  assert = require('chai').assert,
  validate = require('jsonschema').validate;

var json_schema = {
  "$schema": "http://json-schema.org/draft-04/schema#",
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "gif": { "type": "string" },
      "hd": { "type": "string" },
      "name": { "type": "string" },
      "tip": { "type": "string" }
    },
    "required": ["name"],
    "oneOf": [
      {"required" : ["gif"]},
      {"required" : ["hd"]}
    ],
    "additionalProperties": false
  }
};

['parrots.yaml', 'guests.yaml', 'flags.yaml'].forEach(function(jsonFile) {
  describe(jsonFile, function () {
    let gifPath = jsonFile.replace('.yaml', '')
    let gif_json = YAML.safeLoad(fs.readFileSync(__dirname + '/../' + jsonFile, 'utf8'));

    it("should validate", function () {
      validation_result = validate(gif_json, json_schema);

      // Schema errors in mocha are pretty useless, so print some here.
      let message = "";
      validation_result.errors.forEach(function (e) {
        message = message + " (" + e.toString() + ":" + JSON.stringify(e.instance) + " )\n";
      });

      assert.equal(0, validation_result.errors.length, message);
    });

    it("should not have extra gifs", function () {
      gif_json.forEach(function(entry) {
        assert.ok(fs.existsSync(__dirname + '/../' + gifPath + '/' + entry.gif) || fs.existsSync(__dirname + '/../' + gifPath + '/' + entry.hd), entry.name);
      });
    });

    it("should contain all gifs", function () {
      let gifs = fs.readdirSync(__dirname + '/../' + gifPath);
      gifs.forEach(function(gif) {
        if(! fs.statSync(__dirname + '/../' + gifPath + '/' + gif).isFile()) { return; }
        assert.ok(-1 !== gifs.indexOf(gif), gif);
      });
    });

    it("should contain all HD gifs", function () {
      let hd_gifs = gif_json.map(function(entry) { return entry.hd; }).filter(function(hd) { return hd != undefined; });
      var hd_gif_files = fs.readdirSync(__dirname + '/../' + gifPath + '/hd');
      hd_gif_files.forEach(function(gif) {
        if(! fs.statSync(__dirname + '/../' + gifPath + '/hd/' + gif).isFile()) { return; }
        assert.ok(-1 !== hd_gifs.indexOf('hd/' + gif), gif);
      });
    });
  });
});
