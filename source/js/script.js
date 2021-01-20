let pageNav = document.querySelector('.page-nav');
let navToggler = pageNav.querySelector('.page-nav__toggler');
let pageNavButton = pageNav.querySelector('.page-nav__button-wrapper');
let pageNavMenu = pageNav.querySelector('.page-nav__menu-wrapper');
let pageNavContacts = pageNav.querySelector('.page-nav__contacts-wrapper');

navToggler.addEventListener('click', function() {
  pageNavButton.classList.toggle('page-nav--opened');
  pageNavMenu.classList.toggle('page-nav--opened');
  pageNavContacts.classList.toggle('page-nav--opened');
  navToggler.classList.toggle('toggler--opened');
});

window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if (scrolled > 1){
    pageNav.classList.add('page-nav--color');
  }
  else {
    pageNav.classList.remove('page-nav--color');
  }
};
