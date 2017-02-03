module.exports.merge = (dest, ...inputs) => {
  inputs.forEach(obj =>{
    for (prop in obj) {
      dest[prop] = obj[prop]
    }
  })
  return dest
}
