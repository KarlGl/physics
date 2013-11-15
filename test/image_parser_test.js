'use strict';
var ipar = require('../lib/image_parser.js');
ipar = ipar.imageParser;

exports['getFreqsForX'] = {
  'no args': function(test) {
    test.expect(2);
    // tests here
    test.deepEqual(ipar.getFreqsForX(0, 1, function() {
      return {
        data: [255, 0, 0, 0]
      };
    }), [
      [255, 0, 0, 0]
    ], '1.');
    test.deepEqual(ipar.getFreqsForX(0, 0, function() {
      return {
        data: [255, 0, 0, 0]
      };
    }), [], 'empty.');
    test.done();
  }
};