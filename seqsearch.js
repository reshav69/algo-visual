async function sqsearch(){
	var flag = 0;
	const elements = document.getElementsByClassName("element");
	const inpelm = document.getElementById('inputnum').value;

	for (var i = 0; i <= sortarray.length - 1; i++) {
		elements[i].style.backgroundColor = "red";
		document.getElementById('ck').textContent = `Comparing ${inpelm} with ${sortarray[i]}`
		await sleep(500);

		if (inpelm == sortarray[i]) {
			elements[i].style.backgroundColor = "lime";

			document.getElementById('ck').textContent = `found at index ${i}`
			console.log(`${inpelm} at ${i+1}`);
			flag =1;
			break;
		}
		elements[i].style.backgroundColor="";
	}
	if (flag === 0) {
		console.log("element not found");
	}
}
