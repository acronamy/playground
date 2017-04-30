"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const gulp_1 = require("gulp");
const path_1 = require("path");
const project_map_1 = require("./project.map");
const style_task_1 = require("./style.task");
const script_task_1 = require("./script.task");
function watcher() {
    gulp_1.watch(path_1.join(project_map_1.projectMap.scripts.base, project_map_1.projectMap.scripts.relativeGlob, project_map_1.projectMap.scripts.ext), script_task_1.script);
    gulp_1.watch(path_1.join(project_map_1.projectMap.styles.base, project_map_1.projectMap.styles.relativeGlob, project_map_1.projectMap.styles.ext), style_task_1.style);
    gulp_1.watch("", []);
}
exports.watcher = watcher;
