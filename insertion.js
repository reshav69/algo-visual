async function insertionSort(){
	const elements = document.getElementsByClassName("element");
	for (var i = 0; i < sortarray.length; i++) {
		let tmp = sortarray[i];
		
		let j = i-1;
		document.getElementById('ck').textContent=`Current Key = ${tmp}`;

		elements[i].classList.add("blue");
		await sleep(300);

		while(j>=0 && sortarray[j]>tmp){
			elements[j].style.backgroundColor="yellow";
			elements[j+1].style.backgroundColor="yellow";
			await sleep(200);

			sortarray[j+1] = sortarray[j];

			swapElements(elements[j+1], elements[j]);
			await sleep(100);


			// elements[j + 1].textContent = elements[j].textContent;
			// elements[j].textContent = tmp;

            elements[j].style.backgroundColor="";
			elements[j+1].style.backgroundColor="";
			await sleep(200);

			j--;
		}
		sortarray[j+1] =tmp;
		// elements[j + 1].textContent = tmp;

		elements[j+1].style.backgroundColor="lime";
		// await sleep(200);

		for (let k = 0; k <= i; k++) {
        	elements[k].classList.remove("blue");
            elements[k].style.backgroundColor = "lime";
        }
	}
}