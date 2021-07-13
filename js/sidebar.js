const menuButton = document.querySelector('.topbar_menu');
const menuRules = document.querySelectorAll('.topbar_menu_rule');
let sidebarVisible = false;

function openNav() {

  document.body.className = 'shifted_left';

  menuRules[0].classList.add('open-top');
  menuRules[1].classList.add('open-middle');
  menuRules[2].classList.add('open-bottom');

  sidebarVisible = true;

  setTimeout(function() {
    document.body.addEventListener('click', closeNav);
  }, 10);
}

function closeNav(e) {

  sidebarVisible = false;
  document.body.className = '';

  menuRules[0].classList.remove('open-top');
  menuRules[1].classList.remove('open-middle');
  menuRules[2].classList.remove('open-bottom');

  setTimeout(function() {
    document.body.removeEventListener('click', closeNav);
  }, 10);
} 

menuButton.addEventListener('click', openNav);
