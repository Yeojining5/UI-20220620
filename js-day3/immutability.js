// 묵시적으로 불변성을 지킨다 - 에러, 버그 예방할 수 있음
// 외부로부터 주어진 오브젝트를 함수 내부에서 변경하지 마세요
function callbyReference(object){
  object.ename = 'tiger';
  console.log(object);
}
const scott = { ename: 'scott'};
callbyReference(scott);

function changeName(obj){
  return {...obj, ename: 'king'}; // react에서 활용빈도가 매우 높다
}
let result = changeName(scott);
console.log(result);