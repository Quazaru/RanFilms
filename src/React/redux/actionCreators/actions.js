const actions = {
  fetchMoviesRequest: () => {
    return {
      type: 'FETCH_MOVIES_REQUEST',
    }
  },
  fetchMoviesError: (data) => {
    return {
      type: 'FETCH_MOVIES_ERROR',
      payload: data,
    }
  },
  fetchMoviesSuccess: (data) => {
    return {
      type: 'FETCH_MOVIES_SUCCESS',
      payload: data,
    }
  },
  fetchMovies: (dispatch, fetchService) => () => {
    
    dispatch(actions.fetchMoviesRequest());
    fetchService()
      .then(res => {
        dispatch(actions.fetchMoviesSuccess(res));
      })
      .catch(err => actions.fetchMoviesError('Failed to get data'));
  }
  
}

export default actions;