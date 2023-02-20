const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true}));
app.set('view engine','ejs');
var arr = [];

app.get('/' , function(req, res){
  var today = new Date();

  const options = {
    day : "numeric",
    weekday : "long" ,
    month : "long",
    year : "numeric"
  };

 var day = today.toLocaleString("en-US" ,options);
  res.render('list' , {Day : day , items : arr });
});

app.post('/' , function(req , res){
  var newItem = req.body.item;
  arr.push(newItem);
  res.redirect('/');
});


app.listen(3000, function(){
  console.log("Server Started successfully!");
})
