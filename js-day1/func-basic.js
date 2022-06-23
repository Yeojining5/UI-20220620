// 함수
// 함수도 객체이다
// 메소드 오버로딩, 오버라이딩 지원없음
// 같은 이름의 함수를 중복정의 할 수 없다.

function hap(a, b){
  const result = a+b;
  return a+b; // return을 명시하지 않으면 console에서 자동으로 undefined 반환
}

console.log(hap(1,3));

let lastName = '김';
let firstName = '춘추';
let fullName = `${lastName} ${firstName}`;

let lastName2 = '이';
let firstName2 = '순신';
let fullName2 = `${lastName} ${firstName}`;

function namePrint(firstName, LastName){
  return `${firstName} ${LastName}`;
}

console.log(namePrint(firstName, lastName));
console.log(namePrint(firstName, lastName));

// total 변수도 hap과 동일한 메모리 주소를 갖는다.
const total = hap;
console.log(hap(2,3));
console.log(total(2,3));
