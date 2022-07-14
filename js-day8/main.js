const a = document.querySelector("a");
// console.log(a);
//console.dir(a); // DOM 구조를 본다

a.onclick = (event) => {
  // 이벤트 핸들러는 event 객체 주입이 안된다
  // 그러니까 사용할 수 없다.
  // 그러니까 이렇게 이벤트 처리하면 헤어진다..!! > addEventListener
  // 객체주입을 직접했음. 브라우저에서 해줌
  event.preventDefault();
  console.log("네이버 클릭");
}
// 다른 개발자가 실수로 이벤트를 또 주면 이벤트가 덮어진다.
a.onclick = () => {
  console.log("네이버 다시 클릭");
}

a.addEventListener('click', () => {
  console.log("2 네이버 클릭");
})
a.addEventListener('click', () => {
  console.log("2 네이버 다시 클릭");
})
