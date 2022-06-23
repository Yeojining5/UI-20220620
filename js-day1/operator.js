// 연산자 : 특정값을 도출하기 위해 연산 처리 식별자
// 산술연산자
// 대입연산자
// 비교연산자

let num = 0;
num = num + 2;
console.log(num);
num +=3;
console.log(num);

// ==
// === 세개면 타입까지 비교한다
console.log(1 == 1); // true
console.log(1 === 1); // true
console.log(2 == '2'); // true
console.log(2 === '2'); // false

const myCar = {
  name : '소나타',
  color : 'red',
  speed : 50,
}
const hisCar = {
  name : '소나타',
  color : 'red',
  speed : 50,
}
console.log(myCar == hisCar);
console.log(myCar === hisCar);
console.log(myCar.name == hisCar.name);
console.log(myCar.name === hisCar.name);

let herCar = hisCar;
console.log(herCar == hisCar);
console.log(herCar === hisCar);

//선언무
let b;
b = 2; // 표현식, 할당문
let x = (b = 2);
console.log('x'+x);


// 지수(거듭제곱) **
console.log(Math.pow(5,2));
console.log(5**2);

// + 연산자 주의
let text;
text = 10 + '10'; // 숫자와 문자열을 더하면 문자열로 변환
console.log(text);

// 할당연산자
let a = 1;
a += 2; // 먼저 더하고 나중에 대입 - 축약버전을 권장
console.log(a);

a *= 2; 
console.log(a);

a -= 2; 
console.log(a);