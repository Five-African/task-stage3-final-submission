var Album = (function() {
  /* You are squares! */
  function fix3(images, width, height) {
    var val1 = height / 2, val2 = width - val1;
    images[0].style.width = val2 + "px";
    images[1].style.width = val1 + "px";
    images[1].style.left = val2 + "px";
    images[2].style.width = val1 + "px";
    images[2].style.left = val2 + "px";
  }
  function fix5(images, width, height) {
    var val1 = width / 3, val2 = height - val1;
    images[1].style.height = val1 + "px";
    images[4].style.height = val2 + "px";
    images[4].style.top = val1 + "px";
  }

  return {
    init: function(id, w, h) {
      var container = document.getElementById(id);
      container.className += " album";
      container.style.width = w + "px";
      container.style.height = h + "px";

      width = w;
      height = h;

      var childCount = container.children.length;
      if (childCount == 3) {
        fix3(container.children, w, h);
      }
      else if (childCount == 5) {
        fix5(container.children, w, h);
      }
    }
  }
})();
