/**
 * test if we can successfully mock a private function in module
 * using sinon, tape, and rewire
 */

let rewire = require('rewire');
let test = require('tape');

let module2 = rewire('./module2');
module2.__set__("privateFunction1", function() {
  return "stubbed private function1";
});

let privateFunction2 = module2.__get__("privateFunction2");


test('test stub out a private function.  while using rewire', function (t) {
  t.equal(privateFunction2(), "private function 2, then call stubbed private function1");

  t.end();
});