class Converter {
  constructor(name, table) {
    this.name = name
    this.table = table
  }

  canConvert(dimension1, dimension2) {
    return this.table[dimension1] && this.table[dimension2]
  }

  convert(value, givenUnit, requestedUnit) {
    const standardUnit = value * this.table[givenUnit]
    return standardUnit / this.table[requestedUnit]
  }
}

module.exports = Converter
