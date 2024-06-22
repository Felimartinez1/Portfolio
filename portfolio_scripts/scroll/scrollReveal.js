// scrollReveal.js
ScrollReveal().reveal('.row', { delay: 200 });
ScrollReveal().reveal('.container', { delay: 200 });
ScrollReveal().reveal('.card', { delay: 200 });

window.sr = ScrollReveal();
sr.reveal('.animate__animated', {
  duration: 2000,
  origin: 'bottom',
  distance: '50px',
});
