
let count = 0;
export default function increase(){ // 재사용성, 하나일때는 default 사용, 2개이상~ 안씀
  count ++;
  console.log('increase : '+count);
}

// ES6 부터는 class 지원 시작
// 여러 클래스로 쪼개서 사용 가능 + 재사용
// export default를 함수 앞에 붙이면 타클래스에서 사용 가능