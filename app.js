//web serverni qurish kodlari
console.log("Web serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");

//MongoDB connect
const db = require("./server").db();

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

  
app.post("/create-item", (req, res) => {
    console.log('user entered /create-item')
    console.log(req.body);
   const new_reja = req.body.reja;
   db.collection ("plans").insertOne ({reja: new_reja}, (err, data) => {
    if (err) {
        console.log(err)
        res.end("something went wrong");
   } else {
    res.end("successfully added");
   }
})

});

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


/*
console.log("******************");

//fs package
const fs = require('fs');
const data = fs.readFileSync ('./input.txt', 'utf-8');
console.log(data)

console.log("******************");


fs.writeFileSync ("./input.txt", `${data} \n\t\t by Dylan O'Brian`);
const new_data = fs.readFileSync ('./input.txt', 'utf-8');
console.log(new_data)

//moment package
const moment = require("moment");
const time = moment().format("YY-MM-DD");
console.log(time);

//validator package
const validator = require ("validator");
//const test = validator.isEmail("foo@bar.com");
const test = validator.isIP("114.200.35.154")
console.log("test:",  test)

//chalk package
const chalk = require("chalk");
const log = console.log;
log(chalk.blue("Hello") + random + chalk.red("!"));

// hisob js ning davomi 
const calculate = require("./hisob.js");

const natija = calculate.kopaytirish(80, 20);
console.log("Natija", natija);

const natija2 = calculate.qoshish(80, 20);
console.log("Natija", natija2);

const natija3 = calculate.ayirish(80, 20);
console.log("Natija", natija3);

const Account = require("./account");
Account.tellmeAboutClass();
Account.tellMeTime();
const myAccount = new Account ('Dylan O Brian', 200000, 847676374746710);

myAccount.giveMeDetails();
myAccount.makeDeposit(1000000);
myAccount.withdrawMoney(300000)
myAccount.withdrawMoney(2400000)
myAccount.tellMeBalance();
*/