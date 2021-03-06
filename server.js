const express=require("express");
const app=express();

app.get("/",function(req,res){

  res.send("<h1>Hello World</h1>");
})

app.get("/contact",function(req,res){
  res.send("Contact me: darshilagrawal2000@gmail.com");
})

app.get("/pyaar",function(req,res){
  res.send("Pyaar To hai CHAI");
})
app.get("/about",function(req,res){
  res.send("My Name is Darshil Agrawal, a 3rd Year Engineering Student trying to path my way to success and glory");
})
app.listen(3000,function(){
  console.log("The Server is Running");
})
