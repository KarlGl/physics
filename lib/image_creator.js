this.imageCreator = {};
this.imageCreator.document = this.document;
(function(exports) {
  exports.con = null;

  exports.width = 100;
  exports.height = 30;
  exports.loadImage = function(link, context, callback) {
    var base_image;
    // = exports.document.getElementById('in');
    base_image = new context.Image();
    base_image.src = "http://0.0.0.0:3000/images/a." + window.fileExt;
    base_image.onload = function() {
      exports.con.drawImage(base_image, 0, 0, exports.width, exports.height);
      callback();
    };

  };
  exports.makeImage = function(datum) {
    var el = exports.document.createElement('canvas');
    // el.style.display = 'none';
    exports.con = el.getContext("2d");

    // con.fillStyle = "#F1FFFF";
    // con.fillRect(0, 0, exports.width, 5);
    // con.fillStyle = "#AAAAAA";
    // con.fillRect(0, 5, exports.width, 2);
    // con.fillStyle = "#DDDDDD";
    // con.fillRect(0, 7, exports.width, 3);

    el.setAttribute('id', 'image');
    exports.document.body.appendChild(el);
    return datum.getFunc(exports.con);
  };
}(this.imageCreator));