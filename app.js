//web serverni qurish kodlari
console.log("Web serverni boshlash");


const express = require("express");  //express -jsni ulaymiz
const app = express(); //expres.js dasturini app o'zgaruvchisisga saqlaymiz
const fs = require("fs"); //file system modulini  chaqiryapmiz

//MongoDB connect
const db = require("./server").db();
const mongodb = require("mongodb");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
if (err) {
    console.log("ERROR:", err)
}else{
    user = JSON.parse(data)
}
});

//1:kirish kodlari
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//2: Session

//3:Views kodlari
app.set("views", "views");
app.set("view engine", "ejs");

//4:Routing kodlari


//yaratayotgan HTTP serverimizga nimalar chiqarishini kiritamiz.
  
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item')
    console.log(req.body);
   const new_reja = req.body.reja;
   db.collection ("plans").insertOne ({reja: new_reja}, (err, data) => {
   
    res.json (data.ops[0]);
});
});

app.post("/delete-item", (req, res) => {
const id = req.body.id;
db.collection("plans").deleteOne(
    {_id: new mongodb.ObjectId(id) },
function (err, data) {
    res.json ({state: "success"});
}
);

});

app.post("/edit-item", (req, res) => {
    const data = req.body;
    console.log(data);
    db.collection("plans").findOneAndUpdate(
        { _id: new mongodb.ObjectId(data.id)},
        { $set: { reja: data.new_input} }, 
        function(err, data) {
          res.json({state: "success"});  
        })
    
});

app.post ("/delete-all", (req, res) => {
    if(req.body.delete_all){
        db.collection("plans").deleteMany(function(){
            res.json({state: "hamma rejalar o'chirildi"})
        })
    }
} )

app.get("/author", function(req, res){
    console.log('user entered /author')
    res.render("author" , { user: user });
});

app.get("/", function(req, res){
    console.log('user entered /')
    db.collection("plans")
    .find()
    .toArray((err, data)=> {
        if (err) {
            console.log(err);
            res.end("something went wrong");
        } else {
            console.log(data);
            res.render("reja", {items: data});

           
        }
    })
    
});

module.exports = app


