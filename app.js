// console.log('Web serverni boshlash');
const express = require("express");
const app = express();

const fs = require("fs");
// MongoDB chaqirish
const db = require("./server").db();
const mongodb = require("mongodb");
let user;
fs.readFile("database/user.json", "utf-8", (err, data)=>{
    if(err){
        console.log("ERROR:", err);
    }else{
        user = JSON.parse(data);
    }
});

// 1: Kirish kodlari. expressga kirib kelayotgan ma'lumotlarga bog'liq bo'lgan kodlar yoziladi.
app.use(express.static("public")); // chrome express ga request qilayotgan payti public folderni clientlarga ochib beradi.
app.use(express.json()); //kirib kelayotgan json farmatidagi datani objectga ugirib beradi.
app.use(express.urlencoded({extended: false})); //html dan form request (form data post qilsa express qabul qilib oladi)

// 2 Session larga bog'liq bo'lgan codelar yoziladi

// 3 View code
app.set("views", "views");
app.set("view engine", "ejs");

// 4 Routing code
app.post('/create-item', (req, res)=>{
    console.log("user entered /create-item");
    const new_reja = req.body.reja;
    db.collection("plans").insertOne({reja: new_reja}, (err, data) => {
        console.log(data.ops);
        res.json(data.ops[0]);
    });
});

app.post("/delete-item", (req, res)=>{
    const id = req.body.id;
    console.log(id);
    db.collection("plans").deleteOne(
        {_id: new mongodb.ObjectId(id)}, 
        (err, data)=>{
        res.json({state: "success"});
    }); //mongo db ning object idsini typesiga wrap qilgan bolishi kerak.
    
});

app.post("/edit-item", (req, res)=>{
    const data = req.body
    db.collection("plans").findOneAndUpdate(
        {_id: new mongodb.ObjectId(data.id)},
        {$set: {reja: data.new_input}},
        (err, data)=>{
        res.json({state: "success"});
    }
    );
});

app.post("/delete-all", (req, res)=>{
    if(req.body.delete_all){
        db.collection("plans").deleteMany(()=>{
            res.json({state: "all plans deleted"});
        })
    }
})

app.get("/author", (req, res)=>{
    res.render("author", {user: user});
});

app.get("/", function(req, res){
    console.log("user entered /");
    db.collection("plans")
    .find()
    .toArray((err, data) => {
        if(err){
            console.log(err);
            res.end("something went wrong");
        }else{
            res.render("reja", {items: data});
        }
    });
});

module.exports = app;