this.imageCreator = {};
this.imageCreator.document = this.document;
(function(exports) {
  exports.width = 100;
  exports.height = 2;
  exports.makeImage = function(datum) {
    var el = exports.document.createElement('canvas'),
      con =
        el.getContext("2d");
    con.fillStyle = "#FF0000";
    con.fillRect(0, 0, exports.width, exports.height);
    el.setAttribute('id', 'image');
    exports.document.body.appendChild(el);
    return datum.getFunc(con);
  };
}(this.imageCreator));