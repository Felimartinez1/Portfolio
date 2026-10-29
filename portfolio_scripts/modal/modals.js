// Shared modal helper used by the experience, video and certificate modals.
// Closes on the × button, on a click outside the box, or with Escape, and gives focus back to the trigger.
const Modal = (() => {
  let lastTrigger = null;

  function open(modal, trigger) {
    lastTrigger = trigger || document.activeElement;
    modal.classList.add("show");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus({ preventScroll: true });
    modal.dispatchEvent(new CustomEvent("modal:open"));
  }

  function close(modal) {
    if (!modal.classList.contains("show")) return;
    modal.classList.remove("show");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    modal.dispatchEvent(new CustomEvent("modal:close"));
    if (lastTrigger && typeof lastTrigger.focus === "function") lastTrigger.focus({ preventScroll: true });
  }

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("site-modal")) {
      close(event.target);
      return;
    }
    const closeButton = event.target.closest(".modal-close");
    if (closeButton) close(closeButton.closest(".site-modal"));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") document.querySelectorAll(".site-modal.show").forEach(close);
  });

  return { open, close };
})();

// Video modal. Two kinds of triggers:
//  - data-video: a LinkedIn embed URL, loaded in an iframe only when opened
//  - data-video-file: a video hosted with the site, played in a native player
// Either way the media is unloaded on close to stop playback.
document.addEventListener("DOMContentLoaded", () => {
  const videoModal = document.getElementById("videoModal");
  if (!videoModal) return;
  const box = videoModal.querySelector(".video-box");
  const frame = videoModal.querySelector("iframe");
  const player = videoModal.querySelector("video");
  const fallback = videoModal.querySelector(".video-fallback");

  function openEmbed(trigger) {
    player.hidden = true;
    frame.hidden = false;
    frame.src = trigger.dataset.video;
    // Same post outside the embed, for when the iframe is blocked (local file, privacy extensions)
    if (fallback) {
      fallback.href = trigger.dataset.video.replace("/embed/feed/update/", "/feed/update/").split("?")[0];
      fallback.firstChild.textContent = "Video not loading? Open it on LinkedIn ";
    }
  }

  function openFile(trigger) {
    frame.hidden = true;
    player.hidden = false;
    player.src = trigger.dataset.videoFile;
    player.currentTime = 0;
    player.play().catch(() => {});
    if (fallback) {
      fallback.hidden = !trigger.dataset.videoPost;
      fallback.href = trigger.dataset.videoPost || "#";
      fallback.firstChild.textContent = "See the post on LinkedIn ";
    }
  }

  document.querySelectorAll("[data-video], [data-video-file]").forEach((trigger) => {
    trigger.addEventListener("click", (event) => {
      event.preventDefault();
      if (fallback) fallback.hidden = false;
      if (trigger.dataset.videoFile) {
        openFile(trigger);
      } else {
        openEmbed(trigger);
      }
      const title = trigger.dataset.videoTitle || "Project video";
      frame.title = title;
      videoModal.setAttribute("aria-label", title);
      box.style.setProperty("--video-ratio", trigger.dataset.videoRatio || "16 / 9");
      box.classList.toggle("is-narrow", trigger.hasAttribute("data-video-narrow"));
      Modal.open(videoModal, trigger);
    });
  });

  videoModal.addEventListener("modal:close", () => {
    frame.src = "about:blank";
    player.pause();
    player.removeAttribute("src");
    player.load();
  });
});
