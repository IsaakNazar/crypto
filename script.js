const menu = document.querySelector('.hamburger-menu_m');
const nav_cont_mob = document.querySelector('.navcontainer_m');
const main_nav_mob = document.querySelector('.main_nav_container_m');
const container = document.querySelector('.container');
const bb = document.getElementsByTagName('body');
const main_nav = document.querySelector('.main_nav_container');



// window.addEventListener("load", function() {
//   document.getElementsByTagName('body').style.overflow = 'visible';
//   });

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    main_nav.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
  } else {
    main_nav.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  }
});


//toggle hamburger menu
function toggling() {
  menu.classList.toggle('close-hamburger');

  if (document.querySelector('.close-hamburger')) {
    main_nav_mob.style.display = 'block';
  } else {
     main_nav_mob.style.display = 'none';
  }
}


menu.addEventListener('click', toggling);

//click circle (+) icon to open answer for FAQ
function toggleAnswer(el, pl) {
  pl.classList.toggle('openAnswer');

  if (el.style.display === 'block') {
    // setTimeout(() => {el.style.opacity = '0';}, 500)
    // el.style.display = 'none';
    el.style.opacity = '0';
    setTimeout(() => {el.style.display = 'none';}, 250)
  } else {
    el.style.display = 'block';
    setTimeout(() => {el.style.opacity = '1';}, 1)
  }
}

//move images on carousel slider

let slider = document.querySelector('.mini_slider'),
next = document.querySelector('.right'),
prev = document.querySelector('.left'),
imgs = slider.getElementsByTagName('img'),
inner = document.querySelector('.mini_slide_wrapper'),
width = 350,
curImgIndex = 0;

function switchImg() {
  inner.style.left = -width * curImgIndex + 'px';
}

next.addEventListener('click', function() {
  curImgIndex++;

  if(curImgIndex >= imgs.length) {
    curImgIndex = 0;
  }
  switchImg();
});

prev.addEventListener('click', function() {
  curImgIndex--;

  if(curImgIndex < 0) {
    curImgIndex = imgs.length - 1;
  }
  switchImg();
});



// Add smooth scrolling to all links

$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      var hash = this.hash;

      //  animate() method to add smooth page scroll
      // 800 ms will take the scrolling time
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }
  });
});
