const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const menuBtn = document.querySelector(".menu__btn");
const headerNav = document.querySelector(".header__nav");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", () => {
  headerNav.classList.toggle("header__nav--open");
  overlay.classList.toggle("header__nav--open");
});
