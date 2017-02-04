const {merge, addUnit} = require("../util")

const planeAngle = merge ({},
  addUnit(1, "radian", "rad", "radians", "rads"),
  addUnit(Math.PI / 180, "degree", "°", "degrees"),
  addUnit(Math.PI / 200, "gradian", "grade", "grad", "gon", "gradians", "grads", "gons"),
  addUnit(2 * Math.PI, "turn", "turns", "revolution", "revolutions", "complete rotation", "complete rotations", "full circle", "full circles", "cycle", "cycles", "rev", "rot", "tr", "pla")
)

module.exports = planeAngle
