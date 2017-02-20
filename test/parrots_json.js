var fs = require('fs'),
  assert = require('chai').assert,
  validate = require('jsonschema').validate;

var parrots_json_schema = {
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
    "required": ["gif", "name"],
    "additionalProperties": false
  }
};

describe("parrots.json", function () {
  it("should validate", function () {
    var parrots_json = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8')),
      validation_result = validate(parrots_json, parrots_json_schema);

    // Schema errors in mocha are pretty useless, so print some here.
    validation_result.errors.forEach(function (e) {
      var header = "-- " + e.toString() + " ------------",
        footer = "";
      for(var i = 0; i < header.length; i++) { footer += '-'; } // lol
      console.log("\n" + header);
      console.log(e.instance);
      console.log(footer + "\n");
    });

    assert.equal(0, validation_result.errors.length);
  });

  it("should not have extra gifs", function () {
    var parrots_json = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8'));
    parrots_json.forEach(function(parrot) {
      assert.ok(fs.existsSync(__dirname + '/../parrots/' + parrot.gif) || fs.existsSync(__dirname + '/../parrots/' + parrot.hd))
    });
  });

  it("should contain all gifs", function () {
    var parrots = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8')).map(function(parrot) { return parrot.gif; }).filter(function(gif) { return gif != undefined; });
    var parrot_gifs = fs.readdirSync(__dirname + '/../parrots');
    parrot_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../parrots/' + gif).isFile()) { return; }
      assert.ok(-1 !== parrots.indexOf(gif));
    });
  });

  it("should contain all HD gifs", function () {
    var hd_parrots = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8')).map(function(parrot) { return parrot.hd; }).filter(function(hd) { return hd != undefined; });
    var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots/hd');
    parrot_hd_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../parrots/hd/' + gif).isFile()) { return; }
      assert.ok(-1 !== hd_parrots.indexOf('hd/' + gif));
    });
  });
});
