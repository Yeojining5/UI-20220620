// return 을 명시하지 않으면 자스에서는 알아서 undefined를 반환한다
// 함수 중간에 사용하면 함수가 종료됨

function hap(a,b){
  console.log(a+b);
}

let imsi = hap(2,3);
console.log(imsi);

function print2(num){
  if(num < 0) return;
  console.log(num);
}
print2(-5);
print2(5);


// APP
// 입력 - 처리 - 출력

// 특정한 일을 수행하는 코드집합
// 유지보수, 재사용성, 가독성

