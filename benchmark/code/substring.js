'use strict'

module.exports = function startsWithSubString(a, b) {
  a = String(a);
  b = String(b);
  return a.substring(0, b.length) === b;
};
