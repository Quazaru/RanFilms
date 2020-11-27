import contentMovieReducer from './modules/contentMovieReducer';
import userReducer from './modules/userReducer';


const mainReducer = (state, action) => {
  return {
    ...state,
    testMode: true,
    user: userReducer(state, action),
    movies: contentMovieReducer(state, action),
  }
}

export default mainReducer;
