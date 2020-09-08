/* Img Preloading  */
var imagePre1 = new Image();

/* Hero image changing  */
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
        description: 'Picioarele sustin toata greutatea corpului. Ele merita sa fie rasfatate cu o pedichiura reusita.',
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