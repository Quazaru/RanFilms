import postData from './fetches/postData';

const postFormData = (formSelector) => {

  const form = document.querySelector(formSelector);
  let reflected = null;
  let data = new FormData(form);
  data = Object.fromEntries(data);
  const inputList = form.querySelectorAll('input');
  inputList.forEach((item) => {
    item.value = '';
  })
  return postData('https://jsonplaceholder.typicode.com/posts', data)
          
          


    
}

export default postFormData;

