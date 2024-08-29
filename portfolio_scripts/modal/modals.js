document.addEventListener("DOMContentLoaded", function() {
  const analyticsModal = document.getElementById("analyticsVideoModal");
  const ecommerceModal = document.getElementById("ecommerceModal");
  const messiModal = document.getElementById("messiVideoModal");
  const phonemixModal = document.getElementById("phonemixModal");

  const closeButtons = document.getElementsByClassName("close");

  const analyticsButton = document.getElementById("analyticsButton");
  if (analyticsButton) {
    analyticsButton.addEventListener("click", function(event) {
      event.preventDefault();
      analyticsModal.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  }

  const ecommerceOverview = document.getElementById("ecommerceOverview");
  if (ecommerceOverview) {
    ecommerceOverview.addEventListener("click", function(event) {
      event.preventDefault();
      ecommerceModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  const messiProject = document.getElementById("messiProject");
  if (messiProject) {
    messiProject.addEventListener("click", function(event) {
      event.preventDefault();
      messiModal.classList.add("show");
      document.body.style.overflow = "hidden";
    });
  }

  const phonemixProject = document.getElementById("phonemixProject");
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
    
    const iframes = document.querySelectorAll("iframe");
    iframes.forEach(function(iframe) {
      iframe.src = iframe.src;
    });
  }

  for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", closeModal);
  }

  window.onclick = function(event) {
    if (event.target == analyticsModal || event.target == ecommerceModal || event.target == messiModal || event.target == phonemixModal) {
      closeModal();
    }
  };
});
