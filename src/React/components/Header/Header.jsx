import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import userActions from '../../redux/reducers/modules/userReducer';
import './Header.scss';
import variables from '../../../js/_variables';
const {imgPath} = variables;
const Header = (props) => {
  const {username, isLogin, logOut} = props;

  const authorizationPlate = (
    <Link to="/auth" >Авторизация</Link>
  );

  const profilePlate = (
    <div className="profile-plate">
      <div className="profile-plate__username" >
        <p>
          {username}
        </p>
      </div>
      <div className="profile-plate__menu-trigger">&#9776;</div>
      <div className="profile-plate__menu">
        <ul>
          <li>Профиль</li>
          <li>Выйти</li>
        </ul>
      </div>
    </div>
  );

  return (
    <header className="header">
      <nav className="container">
      <div className="logo">
            <img src={`${imgPath}icons/logo.svg`} alt="logo"/>
          </div>
        <ul className="header__links">
          <li className="nav-link">
            <Link to="/" >Главная</Link>
          </li>
          <li className="nav-link">
            <Link to="/random" >Генератор</Link>
          </li>
          <li className="nav-link">
            <Link to="/favorite" >Закладки</Link>
          </li>
          <li className="nav-link">
            {isLogin ? profilePlate : authorizationPlate}
          </li>
        </ul>
      </nav>
    </header>
  )
}

const mapStateToProps = ({user}) => {
  const {isLogin, username} = user;
  return { isLogin, username, }
}

const mapDispatchToProps = (dispatch, prevState) => {
  return {
    logOut: userActions.logOut,
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header);