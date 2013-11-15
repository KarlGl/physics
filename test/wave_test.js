'use strict';
var me = require('../lib/wave.js');
me = me.wave;

exports['osc'] = {
  'will connect': function(test) {
    var stub = {};
    stub.createOscillator = function() {
      var obj = {};
      obj.noteOn = function() {
        test.ok(true);
      };
      obj.connect = function() {
        test.ok(true);
      };
      return obj;
    };
    me.osc(stub);
    test.done();
  }
};

exports['kill'] = {
  'will disconnect': function(test) {
    test.expect(1);
    var stub = {};
    stub.disconnect = function() {
      test.ok(true);
    };
    me.kill(stub);
    test.done();
  }
};