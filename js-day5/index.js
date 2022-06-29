
const ajax = new XMLHttpRequest();
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// 활용해서 dom(html요소-활용->React수업 선수학습)을 조작해보자.
const NEWS_URL = 'http://api.hnpwa.com/v0/news/1.json'; // 주소 입력
const CONTENT_URL = 'http://api.hnpwa.com/v0/item/@id.json';  // 클릭이벤트시 데이터를 바꿔주는 작업이 필요

ajax.open('GET', NEWS_URL, false); // true:동기적처리, false:비동기처리
ajax.send(); // 전송이 일어난다.
// 서버로부터 응답받은 내용을 출력하기
console.log(ajax.response);
const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');

for (let i = 0; i < 30; i++){ /*  < 5를 입력하면 5줄, 30을 입력하면 30줄 */
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href='#';
  //a.innerHTML = newsFeed[i].title('57'); // 여러 정보 중 타이틀 정보만 꺼내올 수 있음
  a.innerHTML = `${newsFeed[i].title}(${newsFeed[i].comments_count})`; // 백틱 기호를 사용할 것
  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);