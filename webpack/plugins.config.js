/**
 * Global plugins
*/
const autoprefixer = require("autoprefixer"),
        CheckerPlugin = require('awesome-typescript-loader'),
        ExtractTextPlugin = require("extract-text-webpack-plugin"),
        LiveReloadPlugin = require('webpack-livereload-plugin'),
        HtmlWebpackPlugin = require('html-webpack-plugin');


const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
const applicationMainfile = `${process.env.application}.${process.env.version}.js`;
const applicationSrcPath = path.join(process.cwd(),"applications",process.env.application, "templates")
const applicationDistPath = path.join(process.cwd(),"public","applications",process.env.application)
//head
const applicationHead = path.join(applicationSrcPath, "head.html");
const applicationHeadExists = fs.existsSync(applicationHead);
//body
const applicationBody = path.join(applicationSrcPath, "body.html");
const applicationBodyExists = fs.existsSync(applicationBody);
//fs.readFileSync( applicationBody, "utf8" )
function MyPlugin(options) {}

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
        configFileName:"tsconfig.global.js"
    },
    sass:{
        filename: "[name].[contenthash].css",
        disable: process.env.NODE_ENV === "development"
    },
    livereload:{

    },
    html:{
        filename: 'index.html',
        cache:false,
    }
}

module.exports = [
    //new CheckerPlugin(typescript)
    new ExtractTextPlugin(options.sass),
    new LiveReloadPlugin(options.livereload),
    new HtmlWebpackPlugin(options.html),
    new MyPlugin()
]