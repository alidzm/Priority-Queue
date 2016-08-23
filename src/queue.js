const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		var defaultSize = 30;
		if (maxSize)
			this.maxSize = maxSize;
		else this.maxSize = defaultSize;
		this.heap = new MaxHeap();
	}

	push(data, priority) {
		if (this.size() >= this.maxSize)
			throw new Error("Error: The queue has max size.");
		else this.heap.push(data, priority);
	}

	shift() {

	}

	size() {
		this.heap.size();
	}

	isEmpty() {
		if (this.heap.isEmpty())
			return true;
		else return false;
	}
}

module.exports = PriorityQueue;
