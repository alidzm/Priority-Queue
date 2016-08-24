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
	}

	pop() {
		if (this.root == null)
			return;
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
		this.sizeOfHeap--;
		if (this.parentNodes.indexOf(detachedRoot) != -1)
			this.parentNodes.shift();
		return detachedRoot;
	}

	restoreRootFromLastInsertedNode(detached) {
		if ((detached instanceof Node) == false) {
			return;
		}
		var lastNode = this.parentNodes.pop();
		if (lastNode != undefined) {
			this.root = lastNode;
			if (lastNode.parent != null) {
				var parentOfNode = lastNode.parent;
				lastNode.remove();
				if (parentOfNode.right == null && parentOfNode.left != null && parentOfNode != detached) {
					this.parentNodes.unshift(parentOfNode);
				}
			}
			if (detached.left != null) {
				lastNode.appendChild(detached.left);
			}
			if (detached.right != null) {
				lastNode.appendChild(detached.right);
				return;
			}
			this.parentNodes.unshift(lastNode);
		}
	}

	size() {
		return this.sizeOfHeap;
	}

	isEmpty() {
		if (this.root == null)
			return true;
		else return false;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.sizeOfHeap = 0;
	}

	insertNode(node) {
		this.sizeOfHeap++;
		if (this.root == null) {
			this.root = node;
			this.parentNodes.push(node);
			return;
		}
		if (this.parentNodes[0].left == null) {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
		}
		else {
			this.parentNodes[0].appendChild(node);
			this.parentNodes.push(node);
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
				var tempForParent = this.parentNodes.indexOf(node);
				var tempForChild = this.parentNodes.indexOf(node.left);
				if (this.root == node) {
					this.root = node.left;
				}
				if (tempForParent != -1) {
					this.parentNodes[tempForParent] = node.left;
				}
				if (tempForChild != -1) {
					this.parentNodes[tempForChild] = node;
				}
				node.left.swapWithParent();
				this.shiftNodeDown(node);
			}
		} else if (node.left == null || node.left.priority < node.right.priority) {
			if (node.right.priority > node.priority) {
				var tempForParent = this.parentNodes.indexOf(node);
				var tempForChild = this.parentNodes.indexOf(node.right);

				if (tempForParent != - 1) {
					this.parentNodes[tempForParent] = node.right;
				}
				if (tempForChild != -1) {
					this.parentNodes[tempForChild] = node;
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
