'use strict';

module.exports = function startsWithSlice(a, b) {
  a = String(a);
  b = String(b);
  return a.slice(0, b.length) === b;
};
