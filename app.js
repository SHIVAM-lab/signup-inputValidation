//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");
const { func } = require("joi");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin-shivam:Test123@cluster0.ootv1.mongodb.net/todolistDB", {useNewUrlParser: true});

const itemsSchema = mongoose.Schema({
  name: String,
  email:String,
  Password:String,
  D_O_B:Date,
  Gender:String},

  {timeStamps: true}
  
);

const Item = mongoose.model("Item", itemsSchema);
 
 app.get("/",function (req,res) {
     res.redirect('/');
     });

     app.post("/",(req,res) => {
         let NAME=req.body.name;
         let EMAIL=req.body.email;
         let PASSWORD=req.body.password;
         let BIRTHDATE=req.body.birthdate;
         let GENDER=req.body.gender;

         
         const item=new Item({
          name: NAME,
          email:EMAIL,
          Password:PASSWORD,
          D_O_B:BIRTHDATE,
          Gender:GENDER
         });
         item.save();
         res.redirect('/welcome');
         
         });
 app.get("/welcome",(req,res) => {
   res.redirect("/success");
   });

let port = process.env.PORT;
if(port == null || port == "")
 port = 3000;


app.listen(port, function() {
  console.log("Server has started successfully");
});
