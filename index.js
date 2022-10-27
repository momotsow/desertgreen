const mobileBtn = document.getElementById('mobileMenu');

const nav = document.querySelector('.nav-list');

const mobileBtnExit = document.getElementById('mobile-exit');

mobileBtn.addEventListener('click', () => {
  nav.classList.add('menu-btn');
});

mobileBtnExit.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

nav.addEventListener('click', () => {
  nav.classList.remove('menu-btn');
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}