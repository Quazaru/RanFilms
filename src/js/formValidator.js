const formValidator = ({
  formSelector,
  triggerSelector,
  minLength = 3,
  maxLength = 25,
  settings: {
    signupPasswordSelector = null,
    emailSelector = null,
  }
}) => {
  const form = document.querySelector(formSelector);
  const inputList = form.querySelectorAll('input');
  const trigger = form.querySelector(triggerSelector);

  trigger.addEventListener('click', () => {
    let isValide = true;
    inputList.forEach((item) => {
      item.classList.remove('icorrect-input');
      if (item.value.length < minLength || item.value.length > maxLength ) {
        item.classList.add('icorrect-input');
        isValide = false;
      }

    })
    if (emailSelector) {
      const emailInputList = form.querySelectorAll(emailSelector);
      emailInputList.forEach((item) => {
        item.classList.remove('icorrect-input');
        if(item.value.indexOf('@') == -1) {
          item.classList.add('icorrect-input');
          isValide = false;
        }
      })
    }

    if (isValide) {
      inputList.forEach((item) => {
        item.classList.remove('icorrect-input');
      })
    }
  })
}

export default formValidator;
