//import express from "express";
const express = require('express'); // npm i --save-dev express 설치 완료되어야 함
// NodeJS 에서 CommonJS 사용하면
// ES6 import express from "express"와 같음
const app = express();

app.get("/", (req,res) => {
  console.log("get");
  res.send("안녕하세요. 서버의 응답입니다")
});

app.listen(3000);
