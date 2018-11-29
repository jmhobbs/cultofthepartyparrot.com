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

describe("guests.json", function () {
  it("should validate", function () {
    var guests_json = JSON.parse(fs.readFileSync(__dirname + '/../guests.json', 'utf8')),
      validation_result = validate(guests_json, json_schema);

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
    var guests_json = JSON.parse(fs.readFileSync(__dirname + '/../guests.json', 'utf8'));
    guests_json.forEach(function(guests) {
      assert.ok(fs.existsSync(__dirname + '/../guests/' + guests.gif) || fs.existsSync(__dirname + '/../guests/' + guests.hd), guests.name);
    });
  });

  it("should contain all gifs", function () {
    var guests = JSON.parse(fs.readFileSync(__dirname + '/../guests.json', 'utf8')).map(function(guests) { return guests.gif; }).filter(function(gif) { return gif != undefined; });
    var guests_gifs = fs.readdirSync(__dirname + '/../guests');
    guests_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../guests/' + gif).isFile()) { return; }
      assert.ok(-1 !== guests.indexOf(gif), gif);
    });
  });

  it("should contain all HD gifs", function () {
    var hd_guests = JSON.parse(fs.readFileSync(__dirname + '/../guests.json', 'utf8')).map(function(guests) { return guests.hd; }).filter(function(hd) { return hd != undefined; });
    var guests_hd_gifs = fs.readdirSync(__dirname + '/../guests/hd');
    guests_hd_gifs.forEach(function(gif) {
      if(! fs.statSync(__dirname + '/../guests/hd/' + gif).isFile()) { return; }
      assert.ok(-1 !== hd_guests.indexOf('hd/' + gif), gif);
    });
  });
});
