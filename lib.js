function toKeyValueArray(obj) {
  obj = obj || this || null
  if (obj === undefined || obj === null) {
    return []
  }
  const keys = Object.keys(obj)
  return keys
    .map(k => ({ key: k, value: obj[k] }))
    .reduce((acc, v) => {
      acc.push(v)
      return acc
    }, [])
}

function keys(obj) {
  obj = obj || this || null
  if (obj === undefined || obj === null) {
    return []
  }
  return Object.keys(obj)
}

function values(obj) {
  obj = obj || this || null
  if (obj === undefined || obj === null) {
    return []
  }
  return Object.values(obj)
}

module.exports = {
  toKeyValueArray,
  keys, values
}
