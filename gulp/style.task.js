"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plumber = require("gulp-plumber");
const gulp = require("gulp");
const stylus = require("gulp-stylus");
const project_map_1 = require("./project.map");
const koutoSwiss = require("kouto-swiss");
const path_1 = require("path");
require("../app/public/styles/theme.api");
const themeApi = require(path_1.join(project_map_1.projectMap.styles.base, "theme.api.js")), themeConfig = require(path_1.join(project_map_1.projectMap.styles.base, "theme.config.json"));
function style() {
    const options = {
        use: [
            koutoSwiss()
        ],
        rawDefine: Object.assign({
            config: themeConfig
        }, themeApi)
    };
    const location = project_map_1.projectMap.styles.base + project_map_1.projectMap.styles.relativeGlob + project_map_1.projectMap.styles.ext;
    return gulp.src(location)
        .pipe(plumber())
        .pipe(stylus(options))
        .pipe(gulp.dest((file) => file.base));
}
exports.style = style;
