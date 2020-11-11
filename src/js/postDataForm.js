import postData from './fetches/postData';

const postDataForm = (formSelector, triggerSelector, condition = true) => {

  const form = document.querySelector(formSelector);
  const trigger = form.querySelector(triggerSelector);
  trigger.addEventListener('click', () => {
    if(condition) {
      let data = new FormData(form);
      data = Object.fromEntries(data);
      postData('https://jsonplaceholder.typicode.com/posts', data)
      const inputList = form.querySelectorAll('input');
      inputList.forEach((item) => {
        item.value = '';
      })
    }
  })

}

export default postDataForm;

