/**
 * starts-with <https://github.com/tunnckoCore/starts-with>
 *
 * Copyright (c) 2014-2015 Charlike Mike Reagent, contributors.
 * Released under the MIT license.
 */

'use strict';

var assert = require('assert');
var startsWith = require('./index');

// testing framework
var lab = exports.lab = require('lab').script();
var describe = lab.describe;
var it = lab.it;

describe('starts-with:', function() {
  it('should be true if the string starts with the given pattern.', function(done) {
    assert.strictEqual(startsWith('a/b/c.txt', 'a/b'), true);
    assert.strictEqual(startsWith('a/b/c.txt', 'a/b/c.'), true);
    assert.strictEqual(startsWith('abc', 'a'), true);
    done();
  });

  it('should be false if the string does not end with the given pattern.', function(done) {
    assert.strictEqual(startsWith('a/b/c.txt', 'b/c'), false);
    assert.strictEqual(startsWith('a/b/c.txt', '/b/c.tx'), false);
    done();
  });

  it('should be false if given `needle` is with greater length than `str`.', function(done) {
    assert.strictEqual(startsWith('a/b/c.txt', 'a/b/c/d/e.txt'), false);
    assert.strictEqual(startsWith('a/b/c.txt', 'a/b/c/d/e'), false);
    done();
  });

  it('should be true if the array starts with the given string.', function(done) {
    assert.strictEqual(startsWith(['a', 'b', 'c'], 'a'), true);
    assert.strictEqual(startsWith(['a/b/c/d.txt', 'b', 'c.txt'], 'a/b/c/d.txt'), true);
    done();
  });

  it('should be false if the array does not start with the given string.', function(done) {
    assert.strictEqual(startsWith(['a.txt', 'b', 'c.txt'], 'a.'), false);
    assert.strictEqual(startsWith(['a/b/c.txt', 'b', 'c.txt'], 'a/b/c.tx'), false);
    assert.strictEqual(startsWith(['abc', 'abc', 'abc'], 'a'), false);
    done();
  });

  it('should be true if the array starts with the given number.', function(done) {
    assert.strictEqual(startsWith([57, 'a', 'b', 'c'], 57), true);
    assert.strictEqual(startsWith(['57', 'a', 'b', 'c'], '57'), true);
    assert.strictEqual(startsWith([57, 'a', 'b'], '57'), false);
    assert.strictEqual(startsWith([20, 'a', 'b'], 40), false);
    done();
  });

  it('should be false if the array starts with the given object.', function(done) {
    assert.strictEqual(startsWith([{'a': 'b'}, 'c', 'd'], {'a': 'b'}), false);
    assert.strictEqual(startsWith([{'a': 'b'}, 'c', 'd'], {}), false);
    assert.strictEqual(startsWith([{'a': 'b'}, 'c', 'd'], 'a'), false);
    done();
  });

  it('should be false if the array starts with the given array of strings.', function(done) {
    assert.strictEqual(startsWith([['a', 'b', 'c'], 'd', 'e'], ['c', 'b', 'c']), false);
    assert.strictEqual(startsWith([['a', 'b', 'q'], 'w', 'e'], ['a', 'b', 'q']), false);
    assert.strictEqual(startsWith(['a', 'b', 'c'], ['a']), false);
    done();
  });

  it('should be false if the array starts with the given array of object(s).', function(done) {
    assert.strictEqual(startsWith([{'a': 'b'}, 'c', 'd'], [{'a': 'b'}]), false);
    assert.strictEqual(startsWith([[{'a': 'b'}, {'q': 'w'}], 'e', 'f'], [{'a': 'b'}, {'q': 'w'}]), false);
    assert.strictEqual(startsWith([[{'q': 'w'}, {'e': 'f'}], 'abc', 'abcdef'], [{'q': 'w'}]), false);
    done();
  });
});
