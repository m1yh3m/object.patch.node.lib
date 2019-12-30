const {
  toKeyValueArray,
  keys,
  values
} = require('../lib')

describe('toKeyValueArray', () => {
  it('returns array that contains key value pair', () => {
    const expected = [{ key: 'a', value: 'a' }]
    const actual = toKeyValueArray({ a: 'a' })
    expect(actual).toEqual(expected)
  })
})

describe('keys', () => {
  it('returns keys of an object', () => {
    const obj = { a: 1, b: 2 }
    const expected = ['a', 'b']
    const actual = keys(obj)
    expect(actual).toEqual(expected)
  })
})

describe('values', () => {
  it('returns values of an object', () => {
    const obj = { a: 1, b: 2 }
    const expected = [1, 2]
    const actual = values(obj)
    expect(actual).toEqual(expected)
  })
})
