// 1. String concatenation
console.log('my' + 'cat');
console.log('1' + 2); // 2를 string 으로 포함시켜버림
console.log(`string literals: 1+2 = ${1+2}`); // 백틱 기호 활용

// 2. Numeric operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // devide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder
console.log(2 ** 3); // exponentiation

// 3. Increment and decrement operators
  let counter = 2;
  const preIncrement = ++counter;
  // counter = counter + 1;
  // PreIncrement = counter;

// 4. Assighnment perators
  let x = 3;
  let y = 6;
  x += y; // x = x+y;
  x -= y;

  // 5. Logical operators : ||(or) &&(and) i(not)

  // 6. Equality
  const stringFive = '5';
  const numberFive = 5;

  // == loose equlity, with type conversion (문자열 안에있는 숫자를 숫자로 보는 개념)
  console.log(stringFive == numberFive); // T
  console.log(stringFive != numberFive); // F

  // === strict equality, no type conversion ( 타입을 신경써서 체크함) **** 사용 권장
  console.log(stringFive === numberFive); // F
  console.log(stringFive !== numberFive); // T

  // object equality by reference
    const yeojin1 = { name: 'yeojin'};
    const yeojin2 = { name: 'yeojin'};
    const yeojin3 = yeojin1
    console.log(yeojin1 == yeojin2); // F - 1과 2는 각각 다른 reference가 저장되어 있으므로 ref가 다르다!
    console.log(yeojin1 === yeojin2); // F - 타입 상관없이 참조가 다르기 때문에
    console.log(yeojin1 === yeojin3); // T

  // equality - puzzler
  console.log(0 == false); // T
  console.log(0 === false); // F, 0은 boolean타입이 아니다
  console.log('' == false); // T
  console.log('' === false); // F, ''은 boolean타입이 아니다
  console.log(null == undefined); // T
  console.log(null === undefined); // F, 서로 다른 타입이다

  // 7. conditional perator : if, Switch, 
  const name = 'df';
  if (name === 'yeojin') {
    console.log('Welcom, Yeojin!');
  } else if (name === 'coder') {
    console.log('You are amazing coder');
  } else {
    console.log('unknwon');
  }

// 8. Ternary operotor: ?  // 코드 간단할 때 사용할 것
// condition ? valu1 : value2;
console.log(name === 'Yeojin' ? 'yes' : 'no');

// 9. Loops
// while loop, while the condition is truthy,]
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

for(let i=0; i<10; ++i){
  if(i % 2 != 0) continue;
  console.log(`i(even number) : ${i}`);
}
for(let i=0; i<10; ++i) {
  if(i == 8) break;
  console.log(`i(reaching 8) : ${i}`);
}