const p = new Promise((resolve, reject) => { // 2개의 함수를 호출함 (resolve, reject)
  setTimeout(() => {
    resolve('OK');}, 2000);
  
  //reject('Fail');
});
p.then((ok) => {
  console.log('첫 번째 성공');
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('두 번째 성공');
    },2000);
    })
  }).then(function(){
    console.log(ok);
  })
.catch((error) => {
  console.log(error);
})

/* 
  여러개의 비동기 상황을 순차적으로...
*/

