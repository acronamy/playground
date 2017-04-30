import * as plumber from "gulp-plumber";
import { watch } from "gulp";
import { join } from "path";
import { projectMap } from "./project.map";

/**
 * Imported gulp tasks
*/
import { tsc } from "./tsc.task";
import { style } from "./style.task";
import { script } from "./script.task";

export function watcher(){
    watch( join( projectMap.scripts.base, projectMap.scripts.relativeGlob, projectMap.scripts.ext ), script );
    watch( join( projectMap.styles.base, projectMap.styles.relativeGlob, projectMap.styles.ext ), style );
    watch("", []);
}