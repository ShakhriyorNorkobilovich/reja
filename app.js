console.log("Web serverni boshlash");
const express = require ("express");
const res = require ("express/lib/response");
const app = express();


/*
let user;
fs.readFile("database/user.json", "utf8", (err, data) => {
    if(err) {
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data);
    }
})
*/

//MongoDB chaqirish
const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// 2: Session code

// 3: View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing code
app.post("/create-item", (req, res) => {
   // console.log(req.body);
   // res.json({ test: "success" });
   //TODO: code with db here
});

app.get("/author", (req, res) => {
    res.render("author", {user:user});
});

app.get("/", function (req, res) {
    res.render("reja");
});

module.exports = app;

