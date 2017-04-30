"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const projectMap = {
    /**
     * The location of this projects scripts.
    */
    scripts: {
        base: path_1.resolve("app", "public", "scripts"),
        relativeGlob: `${path_1.sep}**${path_1.sep}*`,
        ext: ".js"
    },
    /**
     * The location of this projects styles.
    */
    styles: {
        base: path_1.resolve("app", "public", "styles"),
        relativeGlob: `${path_1.sep}**${path_1.sep}*`,
        ext: ".styl"
    },
    /**
     * The location of this projects templates.
    */
    templates: {
        base: path_1.resolve("app", "public"),
        relativeGlob: `${path_1.sep}**${path_1.sep}*`,
        ext: ".pug"
    }
};
exports.projectMap = projectMap;
