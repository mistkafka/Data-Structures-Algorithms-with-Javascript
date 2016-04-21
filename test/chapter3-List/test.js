var assert = require('chai').assert;
var List = require('./../../chapter3-List/list');

describe('List', () => {
  var list = null;
  beforeEach(() => {
    list = new List();
  });
  describe('#append()', () => {
    it('append() should return the list length after append a new item', () => {
      assert.equal(1, list.append({first_name: 'ZhenGuo', last_name: 'Lin'}));
    });
  });
  
  describe('#length()', () => {
    it('length() should return the length of list', () => {
      assert.equal(0, list.length());
      list.append({first_name: 'ZhenGuo', last_name: 'Lin'})
      list.append({first_name: 'ZhenGuo', last_name: 'Lin'})
      assert.equal(2, list.length());
    });
  });
  
  describe('#currPos()', () => {
    it('currPos() should return null when list is empty', () => {
      assert.equal(null, list.currPos());
    });
    it('currPos() should return(point to) the first item after first item add by append()', () => {
      list.append(7);
      assert.equal(7, list.currPos());
    });
    it('currPos() should return(point to) the first item after first item add by insert()', () => {
      list.insert(9);
      assert.equal(9, list.currPos());
    });
  });
  
  describe('#next()', () => {
    it('next() should do nothing when the list is empty', () => {
      assert.equal(null, list.next());
    });
    it('next() should let the pos point to the next item', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      assert.equal('b', list.next());
    });
    it('next() should point to the last item when pos was point to the last item', () => {
      list.append('a');
      list.append('b');
      list.next();
      list.next();
      assert.equal('b', list.next());
    });
  });
  
  describe('#prev()', () => {
    it('prev() should do nothing when the list is empty', () => {
      assert.equal(null, list.prev());
    });
    it('prev() should let the pos point to the prev item', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.next();
      assert.equal('a', list.prev());
    });
    it('prev() should let pos point to the first item when it was point to the first item', () => {
      list.append('a');
      list.append('b');
      list.prev();
      list.prev();
      assert.equal('a', list.prev());
    });
  });
  
  describe('#front()', () => {
    it('front() needn\'t do anything when list is empty', () => {
      assert.equal(null, list.front());
    });
    it('front() should make pos point to the first item and return it', () => {
      list.append(7);
      list.append(8);
      list.append(9);
      list.next();
      assert.equal(7, list.front());
      assert.equal(7, list.currPos());
    })
  });
  
  describe('#end()', () => {
    it('end() needn\'t do anything when list is empty', () => {
      assert.equal(null, list.end());
    });
    it('end() should make pos point to the last item and return it', () => {
      list.append(7);
      list.append(8);
      list.append(9);
      assert.equal(9, list.end());
      assert.equal(9, list.currPos());
    });
  });
  
  describe('#insert()', () => {
    it('inset() should insert the item after pos', () => {
      list.append(1);
      list.append(2);
      list.insert(7);
      assert.equal(3, list.length());
      assert.equal(7, list.next());
    })
  });
  
  describe('#remove()', () => {
    it('remove() need\'t do anything when list it empty', () => {
      assert.equal(null, list.remove());
    });
    it('remove() clear the list when there is only 1 item', () => {
      list.insert('7');
      list.remove();
      assert.equal(0, list.length());
    });
    it('remove() the pos should point to the new head element when the removed was the head element after remove', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.remove();
      assert.equal('b', list.currPos());
    });
    it('remove() the pos should point to the new tail element when the removed was the tail element after remove', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.end();
      list.remove();
      assert.equal('b', list.currPos());
      assert.equal('b', list.end());
    });
    it('remove() the pos should point to the removed\s prev element after removed', () => {
      list.append('a');
      list.append('b');
      list.append('c');
      list.next();
      list.remove();
      assert.equal('a', list.currPos());
    });
  })
});

