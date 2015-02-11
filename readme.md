# starts-with [![NPM version][npmjs-shields]][npmjs-url] [![Build Status][travis-img]][travis-url] [![Dependency Status][depstat-img]][depstat-url] [![Coveralls][coveralls-shields]][coveralls-url]

> Returns `true` if the given string or array starts with prefix using strict equality for comparisons. Using fastest implementation from http://jsperf.com/starts-with-comparing-12-implementations


## Install [![Nodei.co stats][npmjs-install]][npmjs-url]
> Install with [npm](https://npmjs.org)

```
$ npm install starts-with
```


## Usage
```js
var startsWith = require('starts-with');

startsWith('abcdefghi', 'abcd');
//=> true

startsWith(['abc', 'def', 'ghi'], 'abc');
//=> true

startsWith(['abc', 'def', 'ghi'], ['abc']);
//=> false

startsWith(['cab', 'cdf', 'cef'], 'c');
//=> false

startsWith([57, 'a', 'b'], 57)
//=> true

startsWith([57, 'a', 'b', 'c'], '57')
//=> false

startsWith(['57', 'a', 'b', 'c'], '57')
//=> true
```


## Authors & Contributors
**Charlike Mike Reagent** [![author tips][author-gittip-img]][author-gittip]
+ [gittip/tunnckoCore][author-gittip]
+ [github/tunnckoCore][author-github]
+ [twitter/tunnckoCore][author-twitter]
+ [npmjs/tunnckoCore][author-npmjs]


## License [![MIT license][license-img]][license-url]
Copyright (c) 2014 [Charlike Mike Reagent][author-website], [contributors](https://github.com/tunnckoCore/starts-with/graphs/contributors).  
Released under the [`MIT`][license-url] license.


[npmjs-url]: http://npm.im/starts-with
[npmjs-shields]: http://img.shields.io/npm/v/starts-with.svg
[npmjs-install]: https://nodei.co/npm/starts-with.svg?mini=true

[coveralls-url]: https://coveralls.io/r/tunnckoCore/starts-with?branch=master
[coveralls-shields]: https://img.shields.io/coveralls/tunnckoCore/starts-with.svg

[license-url]: https://github.com/tunnckoCore/starts-with/blob/master/license.md
[license-img]: http://img.shields.io/badge/license-MIT-blue.svg

[travis-url]: https://travis-ci.org/tunnckoCore/starts-with
[travis-img]: https://travis-ci.org/tunnckoCore/starts-with.svg?branch=master

[depstat-url]: https://david-dm.org/tunnckoCore/starts-with
[depstat-img]: https://david-dm.org/tunnckoCore/starts-with.svg

[author-gittip-img]: http://img.shields.io/gittip/tunnckoCore.svg
[author-gittip]: https://www.gittip.com/tunnckoCore
[author-github]: https://github.com/tunnckoCore
[author-twitter]: https://twitter.com/tunnckoCore

[author-website]: http://www.whistle-bg.tk
[author-npmjs]: https://npmjs.org/~tunnckocore
