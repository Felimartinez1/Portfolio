// Inline demo videos (video[data-src]): the file only downloads once the video scrolls into view,
// then plays muted on loop while at least half of it is visible and pauses when scrolled away.
// With "reduce motion" enabled nothing autoplays and the poster + play button stay as they are.
document.addEventListener("DOMContentLoaded", () => {
  const videos = document.querySelectorAll("video[data-src]");
  if (!videos.length || !("IntersectionObserver" in window)) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const visible = new Set();

  function play(video) {
    if (!video.getAttribute("src")) video.src = video.dataset.src;
    video.play()
      .then(() => video.parentElement.classList.add("is-playing"))
      .catch(() => {
        // Autoplay blocked (e.g. data saver): keep the poster and play button
      });
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target: video, isIntersecting }) => {
      if (isIntersecting) {
        visible.add(video);
        play(video);
      } else {
        visible.delete(video);
        video.pause();
      }
    });
  }, { threshold: 0.5 });

  videos.forEach((video) => observer.observe(video));

  // Don't keep the inline copy running behind the full-size player
  const videoModal = document.getElementById("videoModal");
  if (videoModal) {
    videoModal.addEventListener("modal:open", () => videos.forEach((video) => video.pause()));
    videoModal.addEventListener("modal:close", () => visible.forEach(play));
  }
});
