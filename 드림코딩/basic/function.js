// Function
// fundamental building block in the program
// subprogram can be used multiple times 여러번 재사용 가능
// performs a task or calculates a value

// 1. Function declaration
// function name (param1, pram2) { body ... return;}
// 하나의 함수는 한가지의 일만 하도로 한다
// *** function is object in JS ****
// printHello.(속성값)  이런식으로 닷을 찍고 활용이 가능하기 때문에..
function printHello() {
  console.log('Hello');
}
printHello();

// 좀더 유용한 함수.. 파라미터로 메세지를 전달
function log(message) {
  console.log(message);
}
log('Hello@');
log(1234);

// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference

// 파라미터로 전달된 obj의 이름을 coder로 바꾸는 함수
function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie'}; // 엘리 오브젝트를 만들어서 엘리 변수에 할당
// 메모리에는 오브젝트가 만들어진 reference가 로딩되고, 오브젝트를 가리킴
changeName(ellie);
console.log(ellie);

// 3. Default Parameters (added in ES6)
/* function showMessage(message, from) {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!') */

function showMessage(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showMessage('Hi!')


// 4. Rest Parameters (added in ES6)
function printAll(...args) {
  for(let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }
  // 간단버전
  for(const arg of args) {
    console.log(arg);
  }
  // forEach 버전
  args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie')


// 5. Local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = 'global'; //global variable
function printMessage() {
  let message = 'hello';
  console.log(message); // local variable > 블럭 밖에서 호출하면 에러 발생
  console.log(globalMessage);
  function printAnother() { // 함수안에서 또 다른 함수 정의 가능
    console.log(message);
    let childMessage = 'hello';
  }
/*   console.log(childMessage); */  // 블록 밖이므로 에러 발생
}
printMessage(); // global 출력

// 6. Early return, early exit
// bad
function upgradeUser(user) {
  if(user.point > 10) {
    // long upgrade logic... 가독성이 떨어진다
  }
}

// good, 리턴 로직을 먼저 나타낼 것!!
function upgradeUser(user){
  if(user.point <= 10) {
    return;
  }
  // long upgrade logic...
}



//// First-class function (함수를 다른 변수와 동일하게 다룸)
// functions are treated like any other variable
// can be assigned as a value to variable (변수에 값이 할당)
// can be passed as an argument to otehr functions. (파라미터로 전달)
// can be returned by another function (리턴값으로도 리턴)
 /*함수에 이름이 없는 경우 - anonymous function */
const print = function () {
  console.log('print');
};
print(); // 변수에 할당된 함수를 호출
const printAgain = print; // 다른 변수에 할당
printAgain();


//// Callback function using function expression
// printYes, printNo 두개의 함수를 인자로 전달해서 
// 상황에 맞거나 원하면 전달된 함수를 호출(called back)
function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes(); // 호출
  } else {
    printNo(); // 호출 
  }
}
// anonymous function
const printYes = function() {
  console.log('yes!');
}
// named function (디버깅 시 이름이 있으면 찾아내기 쉬움)
const printNo = function print() {
  console.log('no!');
}
randomQuiz('wrong', printYes, printNo);  // no!
randomQuiz('love you', printYes, printNo); // yes!


////// Arrow Function
// always anonymous, 항상 간단하게 함수를 만들 수 있음
const simplePrint = function() {
  console.log('simplePrint!');
}; // 이런 함수식은 작성이 번거로우나 Arrow는 아래와같이 간단하다!

const simpleAPrint = () => console.log('simplePrint!');
const add = (a, b) => a+b;  // a,b를 인자로 전달한 경우

// 함수안에서 다양한 일이 필요하여 블럭이 필요한 경우 ** 리턴값 꼭 필요!
const simpleMultiply = (a,b) => {
  // do something more
  return a * b; // 리턴값 필요!
};

// IIFE: Immediately Invoked Function Expression
// 선언함과 동시에 호출하는 방법! (function~)();!!
(function hello() {
  console.log('IIFE');
})();



