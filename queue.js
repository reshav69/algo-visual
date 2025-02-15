const MAX = 7;
let qcont = document.getElementById('qcont');
let front = -1;
let rear = -1;
let qarray = [];

function enqueue(){
	let toadd = document.getElementById("qqq").value;
	if (toadd.trim() === "") {
		toadd = Math.floor(Math.random()*200);
	}
	if (qarray.length === MAX) {
		alert('queue full!!');
		return;
	}
	else{
		console.log("enqueued: "+toadd);
		rear++;
		qarray.push(toadd);

	}
	displayq();
}
function dequeue(){
	if (front === -1 && front > rear) {
		alert('queue empty!!');
		return;
	}
	else{
		front++;
		let del = qarray[front];
		qarray.shift();
	}
	displayq();
}
function displayq(){
	console.log(`front ${front}, rear ${rear}`);
	console.log(qarray);
	// document.getElementById('tosval').textContent = "Top of stack: "+tos +": " +stack[tos];
	let qcont = document.getElementById('qcont');
	qcont.innerHTML = '';
	qarray.forEach((e)=>{
		qcont.insertAdjacentHTML("beforeend",`<p class="qitem">${e}</p>`);
	});
}