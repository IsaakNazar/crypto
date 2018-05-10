const menu = document.querySelector('.hamburger-menu');
const nav = document.querySelector('.nav_positionfixed');
const nav_cont = document.querySelector('.navcontainer');
function toggling() {
  menu.classList.toggle('close-hamburger');

  if (document.querySelector('.close-hamburger')) {
    nav.style.display = 'block';
    nav.style.position = 'relative';
    nav.style.textAlign = 'center';
    nav.style.height = 'auto';
    nav.style.padding = '20px 0';
    nav_cont.style.height = '90px';
    nav_cont.style.width = "100%";
    nav_cont.style.display = 'table';
  } else {
    nav.style.display = 'none';
  }
}

menu.addEventListener('click', toggling);
