const btns = document.querySelectorAll('ul li');

/*  ES5 - var - 전역변수와 지역변수 -  버그의 원인이 됨 (위 구문에서 3만 출력)
 ES6 - let 변경 (1 2 3 모두 출력됨)
 호이스팅
 블록 안에서 선언된 지역변수가 코드 블록 밖으로 나와 강제로 전역변수화 됨 */

for (var i =0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    console.log(i);
  })
}
// 호이스팅 문제를 즉시실행함수로 해결함
// 3
// index => 0   index => 1   index => 2  이런식으로 변경
for (var x =0; x < btns.length; x++) {
  ((index) => {
    btns[x].addEventListener('click', () => {
      console.log('index => ',index);
    });
  }) (x);
}

