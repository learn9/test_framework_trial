/**
 * a simple test using sinon to stub out a Math.random() function.
 */
let sinon = require('sinon');



/**
 * dosomething will return a random value
 */
function dosomething() {
  let rand = Math.random();
  return rand;
}

// in our test, we will want to control the value returned for testing purpose.
sinon.replace(Math, 'random', sinon.fake.returns(0.2));
let result = dosomething();
console.log(result); // should be 0.2
console.log("should be 0.2");


