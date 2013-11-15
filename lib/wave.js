this.wave = {};
(function(exports) {


  exports.createOscFun = function(context, createOsc) {
    return function(fullRowData) {
      var osc = createOsc(context);
      fullRowData.forEach(function(secondDeep) {
        osc.path.append(secondDeep);
      });
    };
  };

}(this.wave));