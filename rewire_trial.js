/**
 * test a private function inside a module.  
 */

// using rewire: https://stackoverflow.com/questions/14874208/how-to-access-and-test-an-internal-non-exports-function-in-a-node-js-module/30794280

let rewire = require('rewire');
let test = require('tape');


// minus is a private function inside the module.  
// use rewire to get access to this function.
let simple_module = rewire('./simple_module.js');
let minus = simple_module.__get__('minus'); 

test('test a private function', function (t) {
  t.equal(minus(3, 5), 3-5);

  t.end();
});