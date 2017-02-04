const merge = (dest, ...inputs) => {
  inputs.forEach(obj =>{
    for (prop in obj) {
      dest[prop] = obj[prop]
    }

  })
  return dest
}

const addUnit = (value, ...names) => {
  const result = {}
  names.forEach(name => {
    result[name] = value
  })
  return result
}

module.exports.merge = merge
module.exports.addUnit = addUnit
