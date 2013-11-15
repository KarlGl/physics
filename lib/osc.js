this.osc = {};
(function(exports) {

	exports.path = function() {
		var path = {};
		path.vals = [];
		path.append = function(freq) {
			path.vals.push(freq);
			return this;
		};
		return path;
	};

	exports.create = function(context) {
		var osc = {};
		osc.raw = context.createOscillator();
		osc.raw.connect(context.destination);
		osc.raw.noteOn(0);

		osc.path = exports.path();

		return osc;
	};

	exports.kill = function(osc) {
		osc.raw.disconnect();
		return osc;
	};

	exports.setF = function(osc, val) {
		osc.raw.frequency.value = val;
		return osc;
	};

}(this.osc));