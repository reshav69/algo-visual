class Node{
	constructor(data){
		this.data = data;
		this.left = null;
		this.right = null;
	}
	add(adata){

		if (adata < this.data) {
			if (this.left === null) {
				this.left = new Node(adata);
			}
			else{
				this.left.add(adata);
			}
		}	
		else{
			if (this.right === null) {
				this.right = new Node(adata);
			}
			else{
				this.right.add(adata);
			}
		}
	}

	remove(rdata){
		this.children = this.children.filter((node) => {
			return node.data !== rdata;
		});
	}

	render() {
		let html = `<li>`;
        html += `<a href="#">${this.data}</a>`;

        if (this.left || this.right) {
            html += `<ul>`;
            if (this.left) html += this.left.render();
            if (this.right) html += this.right.render();
            html += `</ul>`;
        }

        html += `</li>`;
        return html;
    }
}

class BST {
	constructor() {
		this.root = null;
	}

	insert(data) {
		if (this.root === null) {
			this.root = new Node(data);
		} else {
			this.root.add(data);
		}
	}

	renderTree() {
		if (this.root === null) return "<p>No tree yet</p>";
        return `<div class="tree-container">
        		<ul class="tree-ul">${this.root.render()}</ul>
        		</div>`;
		// if (this.root === null) return "<p>No tree yet</p>";
		// return `<div class="tree">${this.root.render()}</div>`;
	}
}
// Initialize BST and add some values
const bst = new BST();

// var randomTree = document.getElementById('randomTree');
var size = document.getElementById('arrSize');
let sortarray;

size.addEventListener("input", function() {
    var value = size.value;
    treesiz.textContent = value;
});

function randomTree(){
	console.log("Array size "+treesiz.textContent);
	sortarray = new Array(treesiz.textContent);

	for (var i = 0; i < treesiz.textContent; i++) {
		sortarray[i] = Math.floor(Math.random()*211);
	}
	sortarray.forEach(num => bst.insert(num));

	document.getElementById("container").innerHTML = bst.renderTree();
}

// var rootnode = new Node(5);
// let treecont = document.getElementById('treecont');
// function addNode(){
//
//
// 	rootnode.add(4);
// 	rootnode.add(6);
// 	rootnode.add(5);
//
// 	let newnode = document.createElement('div');
// 	newnode.className='node';
// 	newnode.textContent=rootnode.data;
//
// 	let childcontainer =parentNode.querySelector('.child-container');
// 	if (!childcontainer) {
// 		childcontainer = document.createElement('div');
// 		childcontainer.className = 'child-container';
// 		parentNode.appendChild(childcontainer);
// 	}
//
//
//
// }
//
// function remNode(){
// 	rootnode.remove(6);
// 	console.log(rootnode.children);
//
// }
//
// function renderTree() {
// }
