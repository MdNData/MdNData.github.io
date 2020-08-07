//Testing onclick/addEventListener
let surprize = document.getElementById('surprize');
let surprizeIt = function () {
	surprize.classList.add("continuos-changing-color");
}
/* Whit onclick
surprize.onclick = surprizeIt;
*/

//with addEventListener
surprize.addEventListener('click', surprizeIt);



//Hide/Show the content map elements
let hiding = document.getElementById('hide-this');
function hideElement(e){
	if(e.target.tagName.toLowerCase() === 'span' && e.target.nextElementSibling.hidden === true){
		e.target.nextElementSibling.hidden=false;
	} else if (e.target.tagName.toLowerCase() === 'span' && e.target.nextElementSibling.hidden === false){
		e.target.nextElementSibling.hidden=true;
	}
}
hiding.addEventListener('click', hideElement);