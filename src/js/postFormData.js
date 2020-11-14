import postData from './fetches/postData';

const postFormData = (formSelector) => {

  const form = document.querySelector(formSelector);
  let reflected = null;
  let data = new FormData(form);
  data = Object.fromEntries(data);
  postData('https://jsonplaceholder.typicode.com/posts', data)
    .then(response => response.json())
    .then(res => {
      localStorage.setItem('auth-response', JSON.stringify(res));
    });
  const inputList = form.querySelectorAll('input');
  inputList.forEach((item) => {
    item.value = '';
  })
    
}

export default postFormData;

