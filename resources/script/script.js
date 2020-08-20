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
        e.target.style.fontSize = "10vw";
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
indexMenu!==null ? indexMenu.addEventListener('click', hideElement):indexMenu=undefined;


//HANDLEBARS
//Selezioniamo l'elemento con l'id welcome-mess e prendiamo il contenuto di quell'elemento tramite innerHTML salvandolo poi in una variabile chiamata source
const source = document.getElementById("first-offer-mess").innerHTML;
//Richiamiamo l'handlebars compiler e gli passiamo la variabile apprena creata, questo compiler ritorna una funzione che salviamo dentro a una variabile chiamata template, questa funzione richiede come argomento un oggetto che dichiariamo appunto dopo con il come di context
const template = Handlebars.compile(source);
//Dentro all'oggetto dichiariamo e assegnamo tutte le variabili che vengono usate dentro all'html e a quali vogliamo assegnare dei valori, in questo caso vogliamo assegnare a tutti i posti dove si usa la variabile user il valore "Dragos"
const context = {
  firstOffer: "Simple Landing Page"
}
//poi richiamiamo la funzione di prima con l'oggetto appena creato salvando il risultato in una variabile che si chiama compiledHtml
const compiledHtml = template(context);
//Infine selezioniamo l'elemento che dovra contenere il nostro html creato con handlebars
const userName = document.getElementById("first-offer");
userName.innerHTML = compiledHtml;