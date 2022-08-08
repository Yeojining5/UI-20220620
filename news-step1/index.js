// 뉴스 예제를 통해서 Router 와 페이지처리,
// html템플릿이 어떤 구조로 만들어질 수 있었는지 그 과정을 훔쳐 본다.
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

/* 
  <ul>
    <li><a href='#'>a</a></li> 아래 반복분에서 li태그를 돌린 것
    <li><a href='#'>a</a></li>
    <li><a href='#'>a</a></li>
  </ul>
*/

fetch("http://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    // 자바스크립트로 태그를 만들기
    const ul = document.createElement("ul");
    for(let i=0;i<10;i++){
      const li = document.createElement("li")
      li.innerHTML = result[i].title; // 텍스트 노드 추가
      ul.appendChild(li);
    }
    document.getElementById("root").appendChild(ul);
  })
  .catch(error => console.log('error', error));

  /* 
  문제제기
  DOM 구성을 코드적으로 작성하니 태그들의 위치, 위계, 구조가 명확하게 보이지 않는다

  어떻게하면 개선할 수 있지??
  해결 방법은 DOM API자체를 최대한 사용하지 않는다
  예컨데 createElemnet , appendChild, innerHTML 등을 말함
  */
