import React from 'react';

import './SignInForm.scss';

const SignInForm = (props) => {
  return (
    <form className="sign-form" id='signin-form'>
      <div className="sign-form__title">
        Вход
      </div>
      <div className="sign-form__body">
      <div className="sign-form__input">
        <p>E-mail</p>
        <input id="email-input" name="email" type="text" placeholder="E-mail" maxLength="24"/>
      </div>
      <div className="sign-form__input">
        <p>Пароль</p>
        <input name="password" type="text" placeholder="Пароль" maxLength="24"/>
      </div>
      </div>
      <div className="sign-form__btn">
        <div className="main-btn">
          Войти
        </div>
      </div>
    </form>
  )
}

export default SignInForm;
