// Objects
// one of the JavaScript's data types.
// a collections of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

// 객체 만드는 방법
// const obj1 = { name: '...', age: 20, ... }; -> 클래스가 없어도 생성 가능
// const obj2 = new Object();



// 관리가 어렵고 비효율적인 코드
/* const name = 'ellie';
const age = 4;
print(name, age);
function print(name, age) {
  console.log(name);
  console.log(age);
} */

// 오브젝트 엘리를 print 메소드에 person 인자로 넘기면 간단!
function print(person) {
  console.log(person.name);
  console.log(person.age);
}
// 위 코드를 개선하기 위해 오브젝트를 사용한다!!
const ellie = { name: 'ellie', age: 4}; // 오브젝트 활용
print(ellie);