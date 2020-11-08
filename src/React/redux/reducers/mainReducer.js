import contentDataReducer from './modules/contentDataReducer';
import userReducer from './modules/userReducer';


const mainReducer = (store, action) => {
  return {
    ...store,
    user: userReducer(store, action),
    contentData: contentDataReducer(store, action),
  }
}

export default mainReducer;
