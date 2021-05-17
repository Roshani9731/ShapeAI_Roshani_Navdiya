const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",function(requ,resp){
  resp.sendFile(__dirname+"/index.html");
});
// app.get("/about",function(requ,resp){
//   resp.send("<h1>Roshani Navdiya</h1><p>I love to learn webdevlopment.");
// });
app.post("/", function(requ,resp){
  var n1 = Number(requ.body.num1);
  var n2 = Number(requ.body.num2);
  var result = n1+n2;
  // console.log(req.body.num1);
  resp.send("The ans is :"+result);
});


app.listen(3000, function(){
  console.log("Server has started on port 3000");
});
