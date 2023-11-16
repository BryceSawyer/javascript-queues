// A queue is a linear collection of nodes that exclusively 
// Adds - (enqueues) nodes to the "tail".
// Removes - (dequeues) nodes from the "head" of the queue. 
// Peek - reveals data from the “head” of the queue without removing it.

// They can be implemented using different underlying data structures, 
// but one of the more common methods is to use a singly linked list.
const LinkedList = require('./LinkedList'); // <--- LinkedList Class constructor()

// Queues are a First In, First Out or FIFO structure.
// Operations are only allowed to affect the front or back of the queue, 
// any traversal or modification to other nodes within the linked list is disallowed.

// Constraint that may be placed on a queue is its length. 
// If a queue has a limit on the amount of data that can be placed into it, it is considered a bounded queue.
// attempting to enqueue data onto an already full queue will result in a queue overflow. 
// If you attempt to dequeue data from an empty queue, it will result in a queue underflow.
// .hasRoom() method
// .isEmpty() method
// prevents queue overflow and underflow by keeping track of the queue size

// Queue Class Constructor()
// Has a parameter maxSize that has a default value of Infinity
class Queue {
    constructor(maxSize = Infinity) {
        // New instance of a linked list to represent a queue.
        this.queue = new LinkedList();
        // Tracks the number of elements in the queue 
        this.size = 0;
        // Maximum size (capacity) constraint for the queue.
        this.maxSize = maxSize
    }
    // enqueue() method:
    // Adds to the end (tail) of the queue.
    enqueue(data) {
        if (!this.hasRoom()) throw new Error('Queue is full!')
        // Adds a new node to the queue
        this.queue.addToTail(data);
        // Increments the queue’s size by 1
        this.size++;
    }

    // dequeue() method:
    // Removes and returns the front node (head) of the queue.
    dequeue() {
        // If the queue is empty
        if (this.isEmpty()) throw new Error('Queue is empty!')
        // Removes the head node of the queue.
        const data = this.queue.removeHead();
        // Decrements the queue’s size by 1.
        this.size--;
        return data;
    }
    // .hasRoom() helper method:
    // avoid: overflow. 
    hasRoom() {
        // returns true if the current size of the queue is less than the maximum size
        return this.size < this.maxSize;
    }
    // isEmpty() helper method:
    // avoid: underflow
    isEmpty() {
        // Returns true if the queue has no elements
        return this.size === 0;
    }
    // peek() method:
    peek() {
        // Returns the data of the front node without removing it.
        return this.queue.head.data
    }
    // printQueue() method:
    printQueue() {
        // Returns a string representation of the queue.
        return this.queue.printList();
    }
}

module.exports = Queue;