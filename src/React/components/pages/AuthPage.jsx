import React from 'react';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import SignInForm from '../SignInForm/SignInForm.jsx';
import './styles/AuthPage.scss';

const AuthPage = (props) => {
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
