import React from 'react';
import './SignUpForm.scss';

const SignUpForm = (props) => {
  return (
    <div className="sign-form">
      <div className="sign-form__title">
        Регистрация
      </div>
      <div className="sign-form__body">
      <div className="sign-form__input">
        <p>Имя</p>
        <input type="text" placeholder="Имя"/>
      </div>
      <div className="sign-form__input">
        <p>E-mail</p>
        <input type="text" placeholder="E-mail"/>
      </div>
      <div className="sign-form__input">
        <p>Пароль</p>
        <input type="text" placeholder="Пароль"/>
      </div>
      <div className="sign-form__input">
        <p>Подтвердите пароль</p>
        <input type="text" placeholder="Пароль"/>
      </div>
      </div>
      <div className="sign-form__btn">
        <div className="main-btn">
          Зарегистрироваться
        </div>
      </div>
    </div>
  )
}

export default SignUpForm;

