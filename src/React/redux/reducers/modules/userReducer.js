const initialState =  {
  username: '',
  id: -1,
  isLogin: false,
}

const userReducer = (store, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA' : 
      return {
        username: action.payload.username,
        id: action.payload.id,
        isLogin: action.payload.isLogin,
      }
      case 'USER_LOGOUT': 
        return {
          ...initialState,
        }
    default : 
     return initialState;
  }
}

export default userReducer;
