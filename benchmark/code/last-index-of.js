'use strict';

module.exports = function startsWithLastIndexOf(a, b) {
  a = String(a);
  b = String(b);
  var i = a.lastIndexOf(b)
  return i === 0;
};
