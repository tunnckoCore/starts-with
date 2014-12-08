/**
 * starts-with <https://github.com/tunnckoCore/starts-with>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var startsWith = require('./');

describe('startsWith', function() {
  it('should be true if the string starts with the given pattern.', function(done) {
    startsWith('a/b/c.txt', 'a/b').should.equal(true);
    startsWith('a/b/c.txt', 'a/b/c.').should.equal(true);
    startsWith('abc', 'a').should.equal(true);
    done();
  });

  it('should be false if the string does not end with the given pattern.', function(done) {
    startsWith('a/b/c.txt', 'b/c').should.equal(false);
    startsWith('a/b/c.txt', '/b/c.tx').should.equal(false);
    done();
  });

  it('should be true if the array starts with the given string.', function(done) {
    startsWith(['a', 'b', 'c'], 'a').should.equal(true);
    startsWith(['a/b/c/d.txt', 'b', 'c.txt'], 'a/b/c/d.txt').should.equal(true);
    done();
  });

  it('should be false if the array does not start with the given string.', function(done) {
    startsWith(['a.txt', 'b', 'c.txt'], 'a.').should.equal(false);
    startsWith(['a/b/c.txt', 'b', 'c.txt'], 'a/b/c.tx').should.equal(false);
    startsWith(['abc', 'abc', 'abc'], 'a').should.equal(false);
    done();
  });

  it('should be true if the array starts with the given number.', function(done) {
    startsWith([57, 'a', 'b', 'c'], 57).should.equal(true);
    startsWith(['57', 'a', 'b', 'c'], '57').should.equal(true);
    startsWith([57, 'a', 'b'], '57').should.equal(false);
    startsWith([20, 'a', 'b'], 40).should.equal(false);
    done();
  });

  it('should be false if the array starts with the given object.', function(done) {
    startsWith([{'a': 'b'}, 'c', 'd'], {'a': 'b'}).should.equal(false);
    startsWith([{'a': 'b'}, 'c', 'd'], {}).should.equal(false);
    startsWith([{'a': 'b'}, 'c', 'd'], 'a').should.equal(false);
    done();
  });

  it('should be false if the array starts with the given array of strings.', function(done) {
    startsWith([['a', 'b', 'c'], 'd', 'e'], ['c', 'b', 'c']).should.equal(false);
    startsWith([['a', 'b', 'q'], 'w', 'e'], ['a', 'b', 'q']).should.equal(false);
    startsWith(['a', 'b', 'c'], ['a']).should.equal(false);
    done();
  });

  it('should be false if the array starts with the given array of object(s).', function(done) {
    startsWith([{'a': 'b'}, 'c', 'd'], [{'a': 'b'}]).should.equal(false);
    startsWith([[{'a': 'b'}, {'q': 'w'}], 'e', 'f'], [{'a': 'b'}, {'q': 'w'}]).should.equal(false);
    startsWith([[{'q': 'w'}, {'e': 'f'}], 'abc', 'abcdef'], [{'q': 'w'}]).should.equal(false);
    done();
  });
});
