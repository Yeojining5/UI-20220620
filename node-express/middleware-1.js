
const express = require('express'); 
const app = express();

app.get("/", (req,res,next) => {
  console.log("first");
  next();
});

app.get("/", (req,res, next) => {
  console.log("second");
  res.send('응답처리...');
  // return; // first second만 반환
  next();
});

app.get("/", (req,res) => {
  console.log("third");
});

app.listen(3000);
