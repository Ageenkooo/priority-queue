class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.next = null;
		this.right = null;
		this.left = null;
	}

	appendChild(node) {
		if(this.left === null){
			this.left = node;
		}
		else if(this.right === null){
			this.right = node;
		}
	}

	removeChild(node) {
		if(node === this.left){
			this.left = null;
		}
		else if(node === this.right){
			this.right = null;
		}
		else{
			throw new error("something goes wrong");
		}
	}

	remove() {
		if (this.parent !== null){
			//removeChild();
			//this.parent.removeChild(this.parent);
		}
	}

	swapWithParent() {
		
	}
}

module.exports = Node;
