"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plumber = require("gulp-plumber");
const project_map_1 = require("./project.map");
const gulp = require("gulp");
const pug = require("gulp-pug");
function template() {
    const options = {};
    const location = project_map_1.projectMap.templates.base + project_map_1.projectMap.templates.relativeGlob + project_map_1.projectMap.templates.ext;
    return gulp.src(location)
        .pipe(plumber())
        .pipe(pug(options))
        .pipe(gulp.dest((file) => file.base));
}
exports.template = template;
