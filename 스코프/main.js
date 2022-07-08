
let ename = "scott"; // 전역스코프
// 자바스크립트에서는 함수 내부에 또 다른 함수가 올 수 있다.
// 함수 선언 방법 2가지가 있다.
// 함수문
// 함수식
function methodA() {
  let i = 5; // 함수 스코프안에 ..
  console.log(ename);
  console.log(i);
// insert here - before / innerMethod();가 이 위치에 오면 미리 함수를 스캔하여 호출 먼저 가능
  
  //함수문 -> 선언보다 호출이 먼저 가능하다 
  innerMethod();
  function innerMethod() {
    let j = 10;
    console.log(i);
  }
// insert here - after
  // 함수식일 때 before 선언은 불가능
  // 함수식  
  const methodB = function(){
    console.log(y);
  }
  methodB(); // 함수식은 선언 이후 호출이 가능하다
}

methodA();
console.log(i);

/* 
  글로벌 스코프 - member variable, global variable 전역 변수
    : 애플리케이션이 실행되면 즉시 만들어지고 종료되면 사라짐
  함수 스코프 - 함수 안에서 정의됨 main.ival, sub.ival (지역변수의 특성)\
    : 함수가 만들어 졌다고 해서 스코프가 생긴다 | 아닌데
  블록 스코프
    : { }블록에 진입했을때만 생긴다.. for(int i; 1!=1; ) 참이어야 진입한다
      init() -> service() -> destroy()  주체가 시스템이기 때문에 강제로 회수해감(destroy)
      (자바에서는 자원반납, 자원의 회수)
    
  라이프사이클과 관련되어있다. 
*/

/* 
  호이스팅
  코드가 실행되기 전에 먼저 코드를 스캔함 (호이스팅 메커니즘)

*/