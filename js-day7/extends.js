class Car {
  speed;
  carName;
  constructor(carName, speed){
    this.carName = carName;
    this.speed = speed;
  }
  // 사용자 정의 함수
  // 클래스 선언시 function 예약어를 사용하지 않음
  speedUp(){
    this.speed += 1;
  }
  speedDown(){
    this.speed -= 1;
  }
}

class Sonata extends Car {
  speedUp(){
    super.speedUp();
    this.speed +=2;
  }
}

class K5 extends Car{
  stop() {
    this.speed = 0;
  }
}

const myCar = new Sonata("22년형소나타", 30);
myCar.speedUp();
console.log(myCar.speed);
myCar.speedUp();
console.log(myCar.speed);
myCar.speedDown();
console.log(myCar.speed);

const yourCar = new K5("22년형k5", 30);