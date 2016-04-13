var Sticky = (function() {
  var stickies;

  return {
    init: function() {
      var offset = window.scrollY;
      stickies = [].slice.call(document.querySelectorAll('.sticky'));
      if (stickies.length == 0) return;

      var length = stickies.length;
      var stickyOffset = 0;
      for (var i = 0; i < length; i++) {
        var node = stickies[i];
        var nextNode = stickies[i + 1];
        node.dataset.stickyStartPos = node.getBoundingClientRect().top - stickyOffset + offset;
        node.dataset.stickyHeight = node.clientHeight;
        stickyOffset = node.clientHeight;
        node.dataset.stickyEndPos = Math.min(nextNode ? nextNode.getBoundingClientRect().top - stickyOffset : 16777215, node.parentNode.getBoundingClientRect().bottom) + offset;
      }

      window.addEventListener('scroll', function() {
        var length = stickies.length;
        for(var i = 0; i < length; i++) {
          var prevNode = stickies[i - 1];
          var node = stickies[i];
          var nextNode = stickies[i + 1];
          if(window.scrollY >= +node.dataset.stickyStartPos && window.scrollY < +node.dataset.stickyEndPos) {
            if (node.className.indexOf(' fixed') < 0) {
              node.className += " fixed";
            }
            node.style.top = "";
            if (nextNode) {
              var nextPos = nextNode.getBoundingClientRect().top - node.dataset.stickyHeight;
              if (nextPos < 0) {
                node.style.top = nextPos + "px";
              }
            }
          }
          else {
            if (node.className.indexOf(' fixed') >= 0) {
              node.className = node.className.replace(' fixed', '');
              node.style.top = "";
            }
          }
        }
      });
    }
  }
})();

window.addEventListener('load', function() {
  Sticky.init();
});
