const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");
const backToTop = document.querySelector(".back-to-top");
const videoPlayer = document.querySelector("#videoPlayer");
const video = document.querySelector("#projectVideo");
const playBtn = document.querySelector("#playBtn");
const fullscreenBtn = document.querySelector("#fullscreenBtn");
const progressBar = document.querySelector("#progressBar");
const volumeBar = document.querySelector("#volumeBar");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("open");
  });

  hamburger.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("open");
    }
  });
}

if (backToTop) {
  window.addEventListener("scroll", () => {
    backToTop.classList.toggle("show", window.scrollY > 100);
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

if (videoPlayer && video && playBtn) {
  const toggleVideo = async () => {
    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch (error) {
      console.error("Erreur lecture vidéo :", error);
    }
  };

  playBtn.addEventListener("click", toggleVideo);
  video.addEventListener("click", toggleVideo);

  video.addEventListener("play", () => {
    playBtn.classList.add("hidden");
  });

  video.addEventListener("pause", () => {
    playBtn.classList.remove("hidden");
  });

  video.addEventListener("error", () => {
    console.error("Erreur vidéo :", video.error);
    playBtn.classList.remove("hidden");
  });
}

if (video && progressBar) {
  video.addEventListener("timeupdate", () => {
    if (video.duration) {
      progressBar.value = (video.currentTime / video.duration) * 100;
    }
  });

  progressBar.addEventListener("input", () => {
    if (video.duration) {
      video.currentTime = (progressBar.value / 100) * video.duration;
    }
  });
}

if (video && volumeBar) {
  video.volume = parseFloat(volumeBar.value);

  volumeBar.addEventListener("input", () => {
    video.volume = parseFloat(volumeBar.value);
  });
}

if (videoPlayer && fullscreenBtn) {
  fullscreenBtn.addEventListener("click", async () => {
    try {
      if (!document.fullscreenElement) {
        await videoPlayer.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Erreur plein écran :", error);
    }
  });
}
