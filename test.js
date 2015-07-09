/*!
 * starts-with <https://github.com/tunnckoCore/starts-with>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var startsWith = require('./index')

test('starts-with:', function () {
  test('should be true if the string starts with the given pattern', function (done) {
    test.equal(startsWith('a/b/c.txt', 'a/b'), true)
    test.equal(startsWith('a/b/c.txt', 'a/b/c.'), true)
    test.equal(startsWith('abc', 'a'), true)
    done()
  })
  test('should be false if the string does not end with the given pattern', function (done) {
    test.equal(startsWith('a/b/c.txt', 'b/c'), false)
    test.equal(startsWith('a/b/c.txt', '/b/c.tx'), false)
    done()
  })
  test('should be false if given `needle` is with greater length than `str`', function (done) {
    test.equal(startsWith('a/b/c.txt', 'a/b/c/d/e.txt'), false)
    test.equal(startsWith('a/b/c.txt', 'a/b/c/d/e'), false)
    done()
  })
  test('should be true if the array starts with the given string', function (done) {
    test.equal(startsWith(['a', 'b', 'c'], 'a'), true)
    test.equal(startsWith(['a/b/c/d.txt', 'b', 'c.txt'], 'a/b/c/d.txt'), true)
    done()
  })
  test('should be false if the array does not start with the given string', function (done) {
    test.equal(startsWith(['a.txt', 'b', 'c.txt'], 'a.'), false)
    test.equal(startsWith(['a/b/c.txt', 'b', 'c.txt'], 'a/b/c.tx'), false)
    test.equal(startsWith(['abc', 'abc', 'abc'], 'a'), false)
    done()
  })
  test('should be true if the array starts with the given number', function (done) {
    test.equal(startsWith([57, 'a', 'b', 'c'], 57), true)
    test.equal(startsWith(['57', 'a', 'b', 'c'], '57'), true)
    test.equal(startsWith([57, 'a', 'b'], '57'), false)
    test.equal(startsWith([20, 'a', 'b'], 40), false)
    done()
  })
  test('should be false if the array starts with the given object', function (done) {
    test.equal(startsWith([{'a': 'b'}, 'c', 'd'], {'a': 'b'}), false)
    test.equal(startsWith([{'a': 'b'}, 'c', 'd'], {}), false)
    test.equal(startsWith([{'a': 'b'}, 'c', 'd'], 'a'), false)
    done()
  })
  test('should be false if the array starts with the given array of strings', function (done) {
    test.equal(startsWith([['a', 'b', 'c'], 'd', 'e'], ['c', 'b', 'c']), false)
    test.equal(startsWith([['a', 'b', 'q'], 'w', 'e'], ['a', 'b', 'q']), false)
    test.equal(startsWith(['a', 'b', 'c'], ['a']), false)
    done()
  })
  test('should be false if the array starts with the given array of objects', function (done) {
    test.equal(startsWith([{'a': 'b'}, 'c', 'd'], [{'a': 'b'}]), false)
    test.equal(startsWith([[{'a': 'b'}, {'q': 'w'}], 'e', 'f'], [{'a': 'b'}, {'q': 'w'}]), false)
    test.equal(startsWith([[{'q': 'w'}, {'e': 'f'}], 'abc', 'abcdef'], [{'q': 'w'}]), false)
    done()
  })
})
