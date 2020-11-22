const initialState =  {
  username: '',
  favoritesList: [],
}

const userReducer = (store, action) => {
  switch (action.type) {
    case 'UPDATE_USER_DATA' : 
      return {
        username: action.payload.username,
        id: action.payload.id,

      }
    default : 
     return initialState;
  }
}

export default userReducer;
