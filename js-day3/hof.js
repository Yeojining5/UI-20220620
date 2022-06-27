// 고차함수 (Higher Order Function) - 콜백함수
const colors = ['green','red','blue'];

// 고차함수를 사용하지 않고 출력하기
for(let i = 0; i<colors.length; i++) {
  console.log(colors[i]);
}

// 고차함수를 사용해서 출력하기 - 배열을 돌면서 원하는(콜백함수) 것을 할 때? 사용함
// 자바스크립트에서도 같은 이름의 함수를 정의할 수 없다.
colors.forEach(function (value, index, array){
  console.log(value);
  console.log(index);
  console.log(array);
})

colors.forEach(function (value, index, array){
  console.log(value);
})

//  arrow Function으로 바꾸면?
colors.forEach((value) => console.log(value));

function myForEach(array, action){
  for (let i = 0; i < array.length; i++) {
    action(array[i]);
  }
}
console.log('------------------------------------');
myForEach(colors, console.log);

/*  --------------------------   */

// 조건에 맞는 아이템을 찾기 -find
const food1 = { menu : '🍔', price: 100};
const food2 = { menu : '🥩', price: 150};
const food3 = { menu : '🍖', price: 200};

const foods = [food1, food2, food3, food2];
let findItem = foods.find((value) => {
  return value.menu === '🥩';
})
console.clear();
console.log(findItem);

// findIndex를 사용하여 조건에 맞는 인덱스 출력하기
findItem = foods.findIndex((value) => value.menu === '🥩');
console.log(findItem);
findItem = foods.every((value) => value.menu === '🥩');
console.log(findItem);
/* 
  ***filter***조건에 맞는 걸 찾아서 새로운 배열 생성해줌 - 리액트 검색처리 할 때
  새로운 배열을 만들어주는 고차함수 - 중요**********************
*/
findItem = foods.filter((value) => value.menu === '🥩');
console.log(findItem);

// map을 이용하기
let nums = [1,2,3,4,5];
let result = nums.map((item) => item * 10);
console.log(result);
result = nums.map((item) => {
  if(item % 2 === 0) return item * 0;
  else return item;
});
console.log(result);

// 원숭이를 호랑이로 교체하는 함수 만들기
// 단 주어진 배열은 수정되지 않게 함 > react 수업 필수템
let animals = ['😺','🙉','🐶','🦓'];

function change(array){
  const newArray = Array.from(array);
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i] === '🙉'){
      newArray[i] = '🐯';
    }
  }
  return newArray;
}
console.log(change(animals));

// 재사용성을 높이는 함수로 레벨업 해보자
function change2(array){
  const newArray = Array.from(array);
  for (let i = 0; i < newArray.length; i++) {
    if(newArray[i] === from){
      newArray[i] = to;
    }
  }
  return newArray;
}
console.log(change(animals,'🙉','🐯'));

/*
  일급함수 -> first-class function
  : 함수를 값처럼 사용할 수 있다면 일급함수라고 함.
  : 함수가 일반 객체처럼 모든 연산이 가능
    - 함수의 매개변수로 전달
    - 함수의 반환값
    - 할당 명령문 사용
    - 동일비교 대상
  
    일급객체 -> first-class object
    일반 객체처럼 모든 연산이 가능한 것
    - 함수의 매개변수로 전달
    - 함수의 반환값
    - 할당 명령문
    - 동일 비교 대상

    함수형 프로그래밍 - 함수들까지 엮어놓은 것을 말함
    함수형 프로그래밍을 하면 데이터를 변경하지 않고
    변수를 사용하지도 않고 조건문과 반복문도 사용하지 않고 코딩 전개가 가능함
    이렇게 사용하려면 순수함수로 전의하는 것이 중요
    순수함수란 불변성을 지킨 함수를 말함
    함수 내부에서도 외부상태를 절대 변경하지 않는다
    : 배열에서도 사용할 수 있는 고차함수가 많음
    인자로 함수를 받거나(콜백함수)
    함수를 반환하는 함수를 고차함수라 함
*/