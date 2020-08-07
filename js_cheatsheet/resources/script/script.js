//Testing onclick
let surprize = document.getElementById('surprize');
function surprizeIt(){
	surprize.classList.add("continuos-changing-color");
}
surprize.onclick = surprizeIt;