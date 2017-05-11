"use strict";

console.log(process.env.application)

exports.__esModule = true;
var express = require("express");
var cheerio = require("cheerio");
var app = express();
var path = require("path");
var fs = require("fs");

var applicationMainfile = `${process.env.application}.${process.env.version}.js`;
var applicationSrcPath = path.join(process.cwd(),"applications",process.env.application, "templates")
var applicationDistPath = path.join(process.cwd(),"public","applications",process.env.application)
//head
var applicationHead = path.join(applicationSrcPath, "head.html");
var applicationHeadExists = fs.existsSync(applicationHead);
//body
var applicationBody = path.join(applicationSrcPath, "body.html");
var applicationBodyExists = fs.existsSync(applicationBody);

app.set("view engine", "pug");
app.set('views',__dirname);

app.use("/"+process.env.application, express.static(applicationDistPath));

function overide(err, html){
    console.log(html)
    let $ = cheerio.load(html);
                
    if(applicationHeadExists){
        $('head').append( fs.readFileSync( applicationHead, "utf8" ));
    }
    if($("head>title")){
        $("title").text(process.env.application+" - ("+process.env.NODE_ENV+")")
    }
    if(applicationBodyExists){
        $('body')
            .append( fs.readFileSync( applicationBody, "utf8" ))
            .append( "<script src='/"+process.env.application+"/"+applicationMainfile+"'></script>" )
    }
    
    this.send($.html());
}


app.use(express.static(__dirname));

app.get("/", (req, res)=> {
    res.render("./index.pug", {}, overide.bind(res));
});
app.listen(8080);
