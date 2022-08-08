// 뉴스 예제를 통해서 Router 와 페이지처리,
// html템플릿이 어떤 구조로 만들어질 수 있었는지 그 과정을 훔쳐 본다.

const content = document.createElement('div');
const requestOptions = {
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
//http://api.hnpwa.com/v0/news/1.json

fetch("http://api.hnpwa.com/v0/news/1.json", requestOptions)
  .then(response => response.json())
  .then(result => {
    const ul = document.createElement("ul");
    for(let i=0;i<10;i++){
      const div = document.createElement("div");
      // step1 과 달리 DOM API를 사용하지 않고 백틱기호를 이용하는 방법
      div.innerHTML = `
      <li>
        <a href='#${result[i].id}'>
          ${result[i].title}(${result[i].comments_count});
        </a>
      </li>
      `;
      ul.appendChild(div.firstElementChild);
      document.getElementById("root").appendChild(ul);
      
    }
    document.getElementById("root").appendChild(ul);
    document.getElementById("root").appendChild(content);
  })
  .catch(error => console.log('error', error));

  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    const id = this.location.hash.substring(1) // #31914288에서 첫번째 자리 #은 잘라내고 쓴다
    fetch("http://api.hnpwa.com/v0/item/@id.json".replace("@id", id), requestOptions2)
      .then(response => response.json())
      // callback
      //.then(result => console.log(result))
      .then(result => {
        const title = this.document.createElement("h1");
        title.innerHTML = result.title;
        content.appendChild(title);
      })
      .catch(error => console.log('error', error));
  });

