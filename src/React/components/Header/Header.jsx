import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import variables from '../../../js/_variables';
const {imgPath} = variables;
const Header = (props) => {
  return (
    <header className="header">
      <nav className="container">
      <div className="logo">
            <img src={`${imgPath}icons/logo.svg`} alt="logo"/>
          </div>
        <ul>
          <li>
            <Link to="/" >Главная</Link>
          </li>
          <li>
            <Link to="/random" >Генератор</Link>
          </li>
          <li>
            <Link to="/favorite" >Закладки</Link>
          </li>
          <li>
            <Link to="/auth" >Авторизация</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;