const formValidator = ({
  formSelector,
  minLength = 3,
  maxLength = 25,

  settings: {
    customValidator = null,
    identicalInputsSelector = null,
    emailSelector = null,
  }
}) => {
  const form = document.querySelector(formSelector);
  const inputList = form.querySelectorAll('input');
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

    if(identicalInputsSelector) {
      const identicalInputs = form.querySelectorAll(identicalInputsSelector);
      const expectedValue = identicalInputs[0].value;
      identicalInputs.forEach((item) => {
        if (item.value !== expectedValue) {
          isValide = false;
        }
      })
    }
    if (isValide) {
      inputList.forEach((item) => {
        item.classList.remove('icorrect-input');
      })
    }
    if(customValidator && !customValidator()) {
      isValide = false;
    }
  return isValide;
}

export default formValidator;
