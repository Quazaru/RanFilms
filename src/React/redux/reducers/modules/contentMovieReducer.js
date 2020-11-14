const contentMovieReducer = (store, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST' :
      return {
        ...store.movies,
        isLoading: true,
        error: null,
        data: [],
      }
    case 'FETCH_MOVIES_ERROR' : 
      return {
        ...store.movies,
        isLoading: false,
        error: action.payload,
        data: [],
      }
    case 'FETCH_MOVIES_SUCCESS' : 
      return {
        ...store.movies,
        isLoading: false, 
        error: false,
        data: action.payload,
      }
  }
}

export default contentMovieReducer;
