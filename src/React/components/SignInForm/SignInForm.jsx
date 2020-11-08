import React from 'react';

import './SignInForm.scss';

const SignInForm = (props) => {
  return (
    <div className="sign-form">
      <div className="sign-form__title">
        Вход
      </div>
      <div className="sign-form__body">
      <div className="sign-form__input">
        <p>E-mail</p>
        <input type="text" placeholder="E-mail"/>
      </div>
      <div className="sign-form__input">
        <p>Пароль</p>
        <input type="text" placeholder="Пароль"/>
      </div>
      </div>
      <div className="sign-form__btn">
        <div className="main-btn">
          Войти
        </div>
      </div>
    </div>
  )
}

export default SignInForm;
