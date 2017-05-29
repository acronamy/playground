import * as path from "path";
import * as glob from "glob";
import * as fs from "fs";
import * as builder from "node-sass-importer-builder";
import * as ts from "typescript";
import * as nodeSass from "node-sass";
import * as SassUtils from "node-sass-utils";
import * as yargs from "yargs";
import * as tinyColor from "tinycolor2";
import * as htmlClean from "htmlclean";

const env = yargs.argv.env;
const sassUtils = SassUtils(nodeSass);

function flatObjectToSass(category,object){
    const output = []
    console.log(object)
    Object.keys(object).forEach(key=>{
        output.push( `$${category}-${key}:${object[key]};` )
    })
    return output.join("")
}

/**
 * The typesafe style config file
*/
const colorLibrary = path.join(process.cwd(), "applications", env.application, "colors")
const styleConfig = path.join(process.cwd(), "applications", env.application, "config", "style.ts");
const shadowConfig = path.join(process.cwd(), "applications", env.application, "config", "components", "shadow.component.ts");
const tsConfig = require(path.join(process.cwd(), "applications", env.application, "tsconfig.json"))
const svgFiltersDir = path.join(process.cwd(), "applications", env.application, "media" )

const tsImporter = builder(/\.ts$/, function(filepath) {
    //transpile with ts-node the target ts file
  return require(filepath);
});


