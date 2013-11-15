if (!this.soundCreator || !
	this.imageParser || !this.imageDatum || !
	this.imageCreator || !this.context || !this.wave) {
	throw "God file must be run last";
}
this.document = this.document;
(function(exports) {
	exports.god = (function() {
		var el = exports.document.createElement('div');
		el.setAttribute('id', 'data-view');
		el.textContent = JSON.stringify(
			exports.soundCreator.makeSounds(
				exports.imageParser.getFreqs(
					exports.imageCreator.height,
					exports.imageCreator.width,
					exports.imageCreator.makeImage(
						exports.imageDatum)),
				exports.wave.createOscFun(exports.context, exports.osc.create)
			));
		exports.document.body.appendChild(el);

		//play
		exports.soundCreator.playSounds();

	})();
}(this));