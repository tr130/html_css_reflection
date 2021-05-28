const searchForm = document.querySelector('.topbar_search')
const searchButton = document.querySelector('#search_button');
const supportButton = document.querySelector('.topbar_btn_support');
const contactButton = document.querySelector('.topbar_btn_contact');
const searchInput = document.querySelector('.topbar_search_input');
let searchVisible = false;

searchButton.addEventListener('click', function(e) {
  if (990 <= window.innerWidth && window.innerWidth < 1260) {
    if (searchVisible === false) {
      e.preventDefault();
      console.log('clicked');
      supportButton.style.opacity = '0';
      contactButton.style.opacity = '0';
      setTimeout(function () {
        contactButton.style.display = 'none';
        supportButton.style.display = 'none';
        searchForm.style.width = '260px';
        searchInput.style.display = 'block';
        setTimeout( function() {
          searchInput.style.opacity = '1';
        }, 10)
        searchVisible = true; 
      }, 500);
    } else if (!searchInput.value) {
      e.preventDefault();
      searchInput.style.opacity = '0';
      setTimeout( function() {
        searchForm.style.width = '60px';
      searchInput.style.display = 'none';
      supportButton.style.display = 'inline-block';
      contactButton.style.display = 'inline-block';
      setTimeout( function() {
        supportButton.style.opacity = '1';
        contactButton.style.opacity = '1';
      }, 10)
      searchVisible = false; 
      }, 500);
    }
  }
})