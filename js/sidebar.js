const menuButton = document.querySelector('.topbar_menu');
const sidebar = document.querySelector('.sidebar');
const sidebarMobile = document.querySelector('.sidebar_mobile');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');
const menuRules = document.querySelectorAll('.topbar_menu_rule');
let sidebarVisible = false;

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  let width;
  if (window.innerWidth >= 991) {
    width = 350;
  } else {
    width = 275;
    sidebarMobile.style.padding = "0 21px";
  }

  sidebar.style.width = width + 'px';
  
  main.style.left = 0 - width + 'px';
  header.style.left = 0 - width + 'px';
  footer.style.left = 0 - width + 'px';
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";

  menuRules[0].classList.add('open-top');
  menuRules[1].classList.add('open-middle');
  menuRules[2].classList.add('open-bottom');

  sidebarVisible = true;

  setTimeout(function() {
    main.addEventListener('click', closeNav);
  header.addEventListener('click', closeNav);
footer.addEventListener('click', closeNav);
  }, 10);
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  sidebar.style.width = "0";
  sidebarMobile.style.padding = "0";
  main.style.left = "0";
  header.style.left = "0";
  footer.style.left = "0";
  document.body.style.backgroundColor = "white";
  sidebarVisible = false;

  menuRules[0].classList.remove('open-top');
  menuRules[1].classList.remove('open-middle');
  menuRules[2].classList.remove('open-bottom');

  setTimeout(function() {
    main.removeEventListener('click', closeNav);
    header.removeEventListener('click', closeNav);
    footer.removeEventListener('click', closeNav);
  }, 10);
} 

menuButton.addEventListener('click', openNav);
