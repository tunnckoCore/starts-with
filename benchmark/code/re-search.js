'use strict'

module.exports = function startsWithReSearch (a, b) {
  a = String(a)
  b = String(b)
  var re = new RegExp('^' + b)
  return a.search(re) !== -1
}
