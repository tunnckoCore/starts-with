'use strict';

module.exports = function startsWithIndexOf(a, b) {
  a = String(a);
  b = String(b);
  return a.indexOf(b) === 0;
};
