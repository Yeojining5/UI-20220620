  /* *******************nav바 유저이름 유지하기********************* */

 // 유저의 로그인상태 확인 (로그인, 로그아웃, 새로고침 시 실행됨)
  firebase.auth().onAuthStateChanged((user)=>{
    if(user) {
      // if 로그인 상태라면 출력됨, 아니면 null
      console.log("user.uid : "+user.uid);
      console.log("user.displayName : "+user.displayName);
      // $('#userName').html(user.displayName) // span태그에 innerHTML 이 방법은 로딩이 오래걸림
      //localStorage.setItem('정보이름', '값') // 불러오는 속도를 위해 localStorage에 담기
      // '값'은 문자자료형만 가능. user는 object이므로 stringify를 통해 문자로 변환
      localStorage.setItem('user', JSON.stringify(user))  
    }
  })

  // 유저정보 확인
  // 로컬스토리지의 key('user') 빼오기
  let 뺀거 = localStorage.getItem('user')
  if(뺀거 != null) {
  // JSON.parse(뺀거) -> string객체를 json객체로 변환
  $('#userName').html(`${JSON.parse(뺀거).displayName}님 환영합니다!`)
  }


  /* ************************************************************* */
  