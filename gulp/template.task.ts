import * as plumber from "gulp-plumber";
import { projectMap } from "./project.map";
import * as gulp from "gulp";
import * as pug from "gulp-pug";

export function template(){
    const options = {}
    const location = projectMap.templates.base + projectMap.templates.relativeGlob + projectMap.templates.ext;
    return gulp.src( location )
        .pipe( plumber() )
        .pipe( pug(options) )
        .pipe( gulp.dest((file)=>file.base) )
}