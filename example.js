const conv = require("./index")
try {
  console.log(conv(process.argv[2]))
} catch (e) {
  console.log(e.message)
}
