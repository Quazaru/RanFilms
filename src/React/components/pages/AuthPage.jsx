import React, {useEffect} from 'react';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import SignInForm from '../SignInForm/SignInForm.jsx';
import bindAuthFormActions from '../../../js/bindAuthFormActions.js';
import './styles/AuthPage.scss';

const AuthPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      bindAuthFormActions('#signup-form', '.sign-form__btn');
      bindAuthFormActions('#signin-form', '.sign-form__btn');
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
