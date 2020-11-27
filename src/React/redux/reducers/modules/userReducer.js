const initialState =  {
  username: '',
  id: -1,
  isLogin: false,
  favoritesList: []
}

const userReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA' : 
    
      return {
        username: action.payload.username,
        id: action.payload.id,
        isLogin: action.payload.isLogin,
        favoritesList: [],
      }
      case 'USER_LOGOUT': 
        return initialState
      case 'GET_USER_FAVORITES': 
        return {
            username: action.payload.username,
            id: action.payload.id,
            isLogin: action.payload.isLogin,
            favoritesList: action.payload,
        }
    default : 
     return state ? state.user : initialState;
  }
}

export default userReducer;
