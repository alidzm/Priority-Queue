const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];

	}

	push(data, priority) {
		var pushingNode = new Node(data, priority);
		this.insertNode(pushingNode);
		this.shiftNodeUp(pushingNode);
	}

	pop() {
		if (this.root == null) return;
		else {
			var detachedRoot = this.detachRoot();
			this.restoreRootFromLastInsertedNode(detachedRoot);
			this.shiftNodeDown(this.root);
			return detachedRoot.data;
		}
	}

	detachRoot() {
		var detachedRoot = this.root;
		this.root = null;
		if (detachedRoot.left != null)
			this.root.left.parent = null;
		if (detachedRoot.right != null)
			this.root.right.parent = null;
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		
	}

	size() {
		
	}

	isEmpty() {
		if (this.root == null)
			return true;
		else return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
	}

	insertNode(node) {
		if (this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
		}
		else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
			if (this.parentNodes[0].right != null) {
				this.parentNodes.shift();
			}
		}
	}

	shiftNodeUp(node) {
		
	}

	shiftNodeDown(node) {
		
	}
}

module.exports = MaxHeap;
