// 뉴스 예제를 통해서 Router 와 페이지처리,
// html템플릿이 어떤 구조로 만들어질 수 있었는지 그 과정을 훔쳐 본다.

// 페이징 처리에 필요한 변수 선언하기
//////////////////////////////////// insert here - currentPage -> react에서는 redux

const store = {
  currentPage : 1,
}
const NEW_URL = "http://api.hnpwa.com/v0/news/1.json";
const CONTENT_URL = "http://api.hnpwa.com/v0/item/@id.json";
const container = document.getElementById("main");
const content = document.createElement('div');
const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

function getNewsList(){
  console.log('getNewsList 호출 성공');
  fetch(NEW_URL, requestOptions)
  .then(response => response.json())
  .then(result => {
    const newsList = [];
    newsList.push("<ul>");
    ////////////////////////////// insert here - 페이징 처리를 고려한 for문으로 변경 !!!
    for(let i=(store.currentPage-1) * 10; i < store.currentPage * 10; i++){
    //for(let i=0;i<30;i++){
      newsList.push(`
      <li>
        <a href='#${result[i].id}'>
          ${result[i].title}(${result[i].comments_count});
        </a>
      </li>
      `);
      } ////////////////// end of for
      newsList.push("</ul>");
        /////////////////////////insert here[이전페이지: 현페에서 -1을함] - #/pare/이동할 페이지 번호
        // 삼항연산자 -> 조건문 ? 참일때 : 거짓일때
        // 조건문 ? 현페-1 : 1

        /////////////////////////insert here[다음페이지: 현페에서 +1을함] - #/pare/이동할 페이지 번호
        newsList.push(`
        <div>
          <a href="#/page/${store.currentPage > 1 ? store.currentPage - 1: 1}">이전페이지</a>
          <a href="#/page/${store.currentPage + 1}">다음페이지</a>
        </div>
        `);
        /* 
        
        <div>
          <a href="#/page/현페 >1 ? 현페-1 : 1"> 이전페이지 </a>
          <a href="#/page/현페+1"> 다음페이지 </a>
        </div>

        */
        
        
        container.innerHTML = newsList.join("");
        // container.appendChild(ul);
        // container.appendChild(content);
  })
      .catch(error => console.log('error', error));
} /////////////////// end of getNewsList()


  const requestOptions2 = {
    method: 'GET',
    redirect: 'follow'
  };
  
  function getNewsContent(){
    const id = this.location.hash.substring(1) // #31914288에서 첫번째 자리 #은 잘라내고 쓴다
    fetch(CONTENT_URL.replace("@id", id), requestOptions2)
      .then(response => response.json())
      .then(result => {
        container.innerHTML = `
        <h1>${result.title}</h1>
        <div>
          <a href="#/page/${store.currentPage}">목록으로</a>
        </div>
        `;
      })
      .catch(error => console.log('error', error));
  }

  function router() {
    // console.log(location.hash); // #/page/2 이 값은 hashvalue에 들어있다
    const hashValue = location.hash;
    // http://localhost:5000/index.html#   -> 얘가 디폴트, 처음일 때
    // http://localhost:5000/index.html#3214567
    // 첫 진입이면
    if(hashValue === ""){
      getNewsList();
      } 
      // #/page/2 숫자 2(currentPage)는 이동해야 되는 이전페이지 번호임
      // "http://localhost:5000/index.html#/page/2" 가 있는거야? 
      else if(hashValue.indexOf("#/page/") >= 0) {
        // hashValue.substring(7);// 문자열
        //현페 = Number(x)
        store.currentPage = Number(hashValue.substring(7));
        console.log(store.currentPage); // 상세보기 전에 페이지 정보를 확인
        getNewsList();
      }
      
      else {
        getNewsContent();
      }
  } ///////////////// end of router

  window.addEventListener("hashchange", router); // 이벤트 핸들러 매핑
  router();


  // 라우터에서 화면 전환하는 걸 구현해 본다
  // 뉴스 내용 보기를 화면 전환을 통해서 재구성 해보기
  // 조건에 따라 화면 전환이 일어나야 하므로
  // 조건문에 함수 호출을 통해서 이 문제를 해결해 본다.
  // 무엇을 기준할 것인가?
  /* 
    글목록의 링크는 #이었음 그러면 location.hash에 #이 들어왔음
    그러면 이것으로 어떻게 참 거짓을 나눌 수 있지?
    location.hash에 #만 들어오면 빈값을 반환함
    첫 진입일때는 getNewsList호출하고
    해시값이 존재하면 getNewsContent 호출한다.
  */



