const express = require('express');
​
const app = express();
app.use(express.static("/public"));
//app.set('views','views')
app.set("view engine", "ejs");
​
app.get("/hello/:nameParam", (req,res) => {
  res.render("hello", {name: req.params.nameParam});
});
​
app.listen(3000);