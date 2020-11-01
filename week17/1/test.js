var assert = require('assert')
var add = require('./add')

it('should return a + b', function(){
    assert.equal(add(1, 2), 3)
})