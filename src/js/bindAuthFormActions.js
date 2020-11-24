import formValidator from './formValidator';
import postFormData from './postFormData';

const bindAuthFormActions = (
  {
    formSelector,
    triggerSelector,
    customValidatorSettings = null,
    onSuccessValidation
  }
   ) => {
  const form = document.querySelector(formSelector);
  const trigger = form.querySelector(triggerSelector);
  const validatorSettings = {
      formSelector: formSelector,
      minLength: 3,
      maxLength: 32,
      settings: {
        emailSelector: '#email-input',
      }
    }
    if (customValidatorSettings) {
      Object.assign(validatorSettings, customValidatorSettings)
    }
    trigger.addEventListener('click', () => {
      const isValide = formValidator(validatorSettings)
      if (isValide) { 
        postFormData(formSelector)
          .then(res => res.json())
          .then(serverResponse => onSuccessValidation(serverResponse));
      }
      
    })


}

export default bindAuthFormActions;
