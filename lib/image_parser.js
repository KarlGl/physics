this.imageParser = {};
(function(exports) {
  exports.getFreqsForRow = function(xVal, maxX, getImageData) {
    var ret = [];
    for (var i = 0; i < maxX; i++) {
      ret.push(getImageData(i, xVal, 1, 1).val);
    }
    return ret;
  };

  exports.getFreqs = function(maxY, maxX, getImageData) {
    var ret = [];
    for (var i = 0; i < maxY; i++) {
      ret.push(exports.getFreqsForRow(i, maxX, getImageData));
    }
    return ret;
  };
}(this.imageParser));