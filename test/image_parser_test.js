'use strict';
var ipar = require('../lib/image_parser.js');
ipar = ipar.imageParser;

exports['getFreqs'] = {
  'empty': function(test) {
    test.deepEqual(ipar.getFreqs(0, 0, function() {
      return {
        data: [255, 0, 0, 0]
      };
    }), []);
    test.done();
  },
  'calls get for x twice': function(test) {
    var _getFreqsForX = ipar.getFreqsForX;
    ipar.getFreqsForX = function() {
      return 'foo';
    };
    test.deepEqual(ipar.getFreqs(2, 0, function() {
      return {
        data: [255, 0, 0, 0]
      };
    }), ['foo', 'foo']);
    ipar.getFreqsForX = _getFreqsForX;
    test.done();
  },
};

exports['getFreqsForX'] = {
  '1': function(test) {
    test.deepEqual(ipar.getFreqsForX(0, 1, function() {
      return {
        data: [255, 0, 0, 0]
      };
    }), [
      [255, 0, 0, 0]
    ]);
    test.done();
  },
  'empty': function(test) {
    test.deepEqual(ipar.getFreqsForX(0, 0, function() {
      return {
        data: [255, 0, 0, 0]
      };
    }), [], 'empty.');
    test.done();
  }
};