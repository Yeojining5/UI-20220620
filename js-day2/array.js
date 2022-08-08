//배열
// 연관된 갚들을 하나의 그룹으로 묶어서 나열한 자료구조
const colors = ["red", "green", "blue"];
console.log(colors);

// arrow function - 자주쓰임!
colors.forEach((color) => console.log(color));

// 구버전
colors.forEach(function(color) {
  console.log(`elemnet ==> ${color}`);
});

// 구버전1
function add(a, b){
  const result = a+b;
  return result;
}

//구버전2
const add1 = function(a,b){
  const result = a+b;
  return result;
}

/* arrow function(화살표함수) - 이것을 사용하도록 권장함 
    기존의 익명함수를 좀더 쓰기 편하게 축약한 형태
*/
const add2 = (a,b) => {
  const result = a+b;
  return result;
}

add2(3,4);
console.log(add2(3,4));

const msg = (txt) => {
  return txt;
}

/* 내부로 전달된 파라미터가 하나면 괄호는 생략 가능함 */
const msg2 = (txt) => txt;

console.log(msg2('hello arrow function'));