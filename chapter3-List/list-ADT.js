/**
 *  listSize      number of elements in list
 *  pos           current position in list
 *  length()      return the number of elements in list
 *  clear()       remove all elements from list
 *  toString()    return string representation of list
 *  getElement()  return element at current position
 *  insert()      insert new element after existing element
 *  append()      adds new element to the end of the list
 *  remove()      remove element from list
 *  front()       set position to the first element of the list
 *  end()         set position to the end element of the list
 *  prev()        move current position back one element
 *  next()        move current position forward one element
 *  currPos()     return the current position in list
 *  moveTo()      move the current position to specified element
 *  
 *  element = {
 *   this.prev 
 *   this.next
 *   this.element
 *  }
 */

// Construct Function
function List() {
  this.pos = null;
  this.head = null;
  this.tail = null;
  this.listSize = 0;
}

List.prototype.length = function() {
  return this.listSize;
};

List.prototype.clear = function() {
  this.pos = null;
  this.head = null;
  this.tail = null;
  this.listSize = 0;
};

List.prototype.toString = function() {
  var index = 0;
  var curr = this.head;
  while (curr) {
    console.log('Node ' + index +': ' + JSON.stringify(curr.element));
    index++;
    curr = curr.next;
  }
};

List.prototype.getElement =  function() {
  return this.pos.element;
};

List.prototype.insert = function(element) {
  // first element or pos is tail
  if (!this.head || this.pos == this.tail) {
    this.append(element);
    return;
  }
  var oldNext = this.pos.next;
  this.pos.next = this.newNode(this.pos, oldNext, element);
  oldNext.prev = this.pos.next;
  this.listSize++;
};

List.prototype.append = function(element) {
  this.listSize++;
  
  // first element
  if (!this.head) {
    this.head = this.newNode(null, null, element);
    this.tail = this.head;
    this.pos = this.head;
    return;
  }
  this.tail.next = this.newNode(this.tail, null, element);
  this.tail = this.tail.next;
};

List.prototype.remove = function() {
};

List.prototype.front = function() {
  this.pos = this.head;
};

List.prototype.end = function() {
  this.pos = this.tail;
};

List.prototype.prev = function() {
  this.pos = this.pos.prev || this.pos;
};

List.prototype.next = function() {
  this.pos = this.pos.next || this.pos;
};

List.prototype.currPos = function() {
  return this.pos;
};

List.prototype.moveTo = function() {
  // TODO: we need make sure the elements can '==' to find where we when to move.
};

List.prototype.newNode = function (prev, next, element) {
  return {
    prev: prev,
    next: next,
    element: element
  }
};

module.exports = List;

