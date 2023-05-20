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
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    top.style.display = "block";
  } else {
    top.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Define an array of text strings to be typed out
const textArray = ["THIS IS  MY PORTFOLIO WEBSITE","PROGRAMMER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"];

// Define the speed at which the text is typed and deleted
const typingSpeed = 170;
const deletingSpeed = 60;

// Loop through each element with class name "font-text-1"
const elements = document.querySelectorAll('.font-text-1');
for (let i = 0; i < elements.length; i++) {
  const element = elements[i];
  let textIndex = 0;
  let deleting = false;

  // Create a blinking cursor element
  const cursor = document.createElement('span');
  cursor.className = 'cursor';
  cursor.textContent = '|';

  // Append the cursor element to the text element
  element.appendChild(cursor);

  // Define a function to type out the text
  function type() {
    const text = textArray[textIndex];
    const currentText = element.textContent;
    const currentLength = currentText.length;

    // If deleting, remove one character at a time
    if (deleting) {
      element.textContent = currentText.substring(0, currentLength - 1);
      if (currentLength === 1) {
        deleting = false;
        textIndex = (textIndex + 1) % textArray.length;        
      }
      
    }

    // If typing, add one character at a time
    else {
      element.textContent = text.substring(0, currentLength + 1);
      if (currentLength === text.length - 1) {
        deleting = true;
      }
    }

    // Use setTimeout to call this function again after the specified delay
    setTimeout(type, deleting ? deletingSpeed : typingSpeed);
    
  }

  // Call the type function to start the typing effect
  type();
}



 






