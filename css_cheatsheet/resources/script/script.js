let hiding = document.getElementById('hide-this');
function hideElement(e){
	if(e.target.tagName.toLowerCase() === 'span' && e.target.nextElementSibling.hidden === true){
		e.target.nextElementSibling.hidden=false;
	} else if (e.target.tagName.toLowerCase() === 'span' && e.target.nextElementSibling.hidden === false){
		e.target.nextElementSibling.hidden=true;
	}
}
hiding.addEventListener('click', hideElement);