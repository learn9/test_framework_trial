/**
 * try to run sinon and tape to see that they are compatible.
 */
let sinon = require('sinon');
var test = require('tape');

/**
 * dosomething will return a random value
 */
function dosomething() {
  let rand = Math.random();
  return rand;
}

// in our test, we will want to control the value returned for testing purpose.
sinon.replace(Math, 'random', sinon.fake.returns(0.2));

test('test dosomething', function (t) {
  t.equal(dosomething(), 0.2);

  t.end();
});