class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null && this.right == null) {
			this.left = node;
			node.parent = this;
		} else if (this.left != null && this.right == null) {
			this.right = node;
			node.parent = this;
		} else if (this.left != null && this.right != null) {
			return;
		}
	}

	removeChild(node) {
		if (node == this.left) {
			this.left = null;
			node.parent = null;
		} else if (node == this.right) {
			this.right = null;
			node.parent = null;
		} else {
			throw new Error("Error: passed node is not a child of this node.");
		}
	}

	remove() {
		if (this.parent != null)
			this.parent.removeChild(this);
	}

	swapWithParent() {
		if (this.parent != null) {
			if (this.parent.parent != null) {
				if (this.parent.parent.left == this.parent) {
					this.parent.parent.left = this
				} else {
					this.parent.parent.right = this
				}
			}
			if (this.left != null) { this.left.parent = this.parent }
			if (this.right != null) { this.right.parent = this.parent }
			if (this == this.parent.left) {
				if (this.parent.right != null) {
					this.parent.right.parent = this;
				}
				var tempVariable = this.right;
				this.right = this.parent.right;
				this.parent.right = tempVariable;
				this.parent.left = this.left;
				this.left = this.parent;
			} else {
				if (this.parent.left != null) {
					this.parent.left.parent = this;
				}
				var tempVariable = this.left;
				this.left = this.parent.left;
				this.parent.left = tempVariable;
				this.parent.right = this.right;
				this.right = this.parent;
			}
			var tempVariable = this.parent.parent;
			this.parent.parent = this;
			this.parent = tempVariable;
		}
	}
}

module.exports = Node;
