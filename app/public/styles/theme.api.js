"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const Datauri = require("datauri");
const config = require("./theme.config.json");
const datauri = Datauri.sync;
const api = {
    auto() {
        return "light";
    },
    imageDataUri(filename) {
        if (filename) {
            const target = path.resolve(__dirname, "../files", filename);
            return datauri(target);
        }
    }
};
exports.api = api;
