const addbtn = document.querySelector('.btn_add');

addbtn.addEventListener('click', (event) => {
  // 실행문
  const addValue = document.querySelector('.footer_input').value;

  const li = document.createElement("li");

  li.setAttribute('id',addValue);

  const textNode = document.createTextNode(addValue);
    li.appendChild(textNode);

  document
    .querySelector('.items')
    .appendChild(li);
  });

  const del = document.querySelector('.item_delete');

  del.addEventListener('click', (event) => {
    
  })