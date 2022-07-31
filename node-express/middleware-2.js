const express = require('express');
const app = express(); // 객체생성(heap영역에 생성)

// ( ) 안에 파라미터에는 콜백함수가 온다
// next가 있어야 다음 미들웨어로 요청할 수 있음
/// 아래 코드의 get 자리에는 (all, use, post 가 올 수도 있다.)
app.get("/", (req,res,next) => {
  console.log('fisrt');
  res.send('hello');
  if(true) return;
  next();
},
(req,res,next) => {
  console.log('first2');
  next();
});

app.get("/:id",(req,res,next) => {
  console.log('middle1');
  res.send('Hello express!!!')
})

const port = 5000;
app.listen(port, () => {
  console.log(`The Express server is listening at port: ${port}`);
});
