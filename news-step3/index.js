// 뉴스 예제를 통해서 Router 와 페이지처리,
// html템플릿이 어떤 구조로 만들어질 수 있었는지 그 과정을 훔쳐 본다.

const NEW_URL = "http://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "http://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
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

fetch(NEW_URL, requestOptions)
  .then(response => response.json())
  .then(result => {
    console.log(result);
    const ul = document.createElement("ul");
    
    for(let i=0;i<10;i++){
      const div = document.createElement("div");
      div.innerHTML = `
      <li>
        <a href='#${result[i].id}'>
          ${result[i].title}(${result[i].comments_count});
        </a>
      </li>
      `;
      ul.appendChild(div.firstElementChild);
      container.appendChild(ul);
      //document.getElementById("main").appendChild(ul);
    }
    container.appendChild(ul);
    container.appendChild(content);
    // document.getElementById("main").appendChild(ul);
    // document.getElementById("main").appendChild(content);
  })
  .catch(error => console.log('error', error));

  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  window.addEventListener("hashchange", () => {
    console.log(location.hash);
    const id = this.location.hash.substring(1) // #31914288에서 첫번째 자리 #은 잘라내고 쓴다
    fetch(CONTENT_URL.replace("@id", id), requestOptions2)
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
