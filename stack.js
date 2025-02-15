const MAX = 10;
document.getElementById('maxstsize').textContent = `Max stack size is ${MAX}`;
let stack = [];
var tos = -1;

function pushElement(){
	var pe = document.getElementById('pushnum').value;
	if (pe.trim() === "") {
		pe = Math.floor(Math.random()*200);
	}
	console.log("pushing "+pe);

	if (stack.length === MAX) {
		alert("stack full");	
	}
	else{
		tos++;
		stack.push(pe);
	}
	document.getElementById('pushnum').value="";
	displaystack();
}

function popElement(){
	let popel;
	if (stack.length === 0) {
		alert('stack empty');	
		return;
	}
	else{
		popel = stack[tos];
		tos--;
		stack.pop();
		console.log(`popped element ${popel}`);
	}
	displaystack();
	
}
function displaystack(){
	document.getElementById('tosval').textContent = "Top of stack: "+tos +": " +stack[tos];
	var stackcont = document.getElementById('stackcont');
	stackcont.innerHTML = '';
	stack.forEach((e)=>{
		stackcont.insertAdjacentHTML("afterbegin",`<p class="stackitem">${e}</p>`);
	});
}

//dom implementaion
// const MAX = 20;
// document.getElementById('maxstsize').textContent = `Max stack size is ${MAX}`;
// function pushElement(){

// 	var pe = document.getElementById('pushnum').value;
// 	console.log(pe);
// 	var stackcont = document.getElementById('stackcont');
// 	var paragraphs = stackcont.getElementsByTagName("p");
// 	console.log(paragraphs);
// 	if (paragraphs.length != MAX) {
// 		stackcont.insertAdjacentHTML("afterbegin",`<hr><p>${pe}</p>`);
// 	}
// 	else{
// 		alert("stack full");
// 	}
// }
// function popElement(){
// 	var stackcont = document.getElementById('stackcont');
// 	var paragraphs = stackcont.getElementsByTagName("p");
// 	var lines = stackcont.getElementsByTagName("hr");
// 	if (paragraphs.length != 0) {
// 		stackcont.removeChild(paragraphs[0]);
// 		stackcont.removeChild(lines[0]);
// 	}
// 	else{
// 		alert('stack empty');	
// 	}
// }