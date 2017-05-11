const path    = require("path"),
    targetName = process.env.application,
    targetFile = (file)=> path.join( process.cwd(), "applications", targetName, file ),
    pkgVersion = require( targetFile("package.json") ).version


//"public", "applications", targetName, `${targetName}.${pkgVersion}.js`

module.exports = {
  contentBase: path.join(process.cwd(), "public", "applications", targetName ),
  compress: true,
  port: 9000
}