var className = "inverted";
var scrollTrigger = 500;

window.onscroll = function() {
  // We add pageYOffset for compatibility with IE.
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementById("head").classList.add(className);
  } else {
    document.getElementById("head").classList.remove(className);
  }
}
function toggle(){
     document.getElementById("head").style.backgroundColor = "#242937"
}
