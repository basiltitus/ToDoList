const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();
app.set('view engine', 'ejs');
var items=["Buy Food","Eat Food","Eat More Food"];
app.use(express.static("public"));
app.use(bodyparser.urlencoded({extended:true}));
app.get("/",function(req,res){

  var options = { weekday: 'long',
  day: 'numeric' ,
  month: 'long'
  };
var today  = new Date();
today=today.toLocaleDateString("en-US", options)
  res.render("list",{day: today,newI:items});
});
app.post("/",function(req,res){
   var item=req.body.newitem;
   if(req.body.newitem!="")
   {items.push(item);
  console.log(item);
  res.redirect("/");
}});

app.listen(process.env.PORT||3000,function(){
  console.log("Listening to port 3000");
})
