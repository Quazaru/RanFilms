import { createElement } from 'react';
import './Toast.scss';

const generateDOM = ({
  customClass =  '',
}) => {
  const newToast = document.createElement("div");
  newToast.classList.add(customClass ? customClass  : '');
  newToast.id = 'toast'

}

class Toast {

  constructor(parentNodeSelector = 'body') {
    this.parentNodeList = document.querySelectorAll(parentNodeSelector);
  }


  generateDOM ({
    message = '',
    textContentType = 'information',
    customClass =  '',
  }) {
    const toastWrapper = document.createElement("div");
    const toast = document.createElement("div");
    toastWrapper.insertAdjacentElement('afterbegin', toast);
    toastWrapper.classList.add('animate__animated');
    toast.classList.add(customClass ? customClass  : '', 'toast',);
    toastWrapper.id = 'toast';

    const toastMessage = document.createElement("p");
    toastMessage.textContent = message;
    toastMessage.classList.add('toast__message', 'toast_message_' + textContentType);

    toast.insertAdjacentElement('afterbegin' ,toastMessage);

    return toastWrapper;
  }

  bindToast(toast, position = 'center') {
    toast.classList.add('toast_' + position);
    this.parentNodeList.forEach(item => {
      item.insertAdjacentElement('afterbegin', toast);
    });
  }

  createNewToast({
    message, type, position, customClass
  }) {
    const toast = this.generateDOM({message, type, customClass});
    this.bindToast(toast, position);
    return toast;
  }
  show({
    message, customClass, position
  }) {

    this.parentNodeList.forEach((item) => {
      let toast = this.createNewToast({
        message,
        customClass,
        position
      });
      toast.classList.add('toast_visible', 'animate__bounceIn');
      item.insertAdjacentElement('afterbegin', toast);
    })

    setTimeout(() => {
      this.parentNodeList.forEach((item) => {
        toast.classList.add('animate__flipOutX');
        toast.classList.remove('animate__bounceIn');
        item.insertAdjacentElement('afterbegin', toast);
      })
      setTimeout(() => {
        toast.remove();
        toast.classList.remove('toast_visible', 'animate__bounceIn','animate__fadeOutDown');
      }, 500);
      }, 2000);
      
    }
  showIn(selector) {

  }
}

export default Toast;