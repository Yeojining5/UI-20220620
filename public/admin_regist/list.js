import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore,  } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, orderBy , query} from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

// 자기꺼 복사 붙여 넣기 해야 됩니다.
const firebaseConfig = {
  apiKey: "AIzaSyCrA0QQH5QpbtWdyVbrQB72APSQxH3cjl4",
  authDomain: "semi-intelligym.firebaseapp.com",
  databaseURL: "https://semi-intelligym-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "semi-intelligym",
  storageBucket: "semi-intelligym.appspot.com",
  messagingSenderId: "925436106266",
  appId: "1:925436106266:web:5e064d6b621ccb9dfd63a3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const tbody = $('#tbody_list');
// let num = 0;

// const q = query(collection(db, "board"), orderBy("작성일", "asc"));

// const querySnapshot = await getDocs(q);
// querySnapshot.forEach((doc) => {
//   console.log(doc.data());
//   const template = `
//     <tr>
//       <th scope="row">${++num}</th>
//       <td><a href="./modal.html?id=${doc.id}">${doc.data().제목}</a></td>
//       <td>${doc.data().작성자}</td>
//       <td>${doc.data().작성일}</td>
//     </tr>
//   `;
//   tbody.append(template)
// })

const upload = document.querySelector('#upload'),
      class_num = document.querySelector('#class_num'),
      class_name = document.querySelector('#class_name'),
      teacher = document.querySelector('#teacher'),
      class_time = document.querySelector('#class_time'),
      apply = document.querySelector('#apply'),
      limit = document.querySelector('#limit');
      // date = newdate();


upload.addEventListener('click',()=>{
  const data = {
    강의번호 : class_num.value,
    강의명 : class_name.value,
    강사명 : teacher.value,
    강의시간 : class_time.value,
    신청인원 : apply.value,
    제한인원 : limit.value,
  }

  const docRef = addDoc(collection(db, "center_gangnam"), data).then(()=>{
    location.reload();
  });
});

function newdate(){
  let today = new Date();

  var hours = ('0' + today.getHours()).slice(-2); 
  var minutes = ('0' + today.getMinutes()).slice(-2);
  var seconds = ('0' + today.getSeconds()).slice(-2); 
  
  var timeString = hours + ':' + minutes  + ':' + seconds;

  let year = today.getFullYear();
  let month = ('0' + (today.getMonth() + 1)).slice(-2);
  let day = ('0' + today.getDate()).slice(-2);

  let dateString = year + '-' + month  + '-' + day;
  return dateString+" ["+timeString+"]"; 
}