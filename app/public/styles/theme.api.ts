import * as path from "path";
import * as Datauri from "datauri";
const config = require("./theme.config.json");
const datauri = Datauri.sync;

const api = {
    auto(){
        return "light"
    },
    imageDataUri(filename:string){
        if(filename){
            const target = path.resolve( __dirname, "../files" ,filename );
            return datauri(target);
        }
    }
}
export {api}