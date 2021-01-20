let pageNav = document.querySelector('.page-nav');
let navToggler = pageNav.querySelector('.page-nav__toggler');
let pageNavButton = pageNav.querySelector('.page-nav__button-wrapper');
let pageNavMenu = pageNav.querySelector('.page-nav__menu-wrapper');
let pageNavContacts = pageNav.querySelector('.page-nav__contacts-wrapper');
let logo = pageNav.querySelector('.logo');
navToggler.addEventListener('click', function() {
  pageNavButton.classList.toggle('page-nav--opened');
  pageNavMenu.classList.toggle('page-nav--opened');
  pageNavContacts.classList.toggle('page-nav--opened');
  navToggler.classList.toggle('toggler--opened');
});

window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if (scrolled > 1){
    pageNav.classList.add('page-nav--scroll');
    navToggler.classList.add('toggler--scroll');
    logo.classList.add('logo--dark');
  }
  else {
    pageNav.classList.remove('page-nav--scroll');
    navToggler.classList.remove('toggler--scroll');
    logo.classList.remove('logo--dark');
  }
};
