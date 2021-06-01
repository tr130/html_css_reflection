const navbar = document.querySelector(".topbar-and-nav");
const banner = document.querySelector(".slider");
let lastScrollY = window.pageYOffset;
let scrolling = false;
let sticky = navbar.offsetHeight;
navbar.style.top = 0 - sticky + 'px';

window.addEventListener('resize', function () {
  sticky = navbar.offsetHeight;
})

window.onscroll = function () {
  scrolling = true;
};

setInterval(function () {

  if (scrolling && window.pageYOffset >= sticky) {
    scrolling = false;

    if (window.pageYOffset < lastScrollY) {
      if (navbar.style.position === 'static') {
        navbar.style.top = 0 - sticky + 'px';
      }
      if (navbar.style.position === 'static') {
        navbar.style.position = 'fixed';
        navbar.style.top = 0 - sticky + 'px';

        setTimeout(function () {
          navbar.style.top = '0px';
          if (window.innerWidth > 990) {
            banner.style.marginTop = sticky - 50 + 'px';
          } else {
            banner.style.marginTop = sticky + 'px';
          }
        }, 10);

      }
    } else {
      navbar.style.top = 0 - sticky + 'px';
      if (window.innerWidth > 990) {
        banner.style.marginTop = '-50px';
      } else {
        banner.style.marginTop = '0px';
      }

      setTimeout(function () {
        navbar.style.position = 'static'
      }, 210);
    }

  } else if (scrolling && window.pageYOffset === 0) {
    navbar.style.position = 'static';
    if (window.innerWidth > 900) {
      banner.style.marginTop = '-50px';
    } else {
      banner.style.marginTop = '0px';
    }

  }
  lastScrollY = window.pageYOffset;
}, 250);