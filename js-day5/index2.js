
const ajax = new XMLHttpRequest();
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// 활용해서 dom(html요소-활용->React수업 선수학습)을 조작해보자.
const NEWS_URL = 'http://api.hnpwa.com/v0/news/1.json'; // 주소 입력
const CONTENT_URL = 'http://api.hnpwa.com/v0/item/@id.json';  // 클릭이벤트시 데이터를 바꿔주는 작업이 필요

ajax.open('GET', NEWS_URL, false); // true:동기적처리, false:비동기처리
ajax.send(); // 전송이 일어난다.
// 서버로부터 응답받은 내용을 출력하기
//console.log(ajax.response);

/////////////// 어떻게 클릭했는지 알 수 있는거니?
// 일급함수라서 함수의 주소번지를 넘긴다 -  function()
// URL에 파라미터가 조금이라도 달라지면 새로운 요청이라고 판단하니까 서버에 재요청이 일어날 수 있다.
// GET방식 이더라도... (원래 GET방식은 브라우저가 인터셉트해서 최초의 요청에대한 정보를 메모리에 기억하고 있다가 반환. 즉 동기화가X)
// 이러한 문제를 hashchange 로 잡아내겠다...
window.addEventListener('hashchange', function() {
  const id = location.hash.substr(1); // # 이 사라짐...
  //console.log('id : ',id); // id :  31914288
  //console.log(location.hash); // #31914288
  ajax.open('GET', CONTENT_URL.replace('@id',id), false); 
  ajax.send(); // 전송
  const newContent = JSON.parse(ajax.response);
  this.alert('사용자가 선택한 뉴스 제목은?'+newContent.title);
  console.log(newContent);
}); 

const newsFeed = JSON.parse(ajax.response);
const ul = document.createElement('ul');
for (let i = 0; i < 30; i++){ /*  < 5를 입력하면 5줄, 30을 입력하면 30줄 */
  const li = document.createElement('li');
  const a = document.createElement('a');
  /////////////////////////////////////////////////
  a.href=`#${newsFeed[i].id}`;
  //a.innerHTML = newsFeed[i].title('57'); // 여러 정보 중 타이틀 정보만 꺼내올 수 있음
  a.innerHTML = `${newsFeed[i].title}(${newsFeed[i].comments_count})`; // 백틱 기호를 사용할 것
  li.appendChild(a);
  ul.appendChild(li);
}

document.getElementById('root').appendChild(ul);