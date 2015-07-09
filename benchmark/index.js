'use strict'

var Suite = require('benchmarked')
var suite = new Suite({
  fixtures: 'fixtures/*.js',
  add: 'code/{1-0-0,while2}.js',
  cwd: __dirname
})

suite.run()
