var navbarMain = document.getElementById('fresh-navbar');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
      navbarMain.classList.add("nav-colored");
  } 
    else {
      navbarMain.classList.remove("nav-colored");
    }
};

var options = {
  infinite: true,
  autoplay: false,
  slidesToScroll: 1,
  slidesToShow: 1,
  breakpoints: [
    { changePoint: 480, slidesToShow: 1, slidesToScroll: 1 }, 
    { changePoint: 640, slidesToShow: 1, slidesToScroll: 1 }, 
    { changePoint: 768, slidesToShow: 1, slidesToScroll: 1 }
  ]
};

docReady(function() {
  let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
  var scrollAnimOffset = 120;
  var carousels = bulmaCarousel.attach('.carousel', options);
  for(var i = 0; i < carousels.length; i++) {
    carousels[i].on('before:show', state => {
      console.log(state);
    });
  }
  
  var element = document.querySelector('#screenshots-carousel');
  if (element && element.bulmaCarousel) {
    element.bulmaCarousel.on('before-show', function(state) {
      console.log(state);
    });
  }
  
  // Return an array of bulmaCollapsible instances (empty if no DOM node found)
  const bulmaCollapsibleInstances = bulmaCollapsible.attach('.is-collapsible');

  // Loop into instances
  bulmaCollapsibleInstances.forEach(bulmaCollapsibleInstance => {
      // Check if current state is collapsed or not
      console.log(bulmaCollapsibleInstance.collapsed());
  });

  if (isMobile) {
    scrollAnimOffset = 30;
  }

  AOS.init({
    offset: scrollAnimOffset
  });
});

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
      // call on next available tick
      setTimeout(fn, 1);
  } else {
      document.addEventListener("DOMContentLoaded", fn);
  }
}