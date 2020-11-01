var assert = require('assert')

import { add, mul } from './add';

it('should return a + b', function () {
    assert.equal(add(1, 2), 3)
})


it('should return a * b', function () {
    assert.equal(mul(2, 3), 6)
})