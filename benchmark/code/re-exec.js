/* jshint asi:true */

'use strict'

module.exports = function startsWithReExec (a, b) {
  a = String(a)
  b = String(b)
  var re = new RegExp('^' + b)
  return !!re.exec(a)
}
