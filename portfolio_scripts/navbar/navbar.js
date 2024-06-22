// navbar.js

document.addEventListener("DOMContentLoaded", function() {
  var navbar = document.getElementById("mainNav");

  if (navbar) {
    var sticky = navbar.offsetTop;

    function myFunction() {
      if (window.scrollY >= sticky) {
        navbar.classList.add("sticky");
      } else {
        navbar.classList.remove("sticky");
      }
    }

    window.onscroll = myFunction;

    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        navbar.classList.add('navbar-hidden');
      } else {
        navbar.classList.remove('navbar-hidden');
      }
    });

    myFunction(); // Run once to set the initial state
  } else {
    console.warn("Navbar element with ID 'mainNav' not found.");
  }
});
