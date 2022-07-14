class Car {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  display = () => {
    console.log(`$(this.name),$(this.age)`);
  }
}
const itsme = new Car("Niro", 5);
const itsyours = new Car("Stringer", 6);

console.log(itsme);
console.log(itsyours);