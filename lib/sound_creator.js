this.soundCreator = {};
(function(exports) {
	exports.oscs = [];
	exports.makeSounds = function(data, oscCreateFunc) {
		data.forEach(function(fullRow) {
			exports.oscs.push(oscCreateFunc(fullRow));
		});
		return data;
	};

	exports.playSounds = function() {
		exports.oscs.forEach(function(osc, i) {
			osc.setF(osc.path.vals[0]);
			var result = osc.path.step();
			// when all are false, all done.
			if (!result) {
				exports.killOsc(i, osc);
			}
		});
	};
	exports.killOsc = function(index, osc) {
		exports.oscs.splice(index, 1);
		return osc.kill();
	};

}(this.soundCreator));