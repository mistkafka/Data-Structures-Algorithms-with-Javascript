var assert = require('chai').assert;
var Queue = require('../../chapter5-Queue/queue');

describe('Queue', () => {
  var queue = null; 
  beforeEach(() => {
    queue = new Queue();
  });
  describe('#empty()', () => {
    it('empty() should return true when there is no element', () => {
      assert.equal(true, queue.empty());
    });
    it('empty() should return false when there is/are element(s)', () => {
      queue.push('a');
      queue.push('b');
      queue.push('c');
      assert.equal(false, queue.empty());
    });
  });
  describe('#pop()', () => {
    it('pop() FIFO', () => {
      queue.push('a');
      queue.push('b');
      queue.push('c');
      assert.equal('a', queue.pop());
      assert.equal('b', queue.pop());
      assert.equal('c', queue.pop());
    });
  });
});
