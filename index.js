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
    document.getElementById("logo").style.width = "60%";
  } else {
    document.getElementById("logo").style.width = "80%";
  }
};

var myVar;

// function myFunction() {
//   myVar = setTimeout(showPage, 3000);
// }

// function showPage() {
//   document.getElementById("loader").style.display = "none";
//   document.getElementById("myDiv").style.display = "block";
// }