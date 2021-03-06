const {merge, addUnit} = require("../util")

const length = merge({},
  addUnit(1.616229e-35, "planck", "plancks", "ℓP"),
  addUnit(1, "meter", "meters", "metre", "m"),
  addUnit(2.54e-5, "thou"),
  addUnit(0.0254, "inch", "inches", "in"),
  addUnit(0.3048, "foot", "feet", "ft"),
  addUnit(0.4572, "cubit", "cubits"),
  addUnit(0.9144, "yard", "yards", "yd"),
  addUnit(1.8288, "fathom", "fathoms"),
  addUnit(5.0292, "rod", "rods"),
  addUnit(20.1168, "chain", "chains"),
  addUnit(1609.34, "mile", "miles", "mi"),
  addUnit(1852, "nautical mile", "nautical miles", "nmi"),
  addUnit(1.496e+11, "astronomical unit", "astronomical units", "au", "ua"),
  addUnit(9.461e+15, "light year", "light years", "ly"),
  addUnit(3.086e+16, "parsec", "parsecs", "pc"),
  addUnit(1e-24, "yoctometer", "yoctometers", "ym"),
  addUnit(1e-21, "zeptometer", "zeptometers", "zm"),
  addUnit(1e-18, "attometer", "attometer", "am"),
  addUnit(1e-15, "femtometer", "femtometers", "fm", "fermi"),
  addUnit(1e-12, "picometer", "picometers", "pm"),
  addUnit(1e-10, "angstrom", "angstroms", "Å", "ångström", "ångströms"),
  addUnit(1e-9, "nanometer", "nanometers", "nm"),
  addUnit(1e-6, "micrometer", "micron", "micrometers", "microns", "μm"),
  addUnit(1e-3, "millimeter", "millimeters", "mm"),
  addUnit(1e-2, "centimeter", "centimeters", "cm"),
  addUnit(1e-1, "decimeter", "decimeters", "dm"),
  addUnit(1e+1, "dekameter", "dekameters", "dam"),
  addUnit(1e+2, "hectometer", "hectometers", "hm"),
  addUnit(1e+3, "kilometer", "kilometers", "km"),
  addUnit(1e+6, "megameter", "megameters", "Mm"),
  addUnit(1e+9, "gigameter", "gigameters", "Gm"),
  addUnit(1e+12, "terameter", "terameters", "Tm"),
  addUnit(1e+15, "petameter", "petameters", "Pm"),
  addUnit(1e+18, "exameter", "exameters", "Em"),
  addUnit(1e+21, "zettameter", "zettameters", "Zm"),
  addUnit(1e+24, "yottameter", "yottameters", "Ym")
)

module.exports = length
