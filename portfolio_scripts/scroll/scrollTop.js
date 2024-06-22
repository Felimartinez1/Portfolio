// scrollTop.js
document.addEventListener("DOMContentLoaded", function () {
    const arrowUpa = document.getElementById("arrow-upa");
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        arrowUpa.style.display = "block";
      } else {
        arrowUpa.style.display = "none";
      }
    });
  
    arrowUpa.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  });
  