// navbarSlide.js
$(document).ready(function() {
    var previousScroll = 0;
  
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
  
      if (currentScroll <= 0) {
        $('#mainNav').removeClass('slide-up');
      } else if (currentScroll > previousScroll) {
        $('#mainNav').removeClass('slide-down'); // .addClass('slide-up');
      } else {
        $('#mainNav').removeClass('slide-up').addClass('slide-down');
      }
  
      previousScroll = currentScroll;
    });
  });
  