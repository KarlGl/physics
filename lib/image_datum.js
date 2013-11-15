this.imageDatum = {};
(function(exports) {
  exports.getFunc = function(con) {
    return function(a, b, c, d) {
      var ret = {};
      ret.raw = con.getImageData(a, b, c, d).data;
      ret.val = (ret.raw[0] +
        ret.raw[1] +
        ret.raw[2]) / 1024;
      return ret;
    };
  };
}(this.imageDatum));