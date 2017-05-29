import * as path from "path";

export function aliasConfig(targetAsset){
    console.log();
    return {
        "@styles": targetAsset("styles"),
        "@scripts": targetAsset("scripts"),
        "@config": targetAsset("config"),
        "@config/components": targetAsset("config/components"),
        "@config/interfaces": targetAsset("config/interfaces"),
        "@media": targetAsset("media"),
        "@templates": targetAsset("templates"),
    } 
}
