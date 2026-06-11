function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "croll untuk melihat";
  document.getElementById("icon-up").style.display = "none";

  document.getElementById("icon-down").style.display = "block";
}
var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    event.preventDefault();
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute("value", "http://127.0.0.1:5500/contact.html");
  });
}
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;

//Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });

  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};

buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});
var codingProjects = document.querySelectorAll(".project");
codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 300;
});
AOS.init({
  once: true,
});
