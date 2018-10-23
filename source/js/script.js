var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');
var modalLink = document.querySelector('.best-product__button');
var modalOrder = document.querySelector('.modal-order');
var overlay = document.querySelector(".modal-overlay");

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

modalLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalOrder.classList.add("modal-view");
  overlay.classList.add("overlay-view");
});

// window.addEventListener("keydown", function (evt) {
//   if (evt.keyCode === 27) {
//     evt.preventDefault();
//     if (modalOrder.classList.contains("modal-view")) {
//       modalOrder.classList.remove("modal-view");
//       overlay.classList.remove("overlay-view");
//     }
//   }
// });
