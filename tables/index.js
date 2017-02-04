const Converter = require('../converter')
const length = require('./length')
const angle = require('./angle')
const time = require('./time')

module.exports = [
  new Converter("length", length),
  new Converter("angle", angle),
  new Converter("time", time)
]
