//Change top nav classes if the page is crolled
//Select the elements
var topNav = document.getElementById('navigation');
var topNavSub = document.getElementById('resources-sub');
//Function that is run with the Scroll event
function changeNav() {
  if (window.pageYOffset > 10) {
    topNav.classList.add("nav-colored");
    topNav.classList.remove("nav-transparent");
    topNavSub.classList.add("nav-colored");
    topNavSub.classList.remove("nav-transparent");
  } else {
    topNav.classList.add("nav-transparent");
    topNav.classList.remove("nav-colored");
    topNavSub.classList.add("nav-transparent");
    topNavSub.classList.remove("nav-colored");
  }
}
//add event to the window
window.addEventListener("scroll", changeNav);

//Make the hamburgher menu usable
var menuNav = document.getElementById("menu-nav");
function openNav(){
  let menu = menuNav.getElementsByTagName("ul");
  menu[0].style.display = "flex";
}
menuNav.addEventListener("click", openNav);