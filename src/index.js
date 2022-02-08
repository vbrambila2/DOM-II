import './less/index.less'

// Your code goes here!
//1 click
const homeNav = document.querySelector("nav .nav-link");

homeNav.addEventListener("click", function() {
    console.log("already on home page");
});

//2 keydown
const navAccess = document.querySelector(".nav-container");
function removeNav(e) {
    if (e.key === "a") {
        navAccess.classList.remove("nav-container");
    }
}
document.addEventListener("keydown", removeNav);

function replaceNav(e) {
    if (e.key === "s") {
        navAccess.classList.add("nav-container");
    }
}
document.addEventListener("keydown", replaceNav);

//3 load
window.addEventListener('load', () => {
    console.log('page is fully loaded');
  });

 //4 scroll
let lastKnownScrollPosition = 0;
let moving = false;

function logScroll(scrollPos) {
    if (scrollPos <= 10) {
        console.log(scrollPos);
    } else {
        console.log("over the limit");
    }
}

document.addEventListener('scroll', function() {
  lastKnownScrollPosition = window.scrollY;

  if (moving === false) {
    window.requestAnimationFrame(function() {
        logScroll(lastKnownScrollPosition);
        moving = false;
    });

    moving = true;
  }
});

//5 dblclick
const mainImage = document.querySelector(".intro img");
mainImage.addEventListener("dblclick", function() {
    console.log("double clicked");
});

//6 focus NOT DONE
const logo = document.querySelector(".logo-heading");

function focused() {
    logo.style.fontSize = '10rem';
}

function notFocused() {
    logo.style.fontSize = '3rem';
}

logo.addEventListener('focus', focused);

logo.addEventListener('blur', notFocused);

//7 