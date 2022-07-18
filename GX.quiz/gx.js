// ul안에 li태그 추가하기
const items = document.querySelector('.items'); // ul 클래스명 items

// 사용자가 입력한 운동명을 받기위한 객체 찾기
const input = document.querySelector('.footer_input');

// 버튼 이벤트처리
const btn_add = document.querySelector('.btn_add');


function addItem(){
  // 추가하기
  const text = input.value;
  if(text === ""){
    input.focus();
    return;
  }

  // 아이템 만들기 - ul태그 안에 li태그들을 의미함
  const item = createItem(text); // text = 사용자가 입력한 값(변수_)
  items.appendChild(item);
  // 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({block: 'center'});
  input.value='';
  input.focus();

}


function createItem(text){ ////////////////////////////////
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class','item_row');

  const item = document.createElement('div');
  item.setAttribute('class','item');

  const item_name = document.createElement('span');
  item_name.setAttribute('class','item_name');
  // innerHTML, innerText, textContent 모두 같은 기능
  item_name.innerText = text; 

  const item_delete = document.createElement('button');
  item_delete.setAttribute('class','item_delete');
  item_delete.innerHTML = '<i class="fas fa-trash-alt"></i>';
  item_delete.addEventListener('click', () => {
    items.removeChild(itemRow);
  });
  
  const item_divider = document.createElement('div');
  item_divider.setAttribute('class','item_divider');

  // div에 name 넣기
  item.appendChild(item_name);

  // div에 삭제버튼 넣기
  item.appendChild(item_delete);

  // li 태그에 div넣기 
  itemRow.appendChild(item);

  // li 태그에 구분선 추가하기
  itemRow.appendChild(item_divider);
  return itemRow;
} //////////////////////////////////////////////////////////////


// 추가 버튼 눌렀을 때 item추가하기
btn_add.addEventListener('click', () => {
  // 추가하는 함수 호출하기
  addItem();
  });

// 엔터했을 경우도 동일하게 처리하기
input.addEventListener('keypress', (e) => {
  console.log(e.key);
  if(e.key === 'Enter'){
    addItem();
    }
});





