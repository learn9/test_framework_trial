/**
 * an extremely simple test using tape
 */
var test = require('tape');

test('test1', function (t) {
  t.equal(8, 3+5);
  
  t.end();
});