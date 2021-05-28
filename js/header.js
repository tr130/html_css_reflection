let lastScrollY = window.scrollY;
let scrolling = false;

// When the user scrolls the page, execute myFunction
window.onscroll = function() {
  scrolling = true;
  
  console.log(`sticky is ${sticky}::lastScrollY is ${lastScrollY}`);
};

// Get the navbar
const navbar = document.querySelector(".topbar-and-nav");
const slider = document.querySelector(".slider");
console.log(navbar.offsetHeight);

navbar.style.top = `-${navbar.offsetHeight}px`;

let sticky = navbar.offsetHeight;

// Get the offset position of the navbar
window.addEventListener('resize', () => {
  sticky = navbar.offsetHeight;
})

console.log(`initial sticky is ${sticky}`);

setInterval(() => {
// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
if (scrolling && window.pageYOffset >= sticky) {
   scrolling = false;

  if (window.scrollY < lastScrollY) {
    console.log(`offset is ${window.pageYOffset}::sticky is ${sticky}::far enough down`);
    if (navbar.style.position === 'static') {
      navbar.style.top = `-${navbar.offsetHeight}px`;
    }
    if (navbar.style.position === 'static') {
    //navbar.classList.add("sticky");
    navbar.style.position = 'fixed';
    navbar.style.top = `-${navbar.offsetHeight}px`;
    
    
    //navbar.style.transition = 'all 2s ease-in-out';
      setTimeout(() => {
        navbar.style.top = '0px';
        //navbar.style.transition = '';
        if (window.innerWidth > 990) {
        slider.style.marginTop = `${navbar.offsetHeight - 50}px`;
        } else {
          slider.style.marginTop = `${navbar.offsetHeight}px`;
        }
      }, 10);
    
    } else {
      console.log('doing nothing')
    }
  } else {
    navbar.style.top = `-${navbar.offsetHeight}px`;
    if (window.innerWidth > 990) { 
      slider.style.marginTop = '-50px';
    } else {
      slider.style.marginTop = '0px';
    }


    setTimeout(() => {navbar.style.position = 'static'}, 210);
  }
  
} else if (scrolling && window.pageYOffset === 0) {
  navbar.style.position = 'static';
  if (window.innerWidth > 900) {
    slider.style.marginTop = '-50px';
    } else {
      slider.style.marginTop = '0px';
    }

}
lastScrollY = window.scrollY;
//console.log(`margin: ${slider.style.marginTop}`)
}, 250);