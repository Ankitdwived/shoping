var mongoClient=require("mongodb").MongoClient;
var express=require("express");
var cors=require("cors");

var app=express();
app.get("/customers",(req,res)=>{
    res.write("your requeste details");
});
app.listen(3000);
console.log("server started:http://localhost:3000");