class Node {
	constructor(data, priority) {
		this.date = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null && this.right == null) {
		    node.parent = this;
			this.left = node;
            this.right = null;
		}
		else if (this.left != null && this.right == null) {
		    node.parent = this;
			this.right = node;
		}
		else return;
	}

	removeChild(node) {
        if (node == this.left) {
            node.parent = null;
            this.left = null;
        }
        else if (node == this.right) {
            node.parent = null;
            this.right = null;
        }
        else throw new Error("Passed node isn't relate to this node")
	}

	remove() {
        if (node.parent == null)
            return;
        else this.parent.removeChild(this);
	}

	swapWithParent() {

	}
}

module.exports = Node;
