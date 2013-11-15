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
		exports.oscs.forEach(function(osc) {});
	};


}(this.soundCreator));