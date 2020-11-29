import formValidator from './formValidator';
import postFormData from '../postFormData';

const bindAuthFormActions = (
  {
    formSelector,
    triggerSelector,
    customSettings = null,
    onSuccessValidation
  }
   ) => {
  const form = document.querySelector(formSelector);
  const trigger = form.querySelector(triggerSelector);
  let validatorSettings = {
      formSelector: formSelector,
      minLength: 3,
      maxLength: 32,
      settings: {
        emailSelector: '#email-input',
      }
    }
    if (customSettings) {
      customSettings.settings = Object.assign(validatorSettings.settings, customSettings)
    }
    trigger.addEventListener('click', () => {
      const isValide = formValidator(validatorSettings)
      if (isValide) { 
        postFormData(formSelector)
          .then(res => res.json())
          .then(serverResponse => {
            if(customSettings && customSettings.customValidator(serverResponse)) {
              onSuccessValidation(serverResponse);
            }
          });
      }
      
    })


}

export default bindAuthFormActions;
