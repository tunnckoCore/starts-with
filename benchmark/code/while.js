/* jshint asi:true */

'use strict'

module.exports = function startsWithWhile (foo, bar) {
  foo = String(foo)
  bar = String(bar)

  var i = bar.length
  while (i--) {
    if (foo[i] !== bar[i]) {
      return false
    }
  }

  return true
}
