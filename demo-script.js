// Run: node demo-script.js and follow the prompt 

const Queue = require('./Queue');
const readline = require('readline-sync');

class QueueDemo {
  constructor(maxSize) {
    this.queue = new Queue(maxSize);
  }

  load(elements) {
    elements.forEach(element => {
      try {
        this.queue.enqueue(element);
        console.log(`${element} queued`);
      } catch (e) {
        console.log(`Failed to enqueue ${element}: ${e.message}`);
      }
    });
  }

  clear() {
    while (!this.queue.isEmpty()) {
      const cleared = this.queue.dequeue();
      console.log(`${cleared} is cleared`);
    }

    console.log('\nAll elements cleared.');
  }

  peek() {
    const front = this.queue.peek();
    console.log(`Front element: ${front}`);
  }

  print() {
     this.queue.printQueue();

  }

  run() {
    const elements = readline
      .question('Enter elements to enqueue (comma-separated): ')
      .split(',')
      .map(e => e.trim());

    this.load(elements);
    this.peek();
    this.print();
    this.clear();
  }
}

// Example usage
const maxSize = 3;
const demo = new QueueDemo(maxSize);
demo.run();