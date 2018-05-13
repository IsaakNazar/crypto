const menu = document.querySelector('.hamburger-menu');
const nav_fixed = document.querySelector('.nav_positionfixed');
const nav_cont = document.querySelector('.navcontainer');
const main_nav = document.querySelector('.main_nav_container');
const container = document.querySelector('.container');


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
    nav_fixed.style.display = 'block';
    nav_fixed.style.position = 'relative';
    nav_fixed.style.textAlign = 'center';
    nav_fixed.style.height = 'auto';
    nav_fixed.style.padding = '20px 0';
    nav_cont.style.height = '90px';
    nav_cont.style.width = "100%";
    nav_cont.style.display = 'table';
    nav_cont = document.querySelector('.navcontainer');
  } else {
     main_nav.style.display = 'none';
  }


}

function myFunction(x) {
    if (x.matches) { // If media query matches
        nav_fixed.style.display = 'block';
    }
}

var x = window.matchMedia("(min-width: 651px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction)


menu.addEventListener('click', toggling);

//click circle (+) icon to open answer for FAQ
function toggleAnswer(el, pl) {
  pl.classList.toggle('openAnswer');

  if (el.style.display === 'block') {
    el.style.display = 'none';
  } else {
    el.style.display = 'block';
  }
}

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

$(document).ready(function(){
  // Add smooth scrolling to all links
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

$(document).ready(function() {
  $('.plusIcon').click(function() {
    $('.answer').fadeIn();
  });
});
