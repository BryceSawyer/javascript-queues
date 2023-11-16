const Node = require('./Node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    addToTail(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let node = this.head;
            while (node.getNextNode() !== null) {
                node = node.getNextNode();
            }
            node.setNextNode(new Node(data));
        }
    }

    removeHead() {
        if (!this.head) return;
        const removedHead = this.head;
        this.head = removedHead.getNextNode();
        return removedHead.data;
    }

    printList() {
        let node = this.head;
        let output = '<head> ';
        while (node !== null) {
            output += node.data + ' ';
            node = node.getNextNode();
        }
        output = output.concat("<tail>");
        console.log(output);
    }
}

module.exports = LinkedList;