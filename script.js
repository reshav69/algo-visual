
var size = document.getElementById('arrSize');
var dispSize = document.getElementById('arrsiz');
let arrcont = document.getElementById("arrcont");
if (arrcont.innerHTML === "") {
	arrcont.innerHTML="<p>No Array, Generate one</p>";
}
let sortarray;

size.addEventListener("input", function() {
    var value = size.value;
    dispSize.textContent = value;
});

function generateArray(){
	console.log("Array size "+dispSize.textContent);
	sortarray = new Array(dispSize.textContent);

	for (var i = 0; i < dispSize.textContent; i++) {
		sortarray[i] = Math.floor(Math.random()*211);
	}
	renderArray();
}

function renderArray(){
	console.log(sortarray);
	arrcont.innerHTML = '';
	sortarray.forEach((e)=>{
		arrcont.insertAdjacentHTML("beforeend",
			`<div class="element" style="height:${e+10}px">${e}</div>`
		);

	});
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function swapElements(el1,el2){
	const parent = el1.parentNode;
    const temp = document.createElement("div"); 
    
    parent.insertBefore(temp, el1); 
    parent.insertBefore(el1, el2);  
    parent.insertBefore(el2, temp);
    parent.removeChild(temp);
}

