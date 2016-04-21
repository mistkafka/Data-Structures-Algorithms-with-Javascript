/**
 * judge the brackets is match or not
 */

var Stack  = require('./stack');

var bracketMap = {
  '(': ')',
  '[': ']',
  '{': '}',
  '<': '>'
};

function bracketMatch(brackets) {
  var stack = new Stack();
  brackets = brackets.replace(/\s/g, '');
  for (var ch of brackets) {
    if (isLeftBrackets(ch)) {
      stack.push(ch);
      continue;
    }
    
    // is right brackets
    if (stack.empty() || !match(stack.pop(), ch)) {
      return false;
    }
  }
  
  return stack.empty();
}

function isLeftBrackets(brachet) {
  return bracketMap[brachet] != null;
}
function match(left, right) {
  return bracketMap[left] === right;
}

module.exports = bracketMatch;

