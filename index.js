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

window.onscroll = function() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.getElementById("logo").style.width = "55%";
  } else {
    document.getElementById("logo").style.width = "80%";
  }
  behavior: 'smooth';
};

var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }

let slideIndx = 1;
showSlid(slideIndx);

function plusSlid(n) {
  showSlid(slideIndx += n);
}

function currentSlid(n) {
  showSlid(slideIndx = n);
}

function showSlid(n) {
  let i;
  let slides = document.getElementsByClassName("farmTradeSlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndx = 1}    
  if (n < 1) {slideIndx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndx-1].style.display = "block";  
  dots[slideIndx-1].className += " active";
}


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);