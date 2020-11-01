var assert = require('assert');

import { parseHTML } from './src/21-parser'

describe("parse html:", function() {
    it('<a></a>', function() {
        let tree = parseHTML('<a></a>')
        assert.equal(tree.children[0].tagName, "a")
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href="//foo.bar.com"></a>', function() {
        let tree = parseHTML('<a href="//foo.bar.com"></a>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href ></a>', function() {
        let tree = parseHTML('<a href ></a>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href id></a>', function() {
        let tree = parseHTML('<a href id></a>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href="#" id></a>', function() {
        let tree = parseHTML('<a href="#" id></a>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a href=abc id></a>', function() {
        let tree = parseHTML('<a href=abc id></a>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a id=abc/>', function() {
        let tree = parseHTML('<a id=abc/>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a id=\'abc\'/>', function() {
        let tree = parseHTML('<a id=\'abc\'/>')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<a />', function() {
        let tree = parseHTML('<a />')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<A /> uppercase', function() {
        let tree = parseHTML('<A /> uppercase')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].children.length, 0)
    })

    it('<> uppercase', function() {
        let tree = parseHTML('<> uppercase')
        assert.equal(tree.children.length, 1)
        assert.equal(tree.children[0].type, "text")
    })
})