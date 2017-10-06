class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.parentOfParent = null;
		this.right = null;
		this.left = null;
	}

	appendChild(node) {
		this.parent = this;
		 if(this.left === null){
			this.left = node;
			node.parent = this.parent;
			node.parentOfParent = this.parent.parent;
			}
		else if(this.right === null){
				this.right = node;
				node.parent = this.parent;
				node.parentOfParent = this.parent.parent;
			}
	}

	removeChild(node) {
		if(node === this.left){
			this.left.parent = null;
			this.left = null;
		}
		else if(node === this.right){
			this.right.parent = null;
			this.right = null;
		}
		else{
			throw new error("something goes wrong");
		}
	}

	remove() {
		if(this.parent !== null)
			this.parent.removeChild(this);
	}

	swapWithParent() {
		//console.log(this.parentOfParent.parentOfParent)
		//console.log(this.parent.left);
		//console.log(this.parent.right);
		var empty = this.parent;
		this.parent.parent = this;
		this.parent = this.parent.parentOfParent;

		

	}
}

module.exports = Node;
