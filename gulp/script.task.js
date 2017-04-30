"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
function script() {
    let tsc = child_process_1.spawn('cmd', ['/s', '/c', 'tsc --project main.tsconfig.json --listFiles']);
    tsc.stdout.on('data', (out) => {
        console.log(out.toString());
    });
    tsc.stderr.on('data', (err) => {
        console.log(err.toString());
        process.exit();
    });
}
exports.script = script;
