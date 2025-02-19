let qarray = new Array();

async function quickSort() {
	for (var value = arraysize - 1; value >= 0; value--) {
		qarray[value] = sortarray[value];
	}
    await qSort(qarray, 0, arraysize - 1);

    document.getElementById('cck').textContent = "sorted";
    document.getElementById('ck').textContent = "";
    elements[sortarray.length-i-1].style.backgroundColor = 'lime';

}

async function qSort(qarr, l, r) {
    if (l < r) {
        let pivot = await partition(qarr, l, r);
        await qSort(qarr, l, pivot - 1);
        await qSort(qarr, pivot + 1, r);
    }
}

async function partition(qarr, l, r) {
	const elements = document.getElementsByClassName("element");

    let p = qarr[l];
    let i = l, j = r;

    document.getElementById('cck').textContent = `Current pivot ${p}`;
    document.getElementById('ck').textContent = `Left ${l}, right ${r}`;

    elements[l].style.backgroundColor = "red";

    while (i < j) {
        while (qarr[i] <= p)
        	i++;
        while (qarr[j] > p)
        	j--;


        if (i < j) {
            [qarr[i], qarr[j]] = [qarr[j], qarr[i]];

            elements[i].style.backgroundColor="yellow";
            elements[j].style.backgroundColor="yellow";

            await sleep(300);

            swapElements(elements[i],elements[j]);

            await sleep(300);
            elements[i].style.backgroundColor = "";
            elements[j].style.backgroundColor = "";
        }
    }

    [qarr[l], qarr[j]] = [qarr[j], qarr[l]];
    swapElements(elements[l], elements[j]);

    await sleep(500);
    elements[l].style.backgroundColor = "";
    elements[j].style.backgroundColor = "lime";

    return j;
}
