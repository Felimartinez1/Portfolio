// scrollRevealConfig.js
$(document).ready(function() {
    // Configuración de ScrollReveal
    ScrollReveal().reveal('#mainNav', {
      duration: 800,
      origin: 'top',
      distance: '50px',
      easing: 'ease-in-out',
      mobile: true
    });
  
    var previousScroll = 0;
    var isScrollingUp = false;
    var isEffectActivated = false;
  
    $(window).scroll(function() {
      var currentScroll = $(this).scrollTop();
  
      if (currentScroll <= 0) {
        // Si se hace scroll hacia arriba del todo
        $('#mainNav').removeClass('navbar-shrink navbar-hidden');
        isEffectActivated = false;
      } else if (currentScroll < previousScroll) {
        // Si se hace scroll hacia arriba pero no está en la parte superior
        if (!isScrollingUp && !isEffectActivated) {
          $('#mainNav').removeClass('navbar-hidden').addClass('navbar-shrink');
          isEffectActivated = true;
        }
        isScrollingUp = true;
      } else {
        // Si se hace scroll hacia abajo
        $('#mainNav').removeClass('navbar-shrink');
        isEffectActivated = false;
        isScrollingUp = false;
      }
  
      previousScroll = currentScroll;
    });
  });
  