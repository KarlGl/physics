this.wave = {};
(function(exports) {

  exports.osc = function(context) {
    var osc = context.createOscillator();
    osc.connect(context.destination);
    osc.noteOn(0);
    return osc;
  };

  exports.kill = function(osc) {
    osc.disconnect();
    return osc;
  };

  exports.setF = function(osc, val) {
    osc.frequency.value = val;
    return osc;
  };

}(this.wave));