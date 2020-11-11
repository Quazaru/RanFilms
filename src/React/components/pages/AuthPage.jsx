import React, {useEffect} from 'react';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import SignInForm from '../SignInForm/SignInForm.jsx';
import formValidator from '../../../js/formValidator';
import postDataForm from '../../../js/postDataForm';
import './styles/AuthPage.scss';

const AuthPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
  formValidator({
  formSelector: '#signup-form',
  triggerSelector: '.sign-form__btn',
  minLength: 3,
  maxLength: 32,
  settings: {
    emailSelector: '#sign-form__email',
  }
})
  postDataForm('#signup-form', '.sign-form__btn')
}, 300);
    setTimeout(() => {
  formValidator({
  formSelector: '#signin-form',
  triggerSelector: '.sign-form__btn',
  minLength: 3,
  maxLength: 32,
  settings: {
    emailSelector: '#sign-form__email',
  }
})
  postDataForm('#signin-form', '.sign-form__btn')
}, 300);
  }, [ ]);
  return (
    <div className="auth-page">
      <div className="auth-page__title">Авторизация</div>
      <div className="auth-page__forms">
        <SignUpForm />
        <div className="auth-page__divider"></div>
        <SignInForm />
      </div>
    </div>
  )
}

export default AuthPage;
