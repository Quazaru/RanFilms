import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import withContentDataService from '../../HOC/withContentDataService.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';
import ContentTape from '../ContentTape/ContentTape.jsx';

import './styles/FavoritesPage.scss';

const needToAuthPage = (
  <div className="need-to-auth">
    <p className="need-to-auth__title">Для просмотра данного раздела войдите или зарегистрируйтесь</p>
    <Link to="/auth">
      <div className="need-to-auth__btn main-btn">
        К авторизации
      </div>
    </Link>
  </div>
)

const FavoritesPage = ({service, isLogin}) => {

  const [data, setData] = useState(null);
  useEffect(() => {
  service.getData().then(res => {
    setData(res);
  });
  }, [ ])

  if(!data) {
    return (
      <LoadingSpinner />
    )
  } else {
    if(isLogin) {
      return (
        <div className="favorite-page">
          <div className="favorite-page__title">Ваши закладки:</div>
          <div className="favorite__tape">
            <ContentTape mode="min" data={data}/>
          </div>
        </div>
      )
    } else {
      return needToAuthPage;
    }
    
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.user.isLogin,
  }
}

export default withContentDataService()
                (connect(mapStateToProps)(FavoritesPage));
