import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import SignUpForm from '../SignUpForm/SignUpForm.jsx';
import SignInForm from '../SignInForm/SignInForm.jsx';
import bindAuthFormActions from '../../../js/bindAuthFormActions.js';
import './styles/AuthPage.scss';
import userActions from '../../redux/actionCreators/userActions';

const AuthPage = (props) => {
  const {updateUser, history} = props;
  useEffect(() => {
    setTimeout(() => {
      bindAuthFormActions(
        {
          formSelector: '#signup-form',
          triggerSelector: '.sign-form__btn',
          onSuccessValidation: (response) => {
            history.replace('/');
            updateUser({
              username: response.email,
              id: response.id
            });
            
          }
        });
      bindAuthFormActions(
        {
          formSelector: '#signin-form',
          triggerSelector: '.sign-form__btn',
          onSuccessValidation: (response) => {
            history.replace('/');
            updateUser({
              username: response.email,
              id: response.id
            });
          }
        });
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

const mapStateToProps = (state) => {
  console.log(state.user.username);
  return {
    userLogin: state.user.username,
  }
}

const mapDispatchToProps = (dispatch, prevState) =>  {
  return {updateUser: (userData) =>  dispatch(userActions.updateUser(userData))};
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AuthPage));
