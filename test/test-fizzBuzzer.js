var assert = require('chai').assert;
var fizzBuzzer = require('../fizzBuzzer');

describe('FizzBuzz', function () {
  it('should return fizz', function () {
    var result = fizzBuzzer(9);
    assert.equal(result, 'fizz');
  });
});

describe('FizzBuzz', function () {
  it('should return buzz', function () {
    var result = fizzBuzzer(25);
    assert.equal(result, 'buzz');
  });
});

describe('FizzBuzz', function () {
  it('should return fizz-buzz', function () {
    var result = fizzBuzzer(30);
    assert.equal(result, 'fizz-buzz');
  });
});

describe('FizzBuzz', function () {
  it('Error', function () {
    var result = fizzBuzzer(2);
    assert.equal(result, 'fizz');
  });
});
