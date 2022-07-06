/* String ver , +연산자 사용 */

const ajax = new XMLHttpRequest(); // 인스턴스화
let content = '';
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxresults=5&key=AIzaSyCC6kTd9ZieqFrFMVZaceC2-z6p0OjWSAY";
ajax.open("GET", MOST_URL, false);
ajax.send();

//console.log(ajax.response);
const result = JSON.parse(ajax.response); // { ... items:[{snippet:...}]}
const items = result.items; // Array
console.log(items.length); // 25
content += `<ul class='videos'>`
for(let i=0;i<items.length;i++){
  content += `<li class='container'>`
  content += `<div class='video'>`
  // console.log(items[i].snippet.title); // 타이틀 5개가 콘솔에 출력됨
  // console.log(items[i].snippet.thumbnails.medium.url);
  
  content += `<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`;
  content += `<div>`;
  content += `<p class='title'>${items[i].snippet.title}</p>`; 
  content += `<p class='channel'>${items[i].snippet.channelTitle}</p>`;
  content += `</div>`;
  content += `</div>`;
}
content += `</ul>`;
document.querySelector('#root').innerHTML = content;

