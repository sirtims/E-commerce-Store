const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.drop-down-menu ');



// setting up a requestAnimationFrame for animating the content on the page on scroll

// let scroll = window.requestAnimationFrame || function (callback) {
//    window.setTimeout(callback, 1000 / 60)
// };
let scroll= window.requestAnimationFrame || function (callback){
   winidow.setTimeout(callback, 1000/60)
}
let elementsToShow = document.querySelectorAll('.show-on-scroll');
function loop() {
   elementsToShow.forEach(function (element) {
      if (isElementInViewPort(element)) {
         element.classList.add('is-visible');
      }
      else {
         element.classList.remove('is-visible')
      }
   })
   scroll(loop);
}
loop();
function isElementInViewPort(el) {
   // special bonus for those using jquery
   if (typeof jQuery === 'function' && el instanceof jQuery) {
      el = el[0];
   }
   let rect = el.getBoundingClientRect();
   return (
      (rect.top <= 0 && rect.bottom >= 0)
      ||
            (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) 
         &&
             rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))

   )
}
// hamburga section script functions
hambuger.addEventListener('click', function () {
   hambuger.classList.toggle('active')
   navMenu.classList.toggle('active')
});

document.querySelectorAll('.menu-bar').forEach(n =>
   n.addEventListener('click', () => {
      hambuger.classList.remove('active')
      navMenu.classList.remove('active')
   }));

   