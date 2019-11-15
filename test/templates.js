var fs = require('fs'),
  assert = require('chai').assert,
  path = require('path');

describe("HTML templates", function() {
  it("should not contain un-whitelisted http://", function() {
    const whiteList = ['http://www.gtfoparrot.com/'];

    let templates = 
      fs.readdirSync(__dirname + '/../templates/')
        .filter(function(file) {
          return path.extname(file).toLowerCase() === '.html';
        });

    templates.forEach(function(file) {
      let fileContents = fs.readFileSync(__dirname + '/../templates/' + file);
      
      let httpLinks = 
        fileContents
        .toString()
        .match(/(http:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*))/gi);
      httpLinks = httpLinks ? httpLinks : [];
      
      httpLinks = httpLinks.filter(function(link) {
        return !whiteList.includes(link);
      });

      assert(httpLinks.length === 0, file + " contains un-whitelisted http link(s)/reference(s):" + httpLinks.toString());
    });
  });
});