document.getElementById('navbar').innerHTML=`
    <nav class="navbar">
    <ul>
        <li><a href="bubblesort.html">Bubble Sort</a></li>
        <li><a href="insertionsort.html">Insertion Sort</a></li>
        <li><a href="stack.html">Stack</a></li>
        <li><a href="queue.html">Queue</a></li>
        <li><a href="tree.html">Tree</a></li>
        <li><a href="quicksort.html">Quick Sort</a></li>
        <li><a href="seqsearch.html">Sequential Search</a></li>
    </ul>
    </nav>

`;
if(document.getElementById('arraycontrols') !== null){
    document.getElementById('arraycontrols').innerHTML=`
    Choose the array size:
            <input type="range" min="5" max="20" name="arrSize" id="arrSize">
            <span id="arrsiz">13</span>

            <button onclick="generateArray()">Generate</button>
            <br>
    `;

}