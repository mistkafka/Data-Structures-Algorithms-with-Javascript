/**
 *  empty()       return the queue is empty or not
 *  push()        push new element to the queue
 *  pop()         return and remove the head element
 */
var LinkedList = require('../chapter3-List/list');

function Queue() {
  this.queue = new LinkedList();
}

Queue.prototype.empty = function () {
  return this.queue.length() === 0;
};

Queue.prototype.push = function (element) {
  this.queue.append(element);
};

Queue.prototype.pop = function () {
  return this.queue.remove(); 
};

Queue.prototype.clear = function () {
  this.queue.clear();
};

module.exports = Queue;
