const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
let queue = [];

class Queue {

  getUnderlyingList() {
    queue.pop();
    let cloneQueue = [];
    cloneQueue = cloneQueue.concat(queue);
    let result = {};
    if (cloneQueue){
      result.value = cloneQueue[cloneQueue.length - 1];
      result.next = null;
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    if (cloneQueue.length > 0){
      result.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next.next = {
        value: cloneQueue[cloneQueue.length - 1],
        next: null
      }
      cloneQueue.pop();
    }
    return result;
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  enqueue(value) {
    queue.unshift(value);
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  dequeue() {
    return queue.pop()
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  Queue
};
