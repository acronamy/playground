import {spawn} from "child_process";

export function server(){
    let npm = spawn('cmd',['/s', '/c','npm start'])

    npm.stdout.on('data',(out)=>{
        console.log(out.toString());
    })

    npm.stderr.on('data',(err)=>{
        console.log(err.toString());
        process.exit();
    })
}