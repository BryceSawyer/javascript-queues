const Queue = require('./Queue');

describe('Queue', () => {
    let queue;

    beforeEach(() => {
        queue = new Queue();
    });

    test('should initialize an empty queue', () => {
        expect(queue.size).toBe(0);
        expect(queue.maxSize).toBe(Infinity);
        expect(queue.isEmpty()).toBe(true);
    });

    test('should enqueue and dequeue elements', () => {
        queue.enqueue(1);
        queue.enqueue(2);
        queue.enqueue(3);
        expect(queue.size).toBe(3);

        expect(queue.dequeue()).toBe(1);
        expect(queue.size).toBe(2);
        expect(queue.dequeue()).toBe(2);
        expect(queue.size).toBe(1);
        expect(queue.dequeue()).toBe(3);
        expect(queue.size).toBe(0);
        expect(queue.isEmpty()).toBe(true);
    });

    test('should throw an error when dequeueing from an empty queue', () => {
        expect(() => queue.dequeue()).toThrow('Queue is empty!');
    });

    test('should throw an error when enqueuing to a full queue', () => {
        const maxSize = 2;
        const fullQueue = new Queue(maxSize);

        fullQueue.enqueue('one');
        fullQueue.enqueue('two');

        expect(() => fullQueue.enqueue('three')).toThrow('Queue is full!');
    });

    test('should peek at the front element without removing it', () => {
        queue.enqueue('first');
        queue.enqueue('second');

        expect(queue.peek()).toBe('first');
        expect(queue.size).toBe(2);
    });
});
