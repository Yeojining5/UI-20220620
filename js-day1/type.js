// 자료형
/*
  원시형 타입(Primative type)
  : 단일 테이터이다. Stack 메모리 공간에 담긴다.
  문자, 숫자, 논리형, unfinded - 변수를 선언하고 값을 할당하지 않으면 undefined가 저장됨

  참조형 타입(Reference type)
  {
    id : 'tomato'
    pw : '123'
  }
  : 복합 데이터{key : value} - Heap 공간에 담긴다.
  : 값이 위치하고 있는 참조 주소값이 메모리에 저장 - **함수도 객체이다**
  null, array, 객체
    null - 특정 변수의 값을 비워둘때
    array - 연관된 값들을 그룹으로 묶어서 관리
    객체 - Object 데이터를 key라는 인덱싱을 통해서 자료를 구조적으로 묶어놓은 상태
*/

let v;
console.log(v);
v = null;
console.log(v);
console.log(typeof '123');
console.log(typeof null);
console.log(typeof undefined);

let name = 'tomato';
let color = 'red';
let display = '🍅';

let tomato = {
  name : 'tomato',
  color : 'red',
  display : '🍅',
};

console.log(tomato);
console.log(tomato.name);
console.log(tomato.color);

// 원시타입은 값이 복사되어 전달됨
let a = 1;
let b = a;
b = 2;
console.log(a); //1
console.log(b); //2


// '객체타입' 은 참조값(메모리주소, 레퍼런스)이 복사되어 전달된다
let orange = { // 주소번지가 325678번지라면
  name : '오렌지',
} 
let apple = orange; // 325678 주소번지가 그대로 복사된다
apple.name = '사과' // 여기를 주석처리하면 아래 두 라인 모두 오렌지로 출력됨
console.log(orange);
console.log(apple);