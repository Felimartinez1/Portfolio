// waypointsConfig.js
$(document).ready(function() {
    // Selecciona todas las secciones que quieres tener en la barra de navegación
    var sections = $('section');
  
    // Agrega un waypoint para cada sección
    sections.waypoint({
      handler: function(direction) {
        // Obtén el ID de la sección visible
        var activeSection = $(this.element).attr('id');
  
        // Remueve la clase activa de todos los enlaces de navegación
        $('.nav-link').removeClass('active');
  
        // Agrega la clase activa al enlace correspondiente a la sección visible
        $('a[href="#' + activeSection + '"]').addClass('active');
      },
      offset: '0' // Cambia esto según tu diseño para ajustar cuándo se activa el cambio de sección
    });
  });
  