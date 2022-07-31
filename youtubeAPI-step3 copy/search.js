/* String ver , +연산자 사용 */

function searchList(){
  const query = document.querySelector('.input').value;
  console.log('사용자가 입력한 검색어 : '+query);
  const requestOption = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch('https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxresults=25&q=${query}&key=AIzaSyCC6kTd9ZieqFrFMVZaceC2-z6p0OjWSAY=video');
    .then(response => response.json())
    .then(result => console.log(result))
    .then(items => console.log(result.items))
    .catch(error => console.log('error', error));
  
    const videoList = [];
    const items = result.items; // Array
    console.log(items.length); // 25

  videoList.push(`<ul class='videos'>`);
  for(let i=0;i<items.length;i++){
    videoList.push(`<li class='container'>`);
    videoList.push(`<div class='video'>`);
    videoList.push(`<img class='thumbnail' src='${items[i].snippet.thumbnails.medium.url}' alt='이미지'/>`);
    videoList.push(`<div>`);
    videoList.push(`<p class='title'>${items[i].snippet.title}</p>`);
    videoList.push(`<p class='channel'>${items[i].snippet.channelTitle}</p>`);
    videoList.push(`</div>`);
    videoList.push(`</div>`);
  }
  videoList.push(`</ul>`);
  document.querySelector('#root').innerHTML = videoList.join("");
} //////////// end of searchList