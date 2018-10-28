const assert = require('assert');
const make = require('./make.js');

function sum(a, b) {
  return a + b;
}

it('should calculate sum of 15, 34, 21, 666, 41', () => {
  assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
});

it('should calculate sum of 15, 1, 2, 3, 4', () => {
  assert.deepEqual(make(15)(1, 2, 3)(4)(sum), 25);
});

it('should calculate sum of 30, 5, 16, 14, 9', () => {
  assert.deepEqual(make(30)(5, 16, 14)(9)(sum), 74);
});