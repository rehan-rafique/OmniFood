const header = document.querySelector(".header");
const navMobile = document.querySelector(".btn-mobile-nav");

navMobile.addEventListener("click", function () {
  header.classList.toggle("nav-open");
});
