// filterPortfolio.js
$(document).ready(function () {
    $(".filter-button").click(function () {
      var value = $(this).attr("data-filter");
  
      if (value == "all") {
        $(".portfolio-item").show("1000");
      } else {
        $(".portfolio-item")
          .not("." + value)
          .hide("3000");
        $(".portfolio-item")
          .filter("." + value)
          .show("3000");
      }
  
      // Cambiar la clase activa
      $(".filter-button").removeClass("active");
      $(this).addClass("active");
    });
  });
  