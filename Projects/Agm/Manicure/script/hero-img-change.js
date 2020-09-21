//welcome carousel Preloading images
var imagePre1 = new Image();
imagePre1.src="./images/1-min-min.jpg";
var imagePre2 = new Image();
imagePre2.src="./images/2-min-min.jpg";
var imagePre3 = new Image();
imagePre3.src="./images/3-min-min.jpg";
var imagePre4 = new Image();
imagePre4.src="./images/4-min-min.jpg";
var imagePre5 = new Image();
imagePre5.src="./images/12-min-min.jpg";
var imagePre6 = new Image();
imagePre6.src="./images/13-min-min.jpg";
var imagePre7 = new Image();
imagePre7.src="./images/14-min-min.jpg";
var imagePre8 = new Image();
imagePre8.src="./images/15-min-min.jpg";
var imagePre9 = new Image();
imagePre9.src="./images/16-min-min.jpg";
var imagePre10 = new Image();
imagePre10.src="./images/17-min-min.jpg";
var imagePre11 = new Image();
imagePre11.src="./images/18-min-min.jpg";
var imagePre12 = new Image();
imagePre12.src="./images/u1-min-min.jpeg";
var imagePre13 = new Image();
imagePre13.src="./images/u2-min-min.jpeg";
var imagePre14 = new Image();
imagePre14.src="./images/u3-min-min.jpeg";
var imagePre15 = new Image();
imagePre15.src="./images/1.jpeg";
var imagePre16 = new Image();
imagePre16.src="./images/2.jpeg";


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
    },
    {
        src: imagePre8.src
    },
    {
        src: imagePre9.src
    },
    {
        src: imagePre10.src
    },
    {
        src: imagePre11.src
    },
    {
        src: imagePre12.src
    },
    {
        src: imagePre13.src
    },
    {
        src: imagePre14.src
    },
    {
        src: imagePre15.src
    },
    {
        src: imagePre16.src
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

