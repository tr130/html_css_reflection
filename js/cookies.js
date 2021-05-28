// based on https://www.w3schools.com/js/js_cookies.asp

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  const acceptCookies = getCookie("acceptCookies");
  //const acceptCookies = "";
  console.log(acceptCookies);
  if (acceptCookies != 'true') {
    //document.querySelector('body').style.height = '100%';
    document.querySelector('body').style.overflow = 'hidden';
    document.querySelector('.cookie_consent').style.display = 'flex';
  
  document.querySelector('.cookie_consent a').onclick = function() {
    //e.preventDefault();
    setCookie('acceptCookies', true, 30)
    document.querySelector('.cookie_consent').style.display = 'none';
    //localStorage.setItem('cookieconsent', true);
    //document.querySelector('body').style.height = '100%';
    document.querySelector('body').style.overflow = 'auto';
  };
} else {
  console.log('cookies accepted');
}
}


checkCookie();