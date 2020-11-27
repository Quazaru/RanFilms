const initialState = {
  isLoading: true,
  error: null,
  data: [],
}

const contentMovieReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_REQUEST' :
      return {
        ...state.movies,
        isLoading: true,
        error: null,
        data: [],
      }
    case 'FETCH_MOVIES_ERROR' : 
      return {
        ...state.movies,
        isLoading: false,
        error: action.payload,
        data: [],
      }
    case 'FETCH_MOVIES_SUCCESS' : 
      return {
        ...state.movies,
        isLoading: false, 
        error: null,
        data: action.payload,
      }
    default : 
    console.log(state);
    return state ? state.movies : initialState;
  }
}

export default contentMovieReducer;
