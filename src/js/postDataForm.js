import postData from './fetches/postData';

const postDataForm = (formSelector, triggerSelector) => {

  const form = document.querySelector(formSelector);
  const trigger = form.querySelector(triggerSelector);
  console.log(form, trigger);
  trigger.addEventListener('click', () => {
    const data = new FormData(form);
    postData('https://jsonplaceholder.typicode.com/posts', data)
    const inputList = form.querySelectorAll('input');
    inputList.forEach((item) => {
      item.value = '';
    })
  })

}

export default postDataForm;

