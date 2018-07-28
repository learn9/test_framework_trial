'use strict'

/**
 * used for module_test.js
 */
module.exports = {
  sum: function(a, b) {
    return a+b;
  },
  multiply: function(a, b) {
    return a*b;
  }
};

/**
 * private function.  non-exported.
 */
function minus(a, b) {
  return a-b;
}

