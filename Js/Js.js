const btn = document.querySelector("#btn-mega");
const mega = document.querySelector(".mega-menu");

console.log(mega);

btn.addEventListener("click", () => {
  mega.classList.toggle("active");
});
