// Img Hero Section Preloading 
var imagePre1 = new Image();
imagePre1.src="./images/21.jpg";
var imagePre2 = new Image();
imagePre2.src="./images/manichiura.jpg";
var imagePre3 = new Image();
imagePre3.src="./images/pedichiura.jpg";

//Img Welcome Section Preloading 
var imagePre4 = new Image();
imagePre4.src="./images/presentation-11.jpg";
var imagePre5 = new Image();
imagePre5.src="./images/presentation-22.jpg";
var imagePre6 = new Image();
imagePre6.src="./images/presentation-33.jpg";
var imagePre7 = new Image();
imagePre7.src="./images/presentation-44.jpg";

// Hero image changing
const heroToChange = document.getElementById('hero');
const imgToChange = heroToChange.querySelector('img');
const titleToChange = heroToChange.querySelector('div').querySelector('h1');
const descriptionToChange = heroToChange.querySelector('div').querySelector('p');
const buttonToChange = heroToChange.querySelector('div').querySelector('a');
const display = [
    {
        img: './images/21.jpg',
        title: 'Epilare Definitiva Laser Fara Durere',
        description: 'Cel mai eficient tratament, distruge definitiv firele de par de la suprafata, cat si cele aflate in piele.',
        button: 'Programeaza-te!'
    },
    {
        img: './images/manichiura.jpg',
        title: 'Manichiura',
        description: 'Manichiura impecabila, lipsita de probleme estetice ale unghiilor reprezintă cartea ta de vizita si primul detaliu pe care cei din jur il observa.',
        button: 'Programeaza-te!'
    },
    {
        img: './images/pedichiura.jpg',
        title: 'Pedichiura',
        description: 'Picioarele sustin toata greutatea corpului. <br /> Ele merita sa fie rasfatate cu o pedichiura reusita.',
        button: 'Programeaza-te!'
    }
];

let x=0;
function nextImage() {
    if(x === (display.length-1)) {
        x=0;
    } else {
        x+=1;
    }
    imgToChange.src = display[x].img;
    titleToChange.innerHTML = display[x].title;
    descriptionToChange.innerHTML = display[x].description;
    buttonToChange.innerHTML = display[x].button;
}

setInterval(nextImage, 5000);

// Welcome image changing 
const imgToChangeWelcome = document.getElementById('welcome-img');
const welcomeSection = document.getElementById('welcome-sec')

const displayWelcome = [
    {
        src:"./images/presentation-11.jpg"
    },
    {
        src:"./images/presentation-22.jpg"
    },
    {
        src:"./images/presentation-33.jpg"
    },
    {
        src:"./images/presentation-44.jpg"
    }
];

let y = 0;

function changeWelcomeImg(e) {
    if(e.target.tagName.toLowerCase()==='span' || e.target.tagName.toLowerCase()==='i' || e.target.id ==="prev") {
        if(y === 0){
            y=displayWelcome.length-1;
        } else {
            y-=1;
        } 
        imgToChangeWelcome.src = displayWelcome[y].src;
    } else if (e.target.tagName.toLowerCase()==='span' || e.target.tagName.toLowerCase()==='i' || e.target.id ==="next") {
        if(y === displayWelcome.length-1){
            y=0;
        } else {
            y+=1;
        } 
        imgToChangeWelcome.src = displayWelcome[y].src;
    }
}

welcomeSection.addEventListener('click', changeWelcomeImg);


