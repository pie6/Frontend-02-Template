var assert = require('assert')

import { add } from './add'

it('should return a + b', function () {
    assert.equal(add(1, 2), 3)
})

//npx mocha --require @babel/register