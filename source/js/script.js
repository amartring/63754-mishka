var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');
var modalLink = document.querySelectorAll('.modal-button');
var modalOrder = document.querySelector('.modal-order');
var overlay = document.querySelector('.modal-overlay');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');

  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

for(var i = 0; i < modalLink.length; i++){
  modalLink[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    modalOrder.classList.add('modal-view');
    overlay.classList.add('overlay-view');
  });
};

if(overlay) {
  overlay.addEventListener("click", function() {
    modalOrder.classList.remove('modal-view');
    overlay.classList.remove('overlay-view');
  });
}

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalOrder.classList.contains('modal-view')) {
      modalOrder.classList.remove('modal-view');
      overlay.classList.remove('overlay-view');
    }
  }
});
