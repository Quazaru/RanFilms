import React from 'react';
import './SignUpForm.scss';

const SignUpForm = (props) => {
  return (
    <form className="sign-form" id='signup-form'>
      <div className="sign-form__title">
        Регистрация
      </div>
      <div className="sign-form__body">
      <div className="sign-form__input">
        <p>Имя</p>
        <input name="name" type="text" placeholder="Имя"/>
      </div>
      <div className="sign-form__input">
        <p>E-mail</p>
        <input  id="email-input" name="email" type="text" placeholder="E-mail"/>
      </div>
      <div className="sign-form__input">
        <p>Пароль</p>
        <input id="password-input_confirm"  name="password" type="text" placeholder="Пароль"/>
      </div>
      <div className="sign-form__input">
        <p>Подтвердите пароль</p>
        <input id="password-input_confirm" name="password" type="text" placeholder="Пароль"/>
      </div>
      </div>
      <div className="sign-form__btn">
        <div className="main-btn">
          Зарегистрироваться
        </div>
      </div>
    </form>
  )
}

export default SignUpForm;

