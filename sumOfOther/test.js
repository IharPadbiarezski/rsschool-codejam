const assert = require('assert');
const sumOfOther = require('./sumOfOther.js');

it('should calculate sumOfOther of array [4, 3, 0, 5]', () => {
  assert.deepEqual(sumOfOther([4, 3, 0, 5]), [8, 9, 12, 7]);
});

it('should calculate sumOfOther of array [2, 2, 2, 2]', () => {
  assert.deepEqual(sumOfOther([2, 2, 2, 2]), [6, 6, 6, 6]);
});

it('should calculate sumOfOther 0f array [1, 9, 5, 2]', () => {
  assert.deepEqual(sumOfOther([1, 9, 5, 2]), [16, 8, 12, 15]);
});