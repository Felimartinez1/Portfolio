// navbarToggle.js
$(function () {
    $(document).scroll(function () {
      var $nav = $(".navbar");
      $nav.toggleClass("navbar-hidden", $(this).scrollTop() > $nav.height());
    });
  });
  