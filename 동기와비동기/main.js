function add(x) {
  return x+2;
}
// 자스에서는 void가 없다. 리턴이 없는 경우 -> undefined

function account(a, b, cb) { // *****파라미터에 콜백함수를 담았다 ************
  setTimeout(() => {cb(a + b);}, 2000); // 2초후에 실행이된다.
}

const result = add(3);
const temp = result;

const result2 = account(10,20, (result) => {
  console.log('result : ', result);
});
const temp2 = result2;
console.log('temp2 :', temp2);

/* 
  앞에 실행문이 정해지기 전에는 다음코드를 실행할 수 없음 - 동기적 상황(묶여있다)
  앞코드와 뒤코드는 종속성을 가지고 있음 - 의존관계

  자바스크립트는 동기코드임
  비동기처리는 AJAX API 사용 -> XMLHttpRequest
*/
