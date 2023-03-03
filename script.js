var className = "inverted";
var scrollTrigger = 500;

window.onscroll = function() {
let top = document.getElementById("scroll");

  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById("head").classList.add(className);
  } else {
    document.getElementById("head").classList.remove(className);
  }
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}
const textArray = ["Example sentence one.", "Example sentence two.", "Example sentence three."];
const typingDelay = 100; // Delay in milliseconds between typing each character
const deletingDelay = 50; // Delay in milliseconds between deleting each character
const newTextDelay = 2000; // Delay in milliseconds before typing new text
let textIndex = 0;
let charIndex = 0;
let cursorVisible = true;
 var ty = document.getElementsByClassName("font-text-1");

function type() {
  const currentText = textArray[0];
  if (charIndex < currentText.length) {
    for(i= 0 ; i < ty.length ; i++){
    ty[i].innerHTML += currentText.charAt(charIndex);
    
    charIndex++;
    
    
    setTimeout(type, typingDelay);
    }
  } else {
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    for(i= 0 ; i < ty.length ; i++){
      ty[i].innerHTML = ty[i].innerHTML.slice(0, -1);
    
    charIndex--;
    
    setTimeout(erase, deletingDelay);
    }
  } else {
    textIndex++;
    if (textIndex >= textArray.length) {
      textIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

function blinkCursor() {
  const cursor = document.getElementsByClassName("cursor-1");
  for(i= 0 ; i < cursor.length ; i++){
  cursorVisible = !cursorVisible;
  cursor.style.opacity = cursorVisible ? "1" : "0";
  }
  setTimeout(blinkCursor, 500);
}

type();
blinkCursor();