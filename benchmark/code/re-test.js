'use strict';

module.exports = function reTest(a, b) {
  a = String(a);
  b = String(b);
  var re = new RegExp('^' + b);
  return re.test(a);
};
