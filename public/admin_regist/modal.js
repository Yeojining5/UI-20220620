import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js"
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { getDoc, doc } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"

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

$(document).ready(function(){
  let params = new URLSearchParams(document.location.search);
  let id = params.get("id");
  console.log(id);

  $('#staticBackdrop').modal("show");

  const readModal = document.getElementById('staticBackdrop');
  readModal.addEventListener('shown.bs.modal', async () => {

    const docRef = doc(db, "board", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      $('#staticBackdropLabel').text(docSnap.data().제목);
      $('.content').text(docSnap.data().내용);
      $('.writer').text(docSnap.data().작성자);
      $('.date').text(docSnap.data().작성일);
    } else {
      alert("No such document!");
    }
    
  })
})


const closebtn = document.querySelector('#close');
closebtn.addEventListener('click',function(){
  location.href = 'http://127.0.0.1:62865/list.html';
})

