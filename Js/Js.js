const btn = document.querySelector("#btn-mega");
const mega = document.querySelector(".mega-menu");
const imgMegaMenu = document.querySelector('[alt="megamenu"]');
const mainNav = document.querySelector(".main-nav");

btn.addEventListener("click", megaActive);

let overlay = document.createElement("div");
overlay.className = "overlay";

function megaActive() {
  mega.classList.toggle("active");
  mainNav.append(overlay);
}

imgMegaMenu.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("click", function (e) {
  e.stopPropagation();
  if (e.target !== mega && e.target !== btn) {
    mega.classList.remove("active");
    if (!mega.classList.contains("active")) {
      overlay.remove();
    }
  }
});

// #####################################################

const secSkills = document.querySelector(".our-skills"),
  progress = document.querySelectorAll(".our-skills .the-progress > span");

window.addEventListener("scroll", function () {
  if (scrollY >= secSkills.offsetTop - 100) {
    progress.forEach((span) => {
      span.style.width = span.dataset.attr;
    });
    progress.forEach((span) => {
      span.classList.add("active");
    });
  }
});

// #####################################################

const secStats = document.querySelector(".stats"),
  spanCounter = document.querySelectorAll(".stats span.counter");
let start = false;

window.addEventListener("scroll", function () {
  if (scrollY >= secStats.offsetTop - 100) {
    if (!start) {
      spanCounter.forEach((span) => startCount(span))
      start = true;
    }
  }
});

function startCount (num) {
  let count = setInterval(function () {
    num.textContent++;
    if (num.textContent === num.dataset.count) {
      clearInterval(count);
    }
  }, 1000 / num.dataset.count);
}

// #####################################################
