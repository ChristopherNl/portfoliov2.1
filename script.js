const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");
const backToTop = document.querySelector(".back-to-top");

const introScreen = document.getElementById("introScreen");
const unlockBtn = document.getElementById("unlockBtn");
const langBtns = document.querySelectorAll(".lang-btn");
const aboutSection = document.querySelector("#navLinks");

const bgMusic = document.getElementById("bg-music");
const muteBtn = document.getElementById("muteBtn");
const volumeSlider = document.getElementById("volumeSlider");

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
    if (window.scrollY > 100) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });

  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

let startY = 0;
let isSwiping = false;

function unlockScreen() {
  introScreen.classList.add("hide");

  setTimeout(() => {
    introScreen.style.display = "none";
  }, 600);
}

if (unlockBtn && introScreen) {
  unlockBtn.addEventListener("click", unlockScreen);

  introScreen.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
    isSwiping = true;
  });

  introScreen.addEventListener("touchend", (e) => {
    if (!isSwiping) return;

    const endY = e.changedTouches[0].clientY;
    const diffY = startY - endY;

    if (diffY > 60) {
      unlockScreen();
    }

    isSwiping = false;
  });
}

function unlockScreen() {
  introScreen.classList.add("hide");

  setTimeout(() => {
    introScreen.style.display = "none";
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 600);
}

window.formspree =
  window.formspree ||
  function () {
    (formspree.q = formspree.q || []).push(arguments);
  };
formspree("initForm", { formElement: "#contacts-form", formId: "xlgkeaqk" });

let isMuted = false;
let currentVolume = 0.03;

if (bgMusic) {
  bgMusic.volume = currentVolume;
  volumeSlider.value = currentVolume;
}

document.addEventListener(
  "click",
  () => {
    if (bgMusic && bgMusic.paused) {
      bgMusic.play().catch(() => {});
    }
  },
  { once: true },
);

muteBtn.addEventListener("click", () => {
  if (!bgMusic) return;
  if (isMuted) {
    bgMusic.muted = false;
    muteBtn.textContent = "🔊";
  } else {
    bgMusic.muted = true;
    muteBtn.textContent = "🔇";
  }
  isMuted = !isMuted;
});

volumeSlider.addEventListener("input", () => {
  if (!bgMusic) return;
  const vol = parseFloat(volumeSlider.value);
  bgMusic.volume = vol;

  // Si le volume devient > 0 et qu’on est en mute, on unmute
  if (vol > 0 && isMuted) {
    bgMusic.muted = false;
    muteBtn.textContent = "🔊";
    isMuted = false;
  }
});
