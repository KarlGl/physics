this.wave = {};
(function(exports) {

  exports.osc = function(context) {
    var osc = context.createOscillator();
    osc.connect(context.destination);
    return osc;
  };

}(this.wave));