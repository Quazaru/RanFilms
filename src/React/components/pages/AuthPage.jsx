import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import updateUser from '../../redux/actionCreators/userActions';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import SignInForm from '../SignInForm/SignInForm.jsx';
import bindAuthFormActions from '../../../js/bindAuthFormActions.js';
import './styles/AuthPage.scss';
import userActions from '../../redux/actionCreators/userActions';

const AuthPage = (props) => {
  useEffect(() => {
    setTimeout(() => {
      bindAuthFormActions(
        {
          formSelector: '#signup-form',
          triggerSelector: '.sign-form__btn',
          onSuccessValidation: (response) => {
            props.updateUser({
              username: response.email,
              id: response.id
            })
          }
        });
      bindAuthFormActions(
        {
          formSelector: '#signin-form',
          triggerSelector: '.sign-form__btn',
          onSuccessValidation: (response) => {
            props.updateUser({
              username: response.email,
              id: response.id
            })
          }
        });
    }, 300);
  }, [ ]);
  return (
    <div className="auth-page">
      <div className="auth-page__title">Авторизация {props.userLogin}</div>
      <div className="auth-page__forms">
        <SignUpForm />
        <div className="auth-page__divider"></div>
        <SignInForm />
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state.user.username);
  return {
    userLogin: state.user.username,
  }
}

const mapDispatchToProps = (dispatch, prevState) =>  {
  return {updateUser: (userData) =>  dispatch(userActions.updateUser(userData))};
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
