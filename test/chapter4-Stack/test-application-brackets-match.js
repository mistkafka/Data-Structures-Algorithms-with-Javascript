var assert = require('chai').assert;
var bracketMatcher = require('../../chapter4-Stack/application-brackets_match');

describe('bracketMatcher', () => {
  it('true: ()', () => {
    assert.equal(true, bracketMatcher('()'));
  });
  it('true: (   ) \\n', () => {
    assert.equal(true, bracketMatcher('(    )\n'));
  });
  it('false: ([)]', () => {
    assert.equal(false, bracketMatcher('([)]'))
  });
  it('false: ((()))))))))', () => {
    assert.equal(false, bracketMatcher('((()))))))))))'));
  });
  it('true: ()[]{}<>', () => {
    assert.equal(true, bracketMatcher('()[]{}<>'));
  });
  it('false: (((((((()))', () => {
    assert.equal(false, bracketMatcher('((((((((())'));
  });
  
});
