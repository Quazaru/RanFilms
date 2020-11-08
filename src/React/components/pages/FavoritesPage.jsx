import React, { useState, useEffect } from 'react';
import withContentDataService from '../../HOC/withContentDataService.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';
import ContentTape from '../ContentTape/ContentTape.jsx';

import './styles/FavoritesPage.scss';

const FavoritesPage = ({service}) => {
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
    return (
      <div className="favorite-page">
        <div className="favorite-page__title">Ваши закладки:</div>
        <div className="favorite__tape">
          <ContentTape mode="min" data={data}/>
        </div>
      </div>
    )
  }
}

export default withContentDataService()(FavoritesPage);
