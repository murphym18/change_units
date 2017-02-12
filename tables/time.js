const {merge, addUnit} = require('../util')

const time = merge(
  addUnit(1, "second", "seconds", "sec", "s"),
  addUnit(60, "minute", "minutes", "min", "mins"),
  addUnit(3600, "hour", "hours", "h"),
  addUnit(86400, "day", "days"),
  addUnit(604800, "week", "weeks"),
  addUnit(30.4167 * 86400, "month", "months"),
  addUnit(365 * 86400, "year", "years"),
  addUnit(3650 * 86400, "decade", "decades"),
  addUnit(36500 * 86400, "century", "centuries"),
  addUnit(1e-24, "yoctosecond", "yoctoseconds", "ys"),
  addUnit(1e-21, "zeptosecond", "zeptoseconds", "zs"),
  addUnit(1e-18, "attosecond", "attosecond", "as"),
  addUnit(1e-15, "femtosecond", "femtoseconds", "fs"),
  addUnit(1e-12, "picosecond", "picoseconds", "sm"),
  addUnit(1e-9, "nanosecond", "nanoseconds", "ns"),
  addUnit(1e-6, "microsecond", "microseconds", "μs"),
  addUnit(1e-3, "millisecond", "milliseconds", "ms"),
  addUnit(1e-2, "centisecond", "centiseconds", "cs"),
  addUnit(1e-1, "decisecond", "deciseconds", "ds"),
  addUnit(1e+1, "dekasecond", "dekaseconds", "das"),
  addUnit(1e+2, "hectosecond", "hectoseconds", "hs"),
  addUnit(1e+3, "kilosecond", "kiloseconds", "ks"),
  addUnit(1e+6, "megasecond", "megaseconds", "Ms"),
  addUnit(1e+9, "gigasecond", "gigaseconds", "Gs"),
  addUnit(1e+12, "terasecond", "teraseconds", "Ts"),
  addUnit(1e+15, "petasecond", "petaseconds", "Ps"),
  addUnit(1e+18, "exasecond", "exaseconds", "Es"),
  addUnit(1e+21, "zettasecond", "zettaseconds", "Zs"),
  addUnit(1e+24, "yottasecond", "yottaseconds", "Ys")
)

module.exports = time
