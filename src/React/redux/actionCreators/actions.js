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
    dispatch(fetchMoviesRequest());
    fetchService()
      .then(res => {
        dispatch(fetchMoviesSuccess(res));
      })
      .catch(err => dispatch(fetchMoviesError('Failed to get data. :(')))
  }
  
}

export default actions;