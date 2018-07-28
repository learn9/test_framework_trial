// 
// inside a function, it will call another function.
// we want to see if we can mock the called function succesfully.

// 
'use strict'

// this is the function we want to stub out.
function privateFunction1() {
  return "private function 1"
}

function privateFunction2() {
  return "private function 2, then call " + privateFunction1();
}

function exportedFunction() {
  return "exported function will call privateFunction1(), which returns: " + privateFunction1();
}

/**
 * simple module
 */
module.exports = {
  exportedFunction: exportedFunction,
};
