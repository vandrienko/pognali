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

    if(navToggler.classList.contains("toggler--opened")) {
    //Задает цвет верхнего блока
    pageNav.classList.add('page-nav--scroll');
    //Задаем цвет кнопки закрытия меню
    navToggler.classList.add('toggler--scroll');
    //Вставляет другой логотип
    logo.classList.add('logo--dark');
    }
    else {
    //Задает цвет верхнего блока
    pageNav.classList.remove('page-nav--scroll');
    //Задаем цвет кнопки закрытия меню
    navToggler.classList.remove('toggler--scroll');
    //Вставляет другой логотип
    logo.classList.remove('logo--dark');
    }
});

window.addEventListener("scroll", function() {
  pageNav.classList.add('page-nav--scroll');
  navToggler.classList.add('toggler--scroll');
  logo.classList.add('logo--dark');
  if (pageYOffset === 0 && !navToggler.classList.contains("toggler--opened")) {
    pageNav.classList.remove('page-nav--scroll');
    navToggler.classList.remove('toggler--scroll');
    logo.classList.remove('logo--dark');
  }
});
