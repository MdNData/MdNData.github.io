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
//We select the element with id "hide-this", that is the parent of the elements that we need to change
let hiding = document.getElementById('hide-this');
var indexMenuHide = document.getElementById('open-index');
// We create the function that is used to change the html elements, we pass "e" to this function because it is the only way to know which element is clicked inside the parent to which we assign it, once passed "e" every time an element inside this parent or even the parent is clicked, "e" will take the value of that element and through e.target we can select and modify it.
//e.target.tagName returns the exact tag name to us,
//e.target.nextElementSibling instead selects the next element to the one clicked
function hideElement(e){
	if(e.target.tagName.toLowerCase() === 'span' && e.target.nextElementSibling.hidden === true){
		e.target.nextElementSibling.hidden=false;
	} else if (e.target.tagName.toLowerCase() === 'span' && e.target.nextElementSibling.hidden === false){
		e.target.nextElementSibling.hidden=true;
	} else if (e.target.parentElement.parentElement.hidden===false && window.innerWidth < window.innerHeight){
        indexMenuHide.nextElementSibling.style.display = "none";
        indexMenuHide.classList.remove('fa-times');
        indexMenuHide.classList.add('fa-stream');
        indexMenuHide.style.fontSize = "8vw";
    }
}
hiding.addEventListener('click', hideElement);