let lastScrollY = window.pageYOffset;
let scrolling = false;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  scrolling = true;
};

// Get the navbar
const navbar = document.querySelector(".topbar-and-nav");
const slider = document.querySelector(".slider");

navbar.style.top = 0 - navbar.offsetHeight + 'px';

let sticky = navbar.offsetHeight;

// Get the offset position of the navbar
window.addEventListener('resize', function() {
  sticky = navbar.offsetHeight;
})

setInterval(function() {
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
if (scrolling && window.pageYOffset >= sticky) {
   scrolling = false;

  if (window.pageYOffset < lastScrollY) {
    if (navbar.style.position === 'static') {
      navbar.style.top = 0 - navbar.offsetHeight + 'px';
    }
    if (navbar.style.position === 'static') {
    navbar.style.position = 'fixed';
    navbar.style.top = 0 - navbar.offsetHeight + 'px';
    
    
    //navbar.style.transition = 'all 2s ease-in-out';
      setTimeout(function() {
        navbar.style.top = '0px';
        //navbar.style.transition = '';
        if (window.innerWidth > 990) {
        slider.style.marginTop = navbar.offsetHeight - 50 + 'px';
        } else {
          slider.style.marginTop = navbar.offsetHeight + 'px';
        }
      }, 10);
    
    }
  } else {
    navbar.style.top = 0 - navbar.offsetHeight + 'px';
    if (window.innerWidth > 990) { 
      slider.style.marginTop = '-50px';
    } else {
      slider.style.marginTop = '0px';
    }


    setTimeout(function() {navbar.style.position = 'static'}, 210);
  }
  
} else if (scrolling && window.pageYOffset === 0) {
  navbar.style.position = 'static';
  if (window.innerWidth > 900) {
    slider.style.marginTop = '-50px';
    } else {
      slider.style.marginTop = '0px';
    }

}
lastScrollY = window.pageYOffset;
}, 250);