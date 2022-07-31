// 자바스크립트 언어는 굉장히 유연하지만, 그것이 위험한 단점이 될 수도 있어서
// 예상치 못한 변수가 생길 수 있으므로 아래 코드를 작성하여 개발하면 좋음.
'use strict';

// Variable
///////// let (added in ES6) , rw(read / write) 값을 할당하고 변경이 가능! mutable
// var 변수는 hoisting 현상이 나타남
// hoisting - 어디에 선언 했는지에 상관없이 항상 제일 위로 선언을 끌어올려주는 것을 말한다.
// (hoist 끌어올려주다 라는 의미)
/* 
  console.log(age);
  age = 4;
  var age;  이런식으로... 선언도 하기전에 값을 할당..
*/


// 블럭 밖에서 선언하면 전역변수
// 실행이 끝날때까지 메모리에 탑재되어 있기 때문에 최소한으로 사용하는 것이 좋음
let globalName = 'global name'; 

// Block Scope
// 블럭 내에서 선언된 변수들은 지역변수 개념
{
  let name = 'BBiroo';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name); // 블럭 밖에서는 호출되지 않는다
console.log(globalName);



//////// Constant, r(read only) 읽기만 가능! 할당 후에는 자물쇠가 잠겨버림
// 값을 선언하고 할당한 후에는 변경할 수 없다. 상수 개념. immutable data
// favor immutable data type always for a few reasons:
//  - security
//  - thread safety
//  - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;


// Variable types
// 메모리에 값이 저장되는 2가지 방식
// 1) primitive : 값 자체가 메모리에 저장됨
// 2) object : 너무 커서 메모리에 한번에 올라가지 못함, 오브젝트가 가리키는 reference가 메모리를 가리키게 됨.
//          오브젝트가 가리키는 reference가 메모리에 저장된다
//        const yeojin = {name: 'yeojin', age: 29}; >> yeojin이 가리키는 포인터가 잠기기 때문에 
//         yeojin은 다른 객체로 변경 불가하지만, name과 age는 계속 변경 가능

// object, real-life object, data structure
const yeojin = {name: 'yeojin', age: 29}; // const로 할당되었기 때문에 다른 object로 할당 불가
yeojin.age = 21; // but, yeojin 오브젝트 안에는 name과 age라는 변수가 존재 > 할당 가능

// string
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: {greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`;
console.log(`value: ${helloBob}, type: ${typeof helloBob}`); // 백틱기호 사용
console.log('value: ' + helloBob +' type: ' + typeof helloBob); 

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value
const canRead = true;
const test = 3 < 1;
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null - 명확하게 너는 텅비어있는 값이야. null로 값이 할당이 되어있는 상태. (type : objext)
// undefined - 선언은 되었지만 아무것도 값이 지정되어있지 않음. 아직 정해지지 않은 상태! (type : undefined)


////////////////////// Dynamic typing: dynamically typed language ///////////////////////
// C,java는 변수 선언 시 타입을 정해서 선언해야 하지만, 자바스크립트는 선언 시 어떤 타입인지 선언할 필요x
// 프로그램이 동작할때 할당된 값에 따라서 타입이 변경될 수 있다!