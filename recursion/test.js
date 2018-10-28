const assert = require('assert');
const recursion = require('./recursion.js');

it('should return array of the tree data structure', () => {
  assert.deepEqual(recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":130}}}), [[100], [90, 120], [70,99,110,130]]);
});

it('should return array of the tree data structure', () => {
  assert.deepEqual(recursion({"value":100,"left":{"value":90,"left":{"value":70},"right":{"value":98}},"right":{"value":120,"left":{"value":110}}}), [[100], [90, 120], [70,98,110]]);
});

it('should return array of the tree data structure', () => {
  assert.deepEqual(recursion({"value":100,"left":{"value":80,"left":{"value":65},"right":{"value":99}},"right":{"value":120,"left":{"value":110},"right":{"value":150}}}), [[100], [80, 120], [65,99,110,150]]);
});