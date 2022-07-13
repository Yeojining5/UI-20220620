// 리액트에서 우선순위
// 리액트는 데이터 변경이 있는 경우에만 새로 렌더링을 함
// Array에 추가하기
const colors = ["red", "green", "blue"];
const colors2 = [...colors, "black"];
const colors3 = ["white", ...colors];
console.log(colors2);
console.log(colors3);


