var fs = require('fs'),
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
    "anyOf": [
      {"required" : ["gif"]},
      {"required" : ["hd"]}
    ],
    "additionalProperties": false
  }
};

describe("parrots.json", function () {
  it("should validate", function () {
    var parrots_json = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8')),
      validation_result = validate(parrots_json, json_schema);

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
      assert.ok(fs.existsSync(__dirname + '/../parrots/' + parrot.gif) || fs.existsSync(__dirname + '/../parrots/' + parrot.hd), parrot.name);
    });
  });

  it("should contain all gifs", function () {
    var parrots = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8')).map(function(parrot) { return parrot.gif; }).filter(function(gif) { return gif != undefined; });
    var parrot_gifs = fs.readdirSync(__dirname + '/../parrots');
    parrot_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../parrots/' + gif).isFile()) { return; }
      assert.ok(-1 !== parrots.indexOf(gif), gif);
    });
  });

  it("should contain all HD gifs", function () {
    var hd_parrots = JSON.parse(fs.readFileSync(__dirname + '/../parrots.json', 'utf8')).map(function(parrot) { return parrot.hd; }).filter(function(hd) { return hd != undefined; });
    var parrot_hd_gifs = fs.readdirSync(__dirname + '/../parrots/hd');
    parrot_hd_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../parrots/hd/' + gif).isFile()) { return; }
      assert.ok(-1 !== hd_parrots.indexOf('hd/' + gif), gif);
    });
  });
});

describe("other.json", function () {
  it("should validate", function () {
    var other_json = JSON.parse(fs.readFileSync(__dirname + '/../other.json', 'utf8')),
      validation_result = validate(other_json, json_schema);

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
    var other_json = JSON.parse(fs.readFileSync(__dirname + '/../other.json', 'utf8'));
    other_json.forEach(function(other) {
      assert.ok(fs.existsSync(__dirname + '/../other/' + other.gif) || fs.existsSync(__dirname + '/../other/' + other.hd), other.name);
    });
  });

  it("should contain all gifs", function () {
    var other = JSON.parse(fs.readFileSync(__dirname + '/../other.json', 'utf8')).map(function(other) { return other.gif; }).filter(function(gif) { return gif != undefined; });
    var other_gifs = fs.readdirSync(__dirname + '/../other');
    other_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../other/' + gif).isFile()) { return; }
      assert.ok(-1 !== other.indexOf(gif), gif);
    });
  });

  it("should contain all HD gifs", function () {
    var hd_other = JSON.parse(fs.readFileSync(__dirname + '/../other.json', 'utf8')).map(function(other) { return other.hd; }).filter(function(hd) { return hd != undefined; });
    var other_hd_gifs = fs.readdirSync(__dirname + '/../other/hd');
    other_hd_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../other/hd/' + gif).isFile()) { return; }
      assert.ok(-1 !== hd_other.indexOf('hd/' + gif), gif);
    });
  });
});
