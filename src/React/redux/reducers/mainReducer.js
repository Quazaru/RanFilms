import contentMovieReducer from './modules/contentMovieReducer';
import userReducer from './modules/userReducer';


const mainReducer = (store, action) => {
  return {
    ...store,
    testMode: true,
    user: userReducer(store, action),
    movies: contentMovieReducer(store, action),
  }
}

export default mainReducer;
