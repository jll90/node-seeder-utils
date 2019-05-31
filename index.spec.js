const assert = require('assert');
const { Random, Range } = require('./index');

assert.ok(Range.build(0, 1).length === 2, 'Range.build(0,1) => [0,1]');
assert.ok(Range.build(0, 0).length === 1, 'Range.build(0, 0) => [0]');

assert.ok(typeof parseInt(Random.int(0, 10)) === 'number', 'Random.int() generates random int');
assert.ok(typeof parseInt(Random.number(0, 10)) === 'number', 'Random.number() generates random number');

assert.ok(Random.take([0, 1]) !== null, 'Can take random element from Array');
