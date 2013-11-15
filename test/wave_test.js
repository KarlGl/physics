'use strict';
var me = require('../lib/wave.js');
me = me.wave;

exports['osc'] = {
  'will connect': function(test) {
    test.expect(1);
    var stub = {};
    stub.createOscillator = function() {
      var obj = {};
      obj.connect = function() {
        test.ok(true);
      };
      return obj;
    };
    me.osc(stub);
    test.done();
  }
};