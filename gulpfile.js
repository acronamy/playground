"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
/**
 * Imported gulp tasks
*/
const style_task_1 = require("./gulp/style.task");
const script_task_1 = require("./gulp/script.task");
const template_task_1 = require("./gulp/template.task");
const watch_task_1 = require("./gulp/watch.task");
const server_task_1 = require("./gulp/server.task");
/**
 * Gulp task definitions
 */
gulp_1.task("style", style_task_1.style);
gulp_1.task("script", script_task_1.script);
gulp_1.task("template", template_task_1.template);
gulp_1.task("watch", watch_task_1.watcher);
gulp_1.task("server", server_task_1.server);
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
gulp_1.task("default", tasks);
