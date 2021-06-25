const menuButton = document.querySelector('.topbar_menu');
//const sidebar = document.querySelector('.sidebar');
//const sidebarMobile = document.querySelector('.sidebar_mobile');
//const mainpage = document.querySelector('#mainpage');
const menuRules = document.querySelectorAll('.topbar_menu_rule');
let sidebarVisible = false;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  //let width;
  /*if (window.innerWidth >= 991) {
    width = 350;
  } else {
    width = 275;
    sidebarMobile.style.padding = "0 21px";
  }*/
  //sidebar.style.right = 0;
  
  //mainpage.style.left = 0 - width + 'px';
  document.body.className = 'shifted_left';

  //document.body.style.backgroundColor = "black";
  //document.body.style.overflow = 'hidden';

  menuRules[0].classList.add('open-top');
  menuRules[1].classList.add('open-middle');
  menuRules[2].classList.add('open-bottom');

  sidebarVisible = true;

  setTimeout(function() {
    mainpage.addEventListener('click', closeNav);
  }, 10);
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav(e) {
  e.preventDefault();
  //sidebar.style.right = '-350px';
  //sidebarMobile.style.padding = "0";
  //mainpage.style.left = "0";

  //document.body.style.backgroundColor = "white";
  sidebarVisible = false;
  document.body.className = '';

  menuRules[0].classList.remove('open-top');
  menuRules[1].classList.remove('open-middle');
  menuRules[2].classList.remove('open-bottom');

  setTimeout(function() {
    mainpage.removeEventListener('click', closeNav);
  }, 10);
} 

menuButton.addEventListener('click', openNav);
