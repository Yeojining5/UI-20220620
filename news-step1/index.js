// 뉴스 예제를 통해서 Router 와 페이지처리,
// html템플릿이 어떤 구조로 만들어질 수 있었는지 그 과정을 훔쳐 본다.
var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

/* 
  <ul>
    <li></li>
    <li></li>
    <li></li>
  </ul>
*/

fetch("http://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    const ul = document.createElement("ul");
    for(let i=0;i<10;i++){
      const li = document.createElement("li")
      const a = document.createElement("a");
      a.href='#';
      a.innerHTML = `${result[i].title}(${result[i].comments_count})`;
      //li.innerHTML = result[i].title;
      li.appendChild(a);
      ul.appendChild(li);
    }
    document.getElementById("root").appendChild(ul);
  })
  .then(error => console.log('error', error));
