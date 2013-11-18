this.imageCreator = {};
this.imageCreator.document = this.document;
(function(exports) {
  exports.con = null;

  // exports.width = 1;
  // exports.height = 1;
  exports.loadImage = function(link, context, callback) {
    var base_image;
    // = exports.document.getElementById('in');
    base_image = new context.Image();
    base_image.src = window.location.origin + "/images/a." + window.fileExt;

    base_image.onload = function() {
      exports.width = base_image.width;
      exports.height = base_image.height;

      var el = exports.el;
      console.log('wh: ' + exports.width + " " + exports.height);
      el.style.cssText += "width :" + exports.width + "px; height :" + exports.height + "px;";
      exports.con.drawImage(base_image, 0, 0, exports.width, exports.height);

      el.setAttribute('id', 'image');
      exports.document.body.appendChild(el);
      callback();
    };

  };
  exports.makeImage = function(datum) {
    exports.el = exports.document.createElement('canvas');
    var el = exports.el;
    // el.style.display = 'none';
    exports.con = el.getContext("2d");

    // con.fillStyle = "#F1FFFF";
    // con.fillRect(0, 0, exports.width, 5);
    // con.fillStyle = "#AAAAAA";
    // con.fillRect(0, 5, exports.width, 2);
    // con.fillStyle = "#DDDDDD";
    // con.fillRect(0, 7, exports.width, 3);

    return datum.getFunc(exports.con);
  };
}(this.imageCreator));