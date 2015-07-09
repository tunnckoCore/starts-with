/* jshint asi:true */

'use strict'

module.exports = function startsWith (foo, needle) {
  if (Array.isArray(foo)) {
    return foo[0] === needle
  }

  var i = -1
  var len = needle.length

  while (++i < len) {
    if (foo.charAt(i) !== needle.charAt(i)) {
      return false
    }
  }
  return true
}
