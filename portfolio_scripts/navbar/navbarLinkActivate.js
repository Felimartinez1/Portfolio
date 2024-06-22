// navbarLinkActive.js
$(document).ready(function() {
    $('.nav-link').on('click', function() {
      $('.nav-link').removeClass('active'); // Elimina la clase activa de todos los enlaces
      $(this).addClass('active'); // Agrega la clase activa al enlace clicado
    });
  });
  