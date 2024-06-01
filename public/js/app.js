// ================================================ SWIPER ================================================
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
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

hamburger_menu.addEventListener("click", function () {
  resposive.classList.add("right-0");
  resposive.classList.remove("-right-full");
});
close_menu.addEventListener("click", function () {
  resposive.classList.add("-right-full");
  resposive.classList.remove("right-0");
});
// ================================================ ARTICLES ================================================
let active = document.querySelectorAll("#active1");
let activebtn1 = document.querySelector("#activebtn1");
let activebtn2 = document.querySelector("#activebtn2");
let activebtn3 = document.querySelector("#activebtn3");
let enterbtn = document.querySelector("#enterbtn");
let enterbtn1 = document.querySelector("#enterbtn");
let enterbtn2 = document.querySelector("#enterbtn");
active.forEach(function (item, index) {
  item.addEventListener("click", function () {
    active.forEach(function (item, index) {
      active[index].classList.remove("active1");
    });
    active[index].classList.add("active1");
  });
});
enterbtn.addEventListener('click' , function(){
  activebtn1.classList.toggle('hidden')
})

// ================================================ CONTACTK ================================================
