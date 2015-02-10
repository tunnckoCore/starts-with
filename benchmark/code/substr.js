'use strict';

module.exports = function subStr(a, b) {
  a = String(a);
  b = String(b);
  return a.substr(0, b.length) === b;
};
