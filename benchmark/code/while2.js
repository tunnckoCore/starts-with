'use strict'

module.exports = function startsWith(str, needle) {
  if (Array.isArray(str)) {
    return str[0] === needle;
  }

  var len = needle.length, i = -1;
  while (++i < len) {
    if (str.charAt(i) !== needle.charAt(i)) {
      return false;
    }
  }
  return true;
};
