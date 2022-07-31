const a = document.querySelector("a");


a.addEventListener('click', (event) => {
  // a태그가 링크가 걸려 있지만 
  // 아래 코드가 있어서 네이버 페이지로 이동이 안됨.
  // 파라미터로 event 객체가 주입이 되었다.
  //event.preventDefault(); // 페이지 이동을 막아줌
  console.log("2 네이버 클릭");
})

const box = document.querySelector(".box");
box.addEventListener('mousemove', (event) => {
  console.log(event); // div box에 마우스를 올릴때마다 좌표값이 찍힘
  console.log(`${event.pageX}`);
  console.log(`${event.pageY}`);
  console.log(`${event.offsetX}`);
  console.log(`${event.offsetY}`);
});
