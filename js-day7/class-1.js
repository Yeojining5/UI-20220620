// 클래스 - 객체를 쉽게 만들어주는 틀의 개념
// ES6에서 지원하게 됨
// 리액트 - 양이 늘어나더라도 복잡도는 증가하지 않는...

class Car {
  // 생성자 함수에서 초기화 가능하다
  // 공통분모 : 전변초기화를 담당한다
  // 생성자는 초기화의 역할 - 전역변수, 클래스 전역에서 사용할 수 있다
  constructor(name, emoji){
    this.name = name;
    this.emoji = emoji;
  }
  // 사용자 정의 함수를 가질 수 있다. -> 제공되는 함수가 있다 - window, document, white()

  display = () => {
    console.log(`${this.name},${this.emoji}`);
  }
}
// myCar, yourCar는 Car클래스의 인스턴스이다.
const myCar = new Car("Sonata", "🚗");
const yourCar = new Car("Pride", "🚕");

console.log(myCar);
console.log(yourCar);
const herCar = myCar;
console.log(myCar === yourCar); // =세개는 타입까지 체크, =두개는 값만 체크
console.log(myCar === herCar);
console.log(myCar.emoji, myCar.name);
yourCar.display();
herCar.display();


// 이 코드는 위 개념과 다른 개념이다.
const hisCar = {
  name: "싼타페",
  speed: 50,
};
console.log(hisCar);