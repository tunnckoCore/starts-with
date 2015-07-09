'use strict'

module.exports = function startsWith (str, needle) {
  if (Array.isArray(str)) {
    return str[0] === needle
  }

  var i = needle.length
  if (str.length < i) {
    return false
  }

  while (i--) {
    if (str.charAt(i) !== needle.charAt(i)) {
      return false
    }
  }

  return true
}
