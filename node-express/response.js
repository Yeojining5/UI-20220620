const express = require('express')
const app = express()

// nodeJS로 부터 요청객체와 응답 객체는 주입 받음
app.get("/kh/:id", (req, res) => {
  console.log(`mem_id : ${req.query.mem_id}, mem_pw : ${req.query.mem_pw}`);
  //res.send(`<font color=red>${req.query.mem_id}</font>`);
  //res.json({ "mem_id":"apple"});
  res.sendStatus(400);
  return;
});

app.listen(3000);