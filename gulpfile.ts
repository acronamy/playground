import { task, watch } from "gulp";

/**
 * Imported gulp tasks
*/
import { style } from "./gulp/style.task";
import { script } from "./gulp/script.task";
import { template } from "./gulp/template.task";
import { watcher } from "./gulp/watch.task";
import { server } from "./gulp/server.task";

/**
 * Gulp task definitions
 */
task("style", style);
task("script", script);
task("template", template);
task("watch", watcher);
task("server", server);

/**
 *  The default task list in running order. 
*/
const tasks = [
    "style",
    "script",
    "template",
    "watch",
    "server"
];

/**
 * run gulp
*/
task("default", tasks);