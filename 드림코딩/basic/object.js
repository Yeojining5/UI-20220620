// Objects
// one of the JavaScript's data types.
// a collections of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
//// object = { kye : value}; 오브젝트는 키(변수,property)와 값의 집합체이다
// 

// 1. Literals and properties
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

// can add properties later
ellie.hasJob = true; // 뒤늦게 hasJob을 추가할 수 있음 but 유지보수는 어려움
console.log(ellie.hasJob);

// can delete properties later
delete ellie.hasJob;
console.log(ellie.hasJob); // undefined. 삭제되었으므로

// 2. Computed properties [] (계산된 프라퍼티즈..)
// 실시간으로, 동적으로 원하는 키의 값을 받아오고 싶을 때 사용 (사용자가에게 입력받을 때 등..)
// key should be always string. 키는 항상 string 타입! '' 안에 넣을 것
console.log(ellie.name); // 보통 코드를 작성할 때는 .을 사용
console.log(ellie['name']); // .을 이용하는 방법 외에도 이런 방법이 있음
ellie['hasJob'] = true;
console.log(ellie['hasJob']); // true

// 3. Property value shorthand
// 3개의 오브젝트 생성 후  4번째 오브젝트를 생성할때 함수를 이용하면 편함!
const person1 = { name: 'bob', age: 2};
const person2 = { name: 'steve', age: 3};
const person3 = { name: 'dave', age: 4}; 
//const person4 = makePerson('ellie', 5);
const person4 = new Person('ellie', 5);

console.log(person4); // {name: 'ellie', age: 5} 출력완료

/* function makePerson(name, age){
  return {
    //name:name, 이걸 아래와같이 축약하여 사용 가능!
    name,
    age,
  };
} */

// 4. Constructor Function
// 즉, 위의 makePerson함수는 클래스가 등장전에 오브젝트를 만들 때 쓰던 함수
// 아래와 같이 사용한다
function Person(name, age){
    // this = {};
  this.name = name;
  this.age = age;
    // return this;
};

// 5. in operator: property existence check (key in obj)
console.log('name' in ellie); // T
console.log('age' in ellie); // T
console.log('random' in ellie); // F
console.log(ellie.random); // undefined

// 6. for..in vs for.. of   (프로젝트 시 유용!!)
// for (key in obj)
// console.clear(); // 이전에 출력된 로그들 지워줌
for(key in ellie) {
  console.log(key); // name, age, hasJob 출력
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(let i = 0; i < array.length; i++) {
  console.log(array[i]);   // 이방식을 쓰면 1234가 출력은 되지만 코드가 길어짐
}

for(value of array) {
  console.log(value);  // array의 값들이 value에 할당되어 출력! 간단!
}

// 7. Fun cloning
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
// user가 가리키고 있던 주소값(reference)의 오브젝트가 ellie에서 coder로 변경
console.log(user);

// 오브젝트 복사 old way
const user3 = {}; // 먼저 텅텅빈 객체 만들기
for(key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3); // {name: 'coder', age: '20'}

// 오브젝트 복사 new ver
const user4 = {}; // 먼저 텅텅빈 객체 만들기
Object.assign(user4, user);
console.log(user4); // {name: 'coder', age: '20'}

/* const user4 = Object.assign(user4, user);
console.log(user4); */    //위 코드와 같음

// 오브젝트를 할당할 때마다 값이 덮어씌어짐
const fruit1 = { color: 'red' };
const fruit2 = { color: 'blue', size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color); // blue
console.log(mixed.size); // big