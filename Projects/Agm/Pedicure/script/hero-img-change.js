//welcome carousel Preloading images
var imagePre1 = new Image();
imagePre1.src="./images/2.jpeg";
var imagePre2 = new Image();
imagePre2.src="./images/3.jpeg";
var imagePre3 = new Image();
imagePre3.src="./images/4.jpeg";
var imagePre4 = new Image();
imagePre4.src="./images/5.jpg";
var imagePre5 = new Image();
imagePre5.src="./images/25.jpg";
var imagePre6 = new Image();
imagePre6.src="./images/26.jpg";
var imagePre7 = new Image();
imagePre7.src="./images/27.jpg";


// Welcome carousel image changing 
const imgToChangeWelcome = document.getElementById('welcome-img');
const welcomeSection = document.getElementById('welcome-sec')

const displayWelcome = [
    {
        src: imagePre1.src
    },
    {
        src: imagePre2.src
    },
    {
        src: imagePre3.src
    },
    {
        src: imagePre4.src
    },
    {
        src: imagePre5.src
    },
    {
        src: imagePre6.src
    },
    {
        src: imagePre7.src
    }
];

let y = 0;

function changeWelcomeImg(e) {
    if ((e==undefined) || (e.target.tagName.toLowerCase()==='i' && e.target.id ==="next")) {
        if(y === displayWelcome.length-1){
            y=0;
        } else {
            y+=1;
        } 
        imgToChangeWelcome.src = displayWelcome[y].src;
    } else if((e.target.tagName.toLowerCase()==='i' && e.target.id ==="prev")) {
        if(y === 0){
            y=displayWelcome.length-1;
        } else {
            y-=1;
        } 
        imgToChangeWelcome.src = displayWelcome[y].src;
    }
}

setInterval(changeWelcomeImg, 4000);

welcomeSection.addEventListener('click', changeWelcomeImg);

