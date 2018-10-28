const assert = require('assert');
const make = require('./make.js');

it('should calculate sum of 15, 34, 21, 666, 41', () => {
  assert.deepEqual(make(15)(34, 21, 666)(41)(sum), 777);
});

it('should calculate sumOfOther of array [2, 2, 2, 2]', () => {
  assert.deepEqual(make(15)(1, 2, 3)(4)(sum), 25);
});

it('should calculate sumOfOther 0f array [1, 9, 5, 2]', () => {
  assert.deepEqual(make(30)(5, 16, 14)(9)(sum), 74);
});