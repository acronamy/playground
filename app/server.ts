import * as express from "express";

const app = express();

app.set("engine","pug");
app.use(express.static(__dirname))

app.get("/",(req,res)=>{
    res.render("index");
});

app.listen(8080);