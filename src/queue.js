const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if (maxSize !== undefined){
			this.maxSize = maxSize;
		}
		else{
			this.maxSize = 30;
		}
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if(data && priority){
			this.heap.push(data, priority);
		}
	}

	shift() {

	}

	size() {

	}

	isEmpty() {
		
	}
}

module.exports = PriorityQueue;
