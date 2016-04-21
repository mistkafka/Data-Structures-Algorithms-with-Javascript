/**
 * stack
 * 
 * top          the stack top index
 * empty()      return true or false if the stack is empty
 * push()       push new element
 * pop()        pop the top element
 */

function Stack() {
 this.top = 0; 
 this.dataStore = [];
}

Stack.prototype.empty = function () {
 return this.top == 0;
};

Stack.prototype.push = function (element) {
 this.dataStore[this.top++] = element;
};

Stack.prototype.pop = function () {
 if (this.empty()) {
  return null;
 }
 return this.dataStore[--this.top];
};

module.exports = Stack;
