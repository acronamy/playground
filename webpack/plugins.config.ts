import * as autoprefixer from "autoprefixer";
import * as ExtractTextPlugin from "extract-text-webpack-plugin";
import * as LiveReloadPlugin from "webpack-livereload-plugin";
import * as HtmlWebpackPlugin from "html-webpack-plugin";
import * as webpack from "webpack";

import * as cheerio from "cheerio";
import * as fs from "fs";
import * as path from "path";
import * as yargs from "yargs";

const env = yargs.argv.env

const styleConfig = path.join(process.cwd(), "applications", env.application, "config", "style.ts");

const applicationMainfile = `${env.application}.${env.version}.js`;
const applicationSrcPath = path.join(process.cwd(),"applications",env.application, "templates")
const applicationDistPath = path.join(process.cwd(),"public","applications",env.application)
//head
const applicationHead = path.join(applicationSrcPath, "head.html");
const applicationHeadExists = fs.existsSync(applicationHead);
//body
const applicationBody = path.join(applicationSrcPath, "body.html");
const applicationBodyExists = fs.existsSync(applicationBody);
//fs.readFileSync( applicationBody, "utf8" )
function MyPlugin() {}

MyPlugin.prototype.apply = function(compiler) {
  // ...
  compiler.plugin('compilation', function(compilation) {

    compilation.plugin('html-webpack-plugin-before-html-processing', function(hook, callback) {
        const $ = cheerio.load(hook.html);

        if(applicationHeadExists && !applicationBodyExists){
            $("head").replaceWith( fs.readFileSync( applicationHead, "utf8" ) );
        }
        else if(applicationBodyExists && !applicationHeadExists){
            $("body").replaceWith( fs.readFileSync( applicationBody, "utf8" ) );
        }
        else if(applicationBodyExists && applicationHeadExists){
            $("head").replaceWith( fs.readFileSync( applicationHead, "utf8" ) );
            $("body").replaceWith( fs.readFileSync( applicationBody, "utf8" ) );
        }

        hook.html = $.html();
        callback(null, hook);
    });
  });
};



//currently we cannot configure ts with awesome-typescript-loader due to bug.
//potentially look at other options or wait for upgrade

const options = {
    typescript:{
        configFileName:path.join(process.cwd(),"applications",env.application, "tsconfig.json")
    },
    sass:{
        filename: "[name].[contenthash].css",
        disable: env.NODE_ENV === "development"
    },
    livereload:{
        appendScriptTag:false
    },
    html:{
        filename: 'index.html',
        cache:false,
    }
}

export const pluginsConfig = [
    new ExtractTextPlugin(options.sass),
    new LiveReloadPlugin(options.livereload),
    new HtmlWebpackPlugin(options.html),
    new MyPlugin()
]