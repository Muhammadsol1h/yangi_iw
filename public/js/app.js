// ================================================ SWIPER ================================================
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
    slidesPerView: 2,
    spaceBetween: 22,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination",
  },
 
});
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });
var swiper5 = new Swiper(".mySwiper5", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ================================================ HEADER ================================================
let resposive = document.querySelector("#responsive-menu");
let hamburger_menu = document.querySelector("#hamburger-menu");
let close_menu = document.querySelector("#close__menu");
let body = document.querySelector('body')

hamburger_menu.addEventListener("click", function () {
  body.classList.add('overflow-hidden')
  resposive.classList.add("right-0");
  resposive.classList.remove("-right-full");
});
close_menu.addEventListener("click", function () {
  resposive.classList.add("-right-full");
  resposive.classList.remove("right-0");
  body.classList.remove('overflow-hidden')

});
// ================================================ HERO ================================================

// ================================================ ADVANTAGES ================================================
// ================================================ ARTICLES ================================================

// ================================================ CONTACTK ================================================
