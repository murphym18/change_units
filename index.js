const tables = require('./tables')

/**
 * Given a query string like "10 meters to feet"
 * Parse the query and return the converted value.
 * Example: Given "36 in to feet" return 3.
 */
module.exports = function(query) {
  const {value, givenUnit, requestedUnit} = parseQuery(query)
  const matchedTables = tables.filter(table => table.canConvert(givenUnit, requestedUnit))
  errorCheck(matchedTables)
  const table = matchedTables[0]
  return table.convert(value, givenUnit, requestedUnit)
}

function parseQuery(query) {
  const arr = query.replace(/\s+/g, " ").trim().split("to")
  const value = arr[0].split(/\s/)[0].trim()
  const fromUnit = arr[0].replace(new RegExp(value), "").trim()
  const toUnit = arr[1].trim()
  return {
    "value": Number(value),
    "givenUnit": fromUnit,
    "requestedUnit": toUnit,
  }
}

function errorCheck(matchedTables) {
  if (matchedTables.length > 1) {
    throw new Error(`Ambiguous units. There is more than one way to convert "${query}"`)
  }
  if (matchedTables.length < 1) {
    throw new Error(`Cannot convert "${query}" Make sure both unit names are spelled correctly and of the same dimension. You can also try alternative spellings`)
  }
}
