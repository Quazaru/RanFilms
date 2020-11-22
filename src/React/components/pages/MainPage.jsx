import React, { useState, useEffect } from 'react';
import withContentDataService from '../../HOC/withContentDataService.jsx';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner.jsx';

import ContentTape from '../ContentTape/ContentTape.jsx';
import {connect} from 'react-redux';
import actions from '../../redux/actionCreators/actions';

const MainPage = (props) => {
  const {fetchMovies, data, isLoading, error} = props;
  useEffect(() => {
    fetchMovies();
  }, [ ]);
  if(error) {
    throw new Error(error);
  }
  if(isLoading) {
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
  const {data, isLoading, error} = state.movies;

  return {
    data, isLoading, error,
  }
}

const mapDispatchToProps = (dispatch, {service}) => {
  

  return {
    fetchMovies: actions.fetchMovies(dispatch, service.getData),
  }
}

export default withContentDataService()(connect(mapStateToProps, mapDispatchToProps)(MainPage));
