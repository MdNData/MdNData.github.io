//Change top nav classes if the page is crolled
//Select the elements
var topNav = document.getElementById('navigation');
var topNavSub1 = document.getElementById('resources-sub1');
var topNavSub2 = document.getElementById('resources-sub2');
//Function that is run with the Scroll event
function changeNav() {
    if (window.pageYOffset > 10) {
      topNav.classList.add("nav-colored");
      topNav.classList.remove("nav-transparent");
      topNavSub1.classList.add("nav-colored");
      topNavSub1.classList.remove("nav-transparent");
      topNavSub2.classList.add("nav-colored");
      topNavSub2.classList.remove("nav-transparent");
    } else {
      topNav.classList.add("nav-transparent");
      topNav.classList.remove("nav-colored");
      topNavSub1.classList.add("nav-transparent");
      topNavSub1.classList.remove("nav-colored");
      topNavSub2.classList.add("nav-transparent");
      topNavSub2.classList.remove("nav-colored");
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
//Make headers index menu appear/disappear
var indexMenu = document.getElementById('open-index');
function hideElement(e){
  if(window.innerHeight > window.innerWidth){
    if((e.target.tagName.toLowerCase() === 'a' || e.target.nextElementSibling.tagName.toLowerCase() === "section") && e.target.nextElementSibling.style.display==="inline-flex"){
      e.target.nextElementSibling.style.display="none";
      if(e.target.nextElementSibling.tagName.toLowerCase() === "section"){
        e.target.classList.remove('fa-times');
        e.target.classList.add('fa-stream');
        e.target.style.fontSize = "8vw";
      }
    } else if (e.target.tagName.toLowerCase() === 'a' || e.target.nextElementSibling.tagName.toLowerCase() === "section"){
      e.target.nextElementSibling.style.display="inline-flex";
      if(e.target.nextElementSibling.tagName.toLowerCase() === "section"){
        e.target.classList.remove('fa-stream');
        e.target.classList.add('fa-times');
        e.target.style.fontSize = "15vw";
      } 
    }
  }
}
showing.addEventListener('click', hideElement);
indexMenu.addEventListener('click', hideElement);