const path = require("path");

module.exports = {
    "@styles": path.join( process.cwd(), "applications", process.env.application, "styles"),
    "@media": path.join( process.cwd(), "applications", process.env.application, "media" ),
    "@templates": path.join( process.cwd(), "applications", process.env.application, "templates" ),
}
