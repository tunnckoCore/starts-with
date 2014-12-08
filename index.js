/**
 * starts-with <https://github.com/tunnckoCore/starts-with>
 *
 * Copyright (c) 2014 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

/**
 * String or array starts with the given prefix
 *
 * @param {String|Array} `str`
 * @param {String} `needle`
 * @return {Boolean}
 */
module.exports = function startsWith(str, needle) {
  if (Array.isArray(str)) {
    return str[0] === needle;
  }

  var i = needle.length;
  if (str.length < i) {
    return false;
  }

  while (i--) {
    if (str[i] !== needle[i]) {
      return false;
    }
  }

  return true;
};