import { projectMap } from "./project.map";
import * as typescript from "gulp-typescript";

import {spawn} from "child_process";

export function script(){
    let tsc = spawn('cmd',['/s', '/c','tsc --project main.tsconfig.json --listFiles'])

    tsc.stdout.on('data',(out)=>{
        console.log(out.toString());
    })

    tsc.stderr.on('data',(err)=>{
        console.log(err.toString());
        process.exit();
    })
}