import * as plumber from "gulp-plumber";
import * as gulp from "gulp";
import * as stylus from "gulp-stylus";
import { projectMap } from "./project.map";
import * as koutoSwiss from "kouto-swiss";
import { join } from "path";
import "../app/public/styles/theme.api";

const themeApi = require( join( projectMap.styles.base, "theme.api.js") ),
    themeConfig = require( join( projectMap.styles.base, "theme.config.json") );

export function style(){
    
    const options = {
        use:[
            koutoSwiss()
        ],
        rawDefine:Object.assign({
            config:themeConfig
        }, themeApi)
    }
    const location = projectMap.styles.base + projectMap.styles.relativeGlob + projectMap.styles.ext;
    return gulp.src( location )
        .pipe( plumber() )
        .pipe( stylus(options) )
        .pipe( gulp.dest((file)=>file.base) )

}