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
var menuNav = document.getElementById("menu-nav").getElementsByTagName("ul");
var openMenuNav = document.getElementById("open-nav");
var closeMenuNav = document.getElementById("close-nav");
openMenuNav.addEventListener("click", function(){
  menuNav[0].style.display = "flex";
});
closeMenuNav.addEventListener("click", function(){
  menuNav[0].style.display = "none";
});


//Make sub lists of menu appear and disappear
let showing = document.getElementById('menu-nav');
function hideElement(e){
  if(e.target.tagName.toLowerCase() === 'a' && e.target.nextElementSibling.style.display==="inline-flex"){
    e.target.nextElementSibling.style.display="none";
  } else if (e.target.tagName.toLowerCase() === 'a'){
    e.target.nextElementSibling.style.display="inline-flex";
  }
}
showing.addEventListener('click', hideElement);

