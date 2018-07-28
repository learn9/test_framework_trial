/** using tape to test a node module */
var test = require('tape');
var simple_module = require('./simple_module');

test('test module', function (t) {
  t.equal(simple_module.sum(3, 5), 3+5);

  t.end();
});