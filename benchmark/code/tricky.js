'use strict';

module.exports = function startsWithTricky(a, b) {
  a = String(a);
  b = String(b);
  if (a.charAt(0) !== b.charAt(0)) {
    return false;
  }
  return true;
};
