let navMain = document.querySelector('.main-nav');
let pageToggle = document.querySelector('.page-header__toggle');
// console.log(pageToggle);
// console.log("Hi");
let wrapperLink = document.querySelector('.page-header__wrapper-link');

pageToggle.addEventListener('click', function() {
  console.log("Hiss");
  // navMain.classList.remove('main-nav--closed');
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    pageToggle.classList.add('toggle--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
    pageToggle.classList.remove('toggle--opened');
  }
});

// document.addEventListener('scroll', function() {
//   // document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
//   wrapperLink.classList.add('wrapper-link--light');
//   console.log('Скрол сработал');
// });
window.onscroll = function() {
  var scrolled = window.pageYOffset;
  if (scrolled > 1){
    wrapperLink.classList.add('wrapper-link--light');
  }
  else {
    wrapperLink.classList.remove('wrapper-link--light');
  }
  // console.log( 'Позиция скрола: '+scrolled  );
};
