const tabs = document.querySelectorAll('#tabs')
const all_contents = document.querySelectorAll('#contents')

tabs.forEach((item, index) => {
    item.addEventListener('click', function () {
        tabs.forEach(function (item, index) {
            item.classList.remove('!bg-[#D42E5B]')
            item.classList.remove('!text-[#FFFFFF]')
            all_contents[index].classList.add("hidden")
        })
        item.classList.add('!bg-[#D42E5B]')
        item.classList.add('!text-[#FFFFFF]')
        all_contents[index].classList.remove("hidden")
    })
})


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
