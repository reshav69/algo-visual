async function bubblesort(){

	const elements = document.getElementsByClassName("element");

	for (var i = 0; i < sortarray.length; i++) {
		for (var j = 0; j < sortarray.length-i-1; j++) {
			elements[j].style.backgroundColor="red";
			elements[j+1].style.backgroundColor="red";

			await sleep(300);
			
			if (sortarray[j] > sortarray[j+1]) {
				//sort
				let tmp = sortarray[j];
				sortarray[j] = sortarray[j+1];
				sortarray[j+1] = tmp;

				//change text of the elements

				swapElements(elements[j],elements[j+1]);
				// let tempText = elements[j].textContent;
                // elements[j].textContent = elements[j + 1].textContent;
                // elements[j + 1].textContent = tempText;

                //change swapped element colors
                elements[j+1].style.backgroundColor="yellow";
            	elements[j].style.backgroundColor="yellow";

            	await sleep(300);

			}	
			//back to normal
			elements[j+1].style.backgroundColor="";
            elements[j].style.backgroundColor="";

			await sleep(300);
			
		}
		//sorted
		elements[sortarray.length-i-1].style.backgroundColor = 'lime';
	}

}


