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
