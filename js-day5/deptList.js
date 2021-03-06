const ajax = new XMLHttpRequest();
// 오라클 서버를 경유해서 가져오는 대신에 해커뉴스에서 제공하는 데이터셋을
// 활용해서 dom(html요소-활용->React수업 선수학습)을 조작해보자.
const DEPT_URL = 'http://localhost:8000/deptToJSON.jsp'; // 주소 입력

ajax.open('GET', DEPT_URL, false); // true:동기적처리, false:비동기처리
ajax.send(); // 전송이 일어난다.
// 서버로부터 응답받은 내용을 출력하기
console.log(ajax.response);

const depts = JSON.parse(ajax.response);
console.log('size : ',depts.length);

const table = document.createElement('table');
table.setAttribute('border', 1);
table.setAttribute('width', 400);

const htr = document.createElement('tr');
const th1 = document.createElement('th');
th1.appendChild(document.createTextNode('부서번호'));
const th2 = document.createElement('th');
th2.appendChild(document.createTextNode('부서명'));
const th3 = document.createElement('th');
th3.appendChild(document.createTextNode('지역'));

htr.appendChild(th1);
htr.appendChild(th2);
htr.appendChild(th3);
table.appendChild(htr);

for (let i = 0; i<depts.length; i++){
  const tr = document.createElement('tr');

  const td1 = document.createElement('td');
  td1.setAttribute('width','90');
  td1.appendChild(document.createTextNode(`${depts[i].deptno}`));

  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode(`${depts[i].dname}`));

  const td3 = document.createElement('td');
  td3.appendChild(document.createTextNode(`${depts[i].loc}`));

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  table.appendChild(tr);
}
document.getElementById('root').appendChild(table);


/*   td1.appendChild(document.createTextNode('1'));

  const td2 = document.createElement('td');
  td2.appendChild(document.createTextNode('11'));

  const td3 = document.createElement('td');
  td3.appendChild(document.createTextNode('111'));

  tr.innerHTML = depts[i].table('tr');  */