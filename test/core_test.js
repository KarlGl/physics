var assert = require("assert")
var app = require("../lib/core.js")

describe('Core', function() {
  it('should load core', function() {
    assert.ok(app.func);
    // assert.ok(false);
  })
})
