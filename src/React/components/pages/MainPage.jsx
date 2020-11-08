import React, { useState, useEffect } from 'react';
import withContentDataService from '../../HOC/withContentDataService.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import ContentTape from '../ContentTape/ContentTape.jsx';


const MainPage = ({service}) => {
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
      <ContentTape data={data} />
    )
  }
}

export default withContentDataService()(MainPage);
