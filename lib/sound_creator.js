this.soundCreator = {};
(function(exports) {
	exports.oscs = [];
	exports.makeSounds = function(data, oscCreateFunc) {
		data.forEach(function(fullRow) {
			exports.oscs.push(oscCreateFunc(fullRow));
		});
		return data;
	};
}(this.soundCreator));