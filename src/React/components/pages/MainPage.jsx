import React, { useState, useEffect } from 'react';
import withContentDataService from '../../HOC/withContentDataService.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import ContentTape from '../ContentTape/ContentTape.jsx';
import {connect} from 'react-redux';
import actions from '../../redux/actionCreators/actions';

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

const mapStateToProps = (state) => {
  console.log('====================================');
  console.log(state.data);
  console.log('====================================');
  return {
    data: state.movies.data,
    isLoadiing: state.movies.isLoading,
    error: state.movies.error,
  }
}

const mapDispatchToProps = (dispatch, prevState) => {
  return {
    fetchMovies: actions.fetchMovies(dispatch, ),
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(withContentDataService()(MainPage));
