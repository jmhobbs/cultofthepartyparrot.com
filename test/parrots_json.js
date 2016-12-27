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
});
