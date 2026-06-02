const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");
const backToTop = document.querySelector(".back-to-top");

const introScreen = document.getElementById("introScreen");
const unlockBtn = document.getElementById("unlockBtn");
const langBtns = document.querySelectorAll(".lang-btn");
const aboutSection = document.querySelector("#navLinks");

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
