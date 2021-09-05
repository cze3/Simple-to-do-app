const myForm = document.querySelector('#myform');
const input = document.querySelector('#thing');
const list = document.querySelector('#list');
const error = document.querySelector('.error');
myForm.addEventListener('submit', onSubmit);
function onSubmit (e) {
  e.preventDefault();
  if(input.value ===''){
    error.classList.add('errormsg');
    error.innerHTML = 'please enter somthing to list';
  }
  else{
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(`${input.value}`));
    list.appendChild(li);
    input.value='';
  }
}