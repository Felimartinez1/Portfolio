document.addEventListener("DOMContentLoaded", function() {
  var analyticsModal = document.getElementById("analyticsVideoModal");
  var ecommerceModal = document.getElementById("ecommerceModal");
  var messiModal = document.getElementById("messiVideoModal");
  var phonemixModal = document.getElementById("phonemixModal");

  var closeButtons = document.getElementsByClassName("close");

  var analyticsButton = document.getElementById("analyticsButton");
  if (analyticsButton) {
    analyticsButton.addEventListener("click", function(event) {
      event.preventDefault();
      analyticsModal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  }

  var ecommerceOverview = document.getElementById("ecommerceOverview");
  if (ecommerceOverview) {
    ecommerceOverview.addEventListener("click", function(event) {
      event.preventDefault();
      ecommerceModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  var messiProject = document.getElementById("messiProject");
  if (messiProject) {
    messiProject.addEventListener("click", function(event) {
      event.preventDefault();
      messiModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  var phonemixProject = document.getElementById("phonemixProject");
  if (phonemixProject) {
    phonemixProject.addEventListener("click", function(event) {
      event.preventDefault();
      phonemixModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  function closeModal() {
    if (analyticsModal) {
      analyticsModal.style.display = "none";
    }
    if (ecommerceModal) {
      ecommerceModal.classList.remove("show");
    }
    if (messiModal) {
      messiModal.classList.remove("show");
    }
    if (phonemixModal) {
      phonemixModal.classList.remove("show");
    }
    document.body.style.overflow = "auto";
    
    var iframes = document.querySelectorAll("iframe");
    iframes.forEach(function(iframe) {
      iframe.src = iframe.src;
    });
  }

  for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closeModal);
  }

  window.onclick = function(event) {
    if (event.target == analyticsModal || event.target == ecommerceModal || event.target == messiModal || event.target == phonemixModal) {
      closeModal();
    }
  };
});
