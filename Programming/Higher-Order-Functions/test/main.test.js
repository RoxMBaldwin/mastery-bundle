var chai = require('chai')
var assert = chai.assert
var main = require('../src/main')
var any = main.any
var higherOrderMath = main.higherOrderMath

describe('any', function () {
  it('returns true if any item matches the callback statement', function () {
    var array = [-20,10,0,-10,20]
    var callback = function (num) { return num < 0 }
    var result = any(array, callback)

    assert.isTrue(result)
  })

  it('returns false if no item matches the callback statement', function () {
    var array = [10,0,20]
    var callback = function (num) { return num < 0 }
    var result = any(array, callback)

    assert.isFalse(result)
  })

  it('still works if it is an empty array', function () {
    var array = []
    var callback = function (num) { return num < 0 }
    var result = any(array, callback)

    assert.isFalse(result)
  })
})

describe('higherOrderMath', function () {
  it('correctly returns functions until the last call', function () {
    var fn1Type = typeof higherOrderMath(10)
    assert.equal(fn1Type, 'function')

    var fn2Type = typeof higherOrderMath(10)('+')
    assert.equal(fn2Type, 'function')
  })

  it('can perform addition', function () {
    var result = higherOrderMath(10)('+')(20)
    assert.equal(result, 30)
  })

  it('can perform subtraction', function () {
    var result = higherOrderMath(10)('-')(20)
    assert.equal(result, -10)
  })

  it('can perform multiplication', function () {
    var result = higherOrderMath(10)('*')(20)
    assert.equal(result, 200)
  })

  it('can perform division', function () {
    var result = higherOrderMath(10)('/')(20)
    assert.equal(result, 0.5)
  })

  it('returns false if given an invalid operator', function () {
    var result = higherOrderMath(10)('%')(20)
    assert.isFalse(result)
  })
})
