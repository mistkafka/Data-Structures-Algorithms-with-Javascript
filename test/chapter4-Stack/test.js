var assert = require('chai').assert;
var Stack = require('../../chapter4-Stack/stack');

describe('Stack', () => {
  var stack = null;
  beforeEach(() => {
    stack = new Stack();
  });
  
  describe('#empty', () => {
    it('empty() should return true when stack is empty', () => {
      assert.equal(true, stack.empty());
      stack.push('something');
      assert.equal(false, stack.empty());
    });
  });
  
  describe('#push() & #pop()', () => {
    it('when the stack empty, pop() do nothing!', () => {
      assert.equal(null, stack.pop());
    });
    it('push() should push the new element to the stack top, and pop() need remove the top element', () => {
      stack.push('a');
      stack.push('b');
      stack.push('c');
      assert.equal('c', stack.pop());
    });
  })
});
