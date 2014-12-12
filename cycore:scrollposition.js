// Define global reactive variables which describe
// the X/Y scroll position of the window
ScrollPosition = new ReactiveVar([window.pageXOffset,window.pageYOffset],function(ov,nv){
   return (ov[0] == nv[1]) && (ov[1] == nv[1]);
});
ScrollPositionX = new ReactiveVar(window.pageXOffset);
ScrollPositionY = new ReactiveVar(window.pageYOffset);

// Update scroll position on scroll event
window.addEventListener && window.addEventListener('scroll', function() {
   ScrollPosition.set([this.pageXOffset,this.pageYOffset]);
   ScrollPositionX.set(this.pageXOffset);
   ScrollPositionY.set(this.pageYOffset);
});

// getPageScroll() by quirksmode.com
// use getScrollPosition()[0] for horizontal scrolled amount
// use getScrollPosition()[1] for vertical scrolled amount
getScrollPosition = function() {
    var xScroll, yScroll;
    if (self.pageYOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    } else if (document.documentElement && document.documentElement.scrollTop) {
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    } else if (document.body) {// all other Explorers
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }
    return new Array(xScroll,yScroll)
}
