'use strict'

module.exports = function startsWithWhile(a, b) {
  a = String(a);
  b = String(b);

  var i = b.length;
  while (i--) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};
