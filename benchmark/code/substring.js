'use strict'

module.exports = function subString(a, b) {
  a = String(a);
  b = String(b);
  return a.substring(0, b.length) === b;
};
