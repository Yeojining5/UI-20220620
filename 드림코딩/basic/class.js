'use strict';
// Object-oriented Progrmming
// class : template
// object : instance of a class
// JavaScript classes
// - introduced in ES6 - ES6 전에는 클래스 없이 오브젝트를 만들 수 있었음
//    function을 만들어서 오브젝트를 만들었음 
// - syntactical sugar over prototype-based inheritance (편리함을 제공..)

// 1. Class declarations
class Person {
  // constructor, 생성자로 전달된 name과 age를 필드에 할당해줌
  constructor(name, age) {
    // fields
    this.name = name;
    this.age = age;
  }
  // methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name); // ellie 출력
console.log(ellie.age); // 20 출력
ellie.speak(); // ellie: hello! 출력

// 2. Getter and setters
// 캡슐화 개념 - 사용자가 필드를 마음대로 바꾸지 못하도록...
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  // get set 메소드에서 사용하는 변수의 이름은 '_'를 이용해
  // 다르게 만들어주어야 call stack이 닫히는 문제를 해결..
  // 다라서 User 클래스의 필드는 총 3개 존재 - firstname, lastname, _age
  get age() {
    return this._age;
  }
  // set은 값을 설정하는 것이기 때문에 value를 받아와야함!
  set age(value) {
    if (value < 0) {
      throw Error('age can not be nagative') // 마이너스 값을 주면 안된다는 경고 가능
    }
    /* this._age = value < 0 ? 0 : value; */ // 마이너스 이면 0으로 세팅하는 방법도 가능
    this._age = value;
  }

}

/* const user1 = new User('Steve', 'Jobs', -1); // -값으로 설정 시 오류발생
console.log(user1.age); 
 */
const user2 = new User('Steve', 'Jobs', 30); 
console.log(user2.age);  // 30출력

// 3. Fields (public, private)
class Experiment {
  // 생성자를 사용하지 않고 필드를 정의할 수 있음
  publicField = 2; // 외부접근 가능
  #privateField = 0; // 내부접근만 가능, 클래스 외부에서는 접근 불가 (해쉬기호 사용)
}
const experiment = new Experiment();
console.log(experiment.publicField); // 2
console.log(experiment.privateField); // undefined

// 4. Static properties and methods
//
class Article {
  static publisher = 'Dream coding';
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); //undefined, static속성이므로 객체로 호출불가
console.log(Article.publisher); // Dream coding 출력, 클래스로 호출해야한다!
Article.printPublisher(); // Dream coding 출력


//////////////////// 5. Ingeritance ////////////////////////
// a way for one class to extend another class.
// 네모, 세모, 동그라미 클래스가 있다면 하나의 shape클래스를 재사용 가능하게
class Shape {
  constructor(width, heigth, color) {
    this.width = width;
    this.height = heigth;
    this.color = color;
  }
  draw() {
    console.log(`drawing ${this.color} color of`);
  }
  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
  draw() {
    super.draw();
    console.log('🔺');
  }

  // 필요한 함수로 오버라이드!!!
  getArea() {
    return (this.width * this.height) / 2;
  }
  // 최고 조상인 Object의 tostring을 오버라이드 할 수 있음
  toString() {
    // return ....
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw(); //drawing blue color of 출력
console.log(rectangle.getArea()); // 400

const triangle = new Triangle(20, 20, 'red');
triangle.draw(); // drawing red color of(super), 🔺
console.log(triangle.getArea()); // 200


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); // T
console.log(triangle instanceof Rectangle); // F
console.log(triangle instanceof Triangle); // T
console.log(triangle instanceof Shape); // T
console.log(triangle instanceof Object); // T



