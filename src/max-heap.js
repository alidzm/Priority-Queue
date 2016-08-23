const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
	}

	push(data, priority) {
		var pushedNode = new Node(data, priority);
		this.insertNode(pushedNode);
		this.shiftNodeUp(pushedNode);
		this.sizeOfHeap++;
	}

	pop() {

	}

	detachRoot() {
		this.root = null;
	}

	restoreRootFromLastInsertedNode(detached) {

	}

	size() {
		return this.sizeOfHeap;
	}

	isEmpty() {

	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root == null) {
			this.root = this.parentNodes = node;
			this.parentNodes.push(node);
		}
		else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (this.parentNodes[0].right != null)
				this.parentNodes.shift();
		}
	}

	shiftNodeUp(node) {
		if (node.parent != null && node.priority > node.parent.priority) {
			if (node.parent == this.root) {
				this.root = node;
			}
			var tempForParent = this.parentNodes.indexOf(node.parent);
			var tempForChild = this.parentNodes.indexOf(node);
			if (tempForParent == -1) {
				this.parentNodes[tempForChild] = node.parent;
			}
			else {
				this.parentNodes[tempForParent] = node;
				this.parentNodes[tempForChild] = node.parent;
			}
			node.swapWithParent();
			this.shiftNodeUp(node);
		}
	}

	shiftNodeDown(node) {
		if (node == null || (node.left == null && node.right == null))
			return;
		if (node.right == null || node.left.priority > node.right.priority) {
			if (node.left.priority > node.priority) {
				var nodeIndex = this.parentNodes.indexOf(node);
				var childIndex = this.parentNodes.indexOf(node.left);

				if (this.root == node) {
					this.root = node.left;
				}

				if (nodeIndex !== -1) {
					this.parentNodes[nodeIndex] = node.left;
				}
				if (childIndex !== -1) {
					this.parentNodes[childIndex] = node;
				}

				node.left.swapWithParent();
				this.shiftNodeDown(node);
			}

		} else if (node.left == null || node.left.priority < node.right.priority) {
			if (node.right.priority > node.priority) {
				var nodeIndex = this.parentNodes.indexOf(node);
				var childIndex = this.parentNodes.indexOf(node.right);

				if (nodeIndex !== - 1) {
					this.parentNodes[nodeIndex] = node.right;
				}
				if (childIndex !== -1) {
					this.parentNodes[childIndex] = node;
				}

				if (this.root == node) {
					this.root = node.right;
				}

				node.right.swapWithParent();
				this.shiftNodeDown(node);
			}
		}
	}
}

module.exports = MaxHeap;
