var myLib = require('../index');
var assert = require('assert');

it('myMethod() should return the right values', function () {
  assert.equal(myLib.myMethod(), "Yo, dude");
  assert.equal(myLib.myMethod("Hello", "World"), "Hello, World");
});

it('mySugarSyntax should return the right values', function () {
  assert.deepEqual(myLib.mySugarSyntax(), "love");
});

it('mySugarSyntax should return the right values', async function () {
  const result = await myLib.myPromise();
  assert.equal(result, "I have kept my promise!!");
});



