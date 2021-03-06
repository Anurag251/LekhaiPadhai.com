// userlogin
let userLogin = document.querySelector('.user-login');
let userLoginDrop = document.querySelector('.user-login-drop');
userLogin.addEventListener('click', () => {
  userLoginDrop.classList.toggle('user-login-show');
});

// searchDrop
let searchDropBtn = document.querySelector('.search-drop-btn');
let searchDrop = document.querySelector('.search-drop');
searchDropBtn.addEventListener('click', () => {
  searchDrop.classList.toggle('search-drop-show');
});

// searchPop
let searchPop = document.querySelector('.search-pop');
let searchCloseBtn = document.querySelector('.search-close-btn');
let search = document.querySelector('.search');

search.addEventListener('click', () => {
  searchPop.classList.add('search-pop-show');
});

searchCloseBtn.addEventListener('click', () => {
  searchPop.classList.remove('search-pop-show');
});

// share
let share = document.querySelectorAll('.share');
let socialIcons = document.querySelectorAll('.social-icons');

share.forEach((share, index) => {
  let toggle = false;

  share.addEventListener('click', () => {
    if (toggle) {
      toggle = false;
      socialIcons[index].classList.remove('share-show');
    } else {
      toggle = true;
      socialIcons[index].classList.add('share-show');
    }
  });
});

// cources
$(document).ready(function () {
  $('.itemBox').not('.plusTwo').hide('1000');
});

$(document).ready(function () {
  $('.courses-nav-buttons ul li').click(function () {
    const value = $(this).attr('data-filters');
    if (value == 'all') {
      $('.itemBox').show('1000');
    } else {
      $('.itemBox')
        .not('.' + value)
        .hide('1000');
      $('.itemBox')
        .filter('.' + value)
        .show('1000');
    }
  });

  $('.courses-nav-buttons ul li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
});

// autoTextChange
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement('style');
  css.type = 'text/css';
  css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
  document.body.appendChild(css);
};
