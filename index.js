const lengthUnits = require('./tables/length')

function parseQuery(query) {
  const arr = query.trim().split("to")
  const value = arr[0].split(/\s/)[0].trim()
  const fromUnit = arr[0].replace(new RegExp(value), "").trim()
  const toUnit = arr[1].trim()
  return {
    "value": Number(value),
    "fromUnit": fromUnit,
    "toUnit": toUnit,
  }
}
/**
 * Given a query string like "10 meters to feet"
 * Parse the query and return the converted value.
 * Example: Given "36 in to feet" return 3.
 */
module.exports = function(query){
  function toMeters(num, unit) {
    return num * lengthUnits[unit]
  }

  function fromMeters(num, unit) {
    return num / lengthUnits[unit]
  }

  const {value, fromUnit, toUnit} = parseQuery(query)
  return fromMeters(toMeters(value, fromUnit), toUnit)
}
