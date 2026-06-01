const hamburger = document.querySelector("#hamburger");
const navLinks = document.querySelector("#navLinks");
const backToTop = document.querySelector(".back-to-top");

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

const introScreen = document.getElementById("introScreen");
const unlockBtn = document.getElementById("unlockBtn");
const langBtns = document.querySelectorAll(".lang-btn");

unlockBtn.addEventListener("click", () => {
  introScreen.style.opacity = "0";
  introScreen.style.pointerEvents = "none";

  setTimeout(() => {
    introScreen.style.display = "top";
  }, 500);
});

langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    langBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const lang = btn.dataset.lang;
    document.documentElement.lang = lang;
  });
});
