// 변수 선언 시 var를 사용하지 않는다 let. const 사용
// 웹서비스시 비동기적 처리 위해서 제공하는 객체
const ajax = new XMLHttpRequest();
// 해커뉴스 사이트에서 제공하는 뉴스 정보 수집
const NEWS_URL = 'http://api.hnpwa.com/v0/news/1.json'; // 주소 입력
// open함수는 XMLHttpRequest에서 제공하는 함수
// 1. GET or POST, 2. URL - 데이터셋, 3. false 일반적
// GET 방식으로 요청이 되어야 한다
ajax.open('GET', NEWS_URL, false); // true:동기적처리, false:비동기처리
ajax.send();
// console.log(ajax.response); // 출력확인

// URL로 해커뉴스 서버에 요청을 했을 때 응답값을 받아올 수 있다.
//console.log(ajax.response);
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for (let i = 0; i < 5; i++){
  const li = document.createElemnet('li');
  li.innerHTML = newsFeed[i].title; // 여러 정보 중 타이틀 정보만 꺼내올 수 있음
  ul.appendChild(li);

}
documnet.getElementById('root').appendChild(ul);