import {ShadowTypes} from "../interfaces/shadow.interface";

export const shadows:ShadowTypes = {
    "100":{
        box:"0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
        text:"text-shadow: 0 -1px rgba(0,0,0,0.69)"
    },
    "200":{
        box:"0 2px 4px rgba(0,0,0,0.25), 0 2px 3px rgba(0,0,0,0.22)",
        text:"text-shadow: 0 -1px rgba(0,0,0,0.79)"
    },
    "300":{
        box:"0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
        text:"text-shadow: 0 -1px rgba(0,0,0,0.89)"
    },
    "400":{
        box:"0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
        text:"text-shadow: 0 -1px rgba(0,0,0,0.99)"
    },
    "500":{
        box:"0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)",
        text:"text-shadow: 0 -2px rgba(0,0,0,0.99)"
    },
    default:"100"
}