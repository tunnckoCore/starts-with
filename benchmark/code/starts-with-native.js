'use strict';

module.exports = function startsWithNative(a, b) {
  a = String(a);
  b = String(b);
  return a.startsWith(b);
};
