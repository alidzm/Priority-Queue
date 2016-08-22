const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		if (maxSize != 0)
			this.maxSize = maxSize;
        else this.maxSize = 30;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
	    if (this.size() >= this.maxSize)
	    	throw new Error("Error");
		else
        	this.heap.push(data, priority);
	}

	shift() {
		if (this.isEmpty())
			throw new Error("Error: the queue is empty.");
		else
			return this.heap.pop();
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		if(this.heap.isEmpty())
			return true;
		else return false;
	}
}

module.exports = PriorityQueue;
