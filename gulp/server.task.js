"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function server() {
    let npm = child_process_1.spawn('cmd', ['/s', '/c', 'npm start']);
    npm.stdout.on('data', (out) => {
        console.log(out.toString());
    });
    npm.stderr.on('data', (err) => {
        console.log(err.toString());
        process.exit();
    });
}
exports.server = server;
