'use strict';

// Array✨

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2]; // 흔히 쓰이는 방법

// 2. Index position
const fruits = ['🍉', '🍅'];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]); // 🍉
console.log(fruits[1]); // 🍅
console.log(fruits[fruits.length - 1]); // 🍅 마지막 데이터 뽑아내기

// 3. Looping over an array
// a. for
for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// b. for of
for (let fruit of fruits) {
  console.log(fruit);
}

// c. forEach 
// API 확인할 것! - 파라미터로 (value, index, array)를 넘긴다 
// + 보통 array는 받아오지 않으므로 생략

fruits.forEach(function(fruit, index) {
  console.log(fruit, index);
});

// 위와 같이 이름이없는 함수, anonymous function은 Arrow함수 사용 가능!
fruits.forEach((fruit, index) => {
  console.log(fruit, index);
});

// 1줄의 코드만 있는 경우 {} 생략 가능
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('🍇', '🍑');
console.log(fruits);

// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('🍇', '🍑');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// shift, unshift는 pop push보다 느리다!!

// splice : remove an item by index position
// slice(시작하는 인덱스번호, 지울 개수);
fruits.push('🍇', '🍑');
console.log(fruits);
fruits.splice(1,1);
console.log(fruits);
// ['🍉', '🍅', '🍇', '🍑'] > ['🍉', '🍇', '🍑'] 인덱스1이었던 토마토가 지워짐

fruits.splice(1, 1, '🥝', '🍓'); // 지운자리에 키위랑 딸기를 추가해라
console.log(fruits); // 포토를 지우고 키위 딸기가 들어감 ['🍉', '🥝', '🍓', '🍑']

// combine two arrays
const fruits2 = ['🍍','🍈'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits); // ['🍉', '🥝', '🍓', '🍑', '🍍', '🍈']

console.log(fruits.indexOf('🍉'));
