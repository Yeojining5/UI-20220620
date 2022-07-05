const ajax = new XMLHttpRequest();
const MOST_URL = "https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostpopular&maxresults=25&key=AIzaSyCC6kTd9ZieqFrFMVZaceC2-z6p0OjWSAY";
ajax.open("GET", MOST_URL, false);
ajax.send();

console.log(ajax.response);
/* const most = JSON */