const options = {
    sass:{
        data:"$env: " + process.env.NODE_ENV + ";",
        includePaths: [
            path.join(process.cwd(), "applications", env.application, "styles"),
            path.join(process.cwd(), "node_modules")
        ],
        importer:[
            tsImporter,
        ],
        functions:{
            'svg($path)':function(svgPath){
                svgPath = sassUtils.castToJs(svgPath);
                let svg = "data:image/svg+xml;utf8,"+ htmlClean( fs.readFileSync(path.join(svgFiltersDir, svgPath) , "utf8") )
                console.log(window)
                return sassUtils.castToSass(svg)
            },
            'convert($string)':function(string){
                string = sassUtils.castToJs(string)
                let valueSplit = string.match(/(\d+)([^\d]*)$/);
                let value = valueSplit[1];
                let unit = valueSplit[2]
                //define a new sass unit
                let result = new sassUtils.SassDimension( parseInt(value) ,unit)
                return sassUtils.castToSass(result);
            },
            'contains($sample, $find)':function(sample, find){
                find = sassUtils.castToJs(find);
                find = new RegExp(find,"gi");
                sample = sassUtils.castToJs(sample);
                let result = find.test(sample);
                return sassUtils.castToSass(result);
            },
            'boxShadow($shadowNumber:default)':function(n){
                const shadowSelector = sassUtils.castToJs(n);
                const shadowFile = require(shadowConfig).shadows;
                if(shadowSelector === "default"){
                    return sassUtils.castToSass( shadowFile[ shadowFile[shadowSelector] ].box );
                }
                else{
                    return sassUtils.castToSass( shadowFile[ shadowSelector.value ].box );
                }
            },
            'base($shadeNumber:100)':function(n){
                const shadeSelector = sassUtils.castToJs(n);
                if(shadeSelector === "default"){
                    const baseShades = require(styleConfig).default.components;
                    return sassUtils.castToSass(baseShades["skin.color.base.100"]);
                }
                else{
                    const baseShades = require(styleConfig).default.components;
                    return sassUtils.castToSass(baseShades["skin.color.base."+shadeSelector.value]);
                }
            },
            'primary($shadeNumber:default)':function(n){
                //need to filter for primary color
                const shadeSelector = sassUtils.castToJs(n)
                const components = require(styleConfig).default.components;
                let color;
                if(shadeSelector==="default"){
                    Object.keys(components).forEach(key=>{
                        if(/skin.color.primary/g.test(key)){
                            const palette = key.split(".").pop()
                            const colorFile =  require(path.join(colorLibrary, `${palette}.palette.ts` ));
                            const shade = colorFile.palette[components[key]];
                            //resolve the color
                            color = sassUtils.castToSass(shade[shade[shadeSelector]]);
                        }
                    })
                    return color;
                }
                else{
                    Object.keys(components).forEach(key=>{
                        if(/skin.color.primary/g.test(key)){
                            const palette = key.split(".").pop()
                            const colorFile =  require(path.join(colorLibrary, `${palette}.palette.ts` ));
                            const shade = colorFile.palette[components[key]];
                            //resolve the color
                            color = sassUtils.castToSass(shade[shadeSelector.value.toString()]);
                        }
                    })
                    return color;
                }
            },
            'accent($shadeNumber)':function(n){
                //need to filter for primary color
                const shadeSelector = sassUtils.castToJs(n)
                const components = require(styleConfig).default.components;
                let color;
                if(shadeSelector==="default"){
                    Object.keys(components).forEach(key=>{
                        if(/skin.color.accent/g.test(key)){
                            const palette = key.split(".").pop()
                            const colorFile =  require(path.join(colorLibrary, `${palette}.palette.ts` ));
                            const shade = colorFile.palette[components[key]];
                            //resolve the color
                            color = sassUtils.castToSass(shade[shade[shadeSelector]]);
                        }
                    })
                    return color;
                }
                else{
                    Object.keys(components).forEach(key=>{
                        if(/skin.color.accent/g.test(key)){
                            const palette = key.split(".").pop()
                            const colorFile =  require(path.join(colorLibrary, `${palette}.palette.ts` ));
                            const shade = colorFile.palette[components[key]];
                            //resolve the color
                            color = sassUtils.castToSass(shade[shadeSelector.value.toString()]);
                        }
                    })
                    return color;
                }
            },
            'auto($base)':function(base){
                base = sassUtils.castToJs(base);
                let lum = Math.round(tinyColor(base).getLuminance());
                if(lum === 1){
                    return sassUtils.castToSass("#000");
                }
                else{
                    return sassUtils.castToSass("#fff");
                }
            },
            'device($device)':function(device){
                console.log("HERE",device)
                //
                return sassUtils.castToSass("@include media()");
            },
            'config($key)':function(key:string){
                key = sassUtils.castToJs(key);
                const config = require(styleConfig);
                const results = config.default.components[key];
                
                if(typeof results === "string" && results[0]!=="#"){
                    let valueSplit = results.match(/(\d+)([^\d]*)$/);
                    if(valueSplit && typeof parseInt(valueSplit[1]) === "number"){
                        let value = valueSplit[1]
                        let unit = valueSplit[2]
                        let safeUnit = new sassUtils.SassDimension( parseInt(value) ,unit);
                        return sassUtils.castToSass(safeUnit);
                    }
                    else{
                        return sassUtils.castToSass(results);
                    }
                }
                else{
                    return sassUtils.castToSass(results);
                }
            }
        }
    }
}

export const rulesConfig = [
    
    {
        test: /\.(scss)$/,
        use: [
            {
                loader: "style-loader" // creates style nodes from JS strings
            },
            {
                loader: "css-loader" // translates CSS into CommonJS
            },
            {
                loader: "sass-loader",
                options: options.sass
            }
        ]
    },
     {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
    },
    {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
    },
    // images
    { test: /\.jpg$/,    loader: 'url-loader?limit=65000&mimetype=image/jpg&name=img/[name].[ext]' },
    { test: /\.jpeg$/,   loader: 'url-loader?limit=65000&mimetype=image/jpeg&name=img/[name].[ext]' },
    { test: /\.png$/,    loader: 'url-loader?limit=65000&mimetype=image/png&name=img/[name].[ext]' },
    { test: /\.gif$/,    loader: 'url-loader?limit=65000&mimetype=image/gif&name=img/[name].[ext]' },
    // fonts
    //{ test: /\.svg$/,    loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]' },
    { test: /\.woff$/,   loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]' },
    { test: /\.woff2$/,  loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]' },
    { test: /\.[ot]tf$/, loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]' },
    { test: /\.eot$/,    loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' },
    { test: /\.html$/,    loader: 'html-loader' }
]