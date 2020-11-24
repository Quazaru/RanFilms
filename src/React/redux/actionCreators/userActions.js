const userActions = {
  updateUser: ({
    username,
    id,
    isLogin = true,
  }) => {
    return {
        type: 'UPDATE_USER_DATA',
        payload: {username, id, isLogin},
      }
    },
    logOut: () => {
      return {
        type: 'USER_LOGOUT',
      }
    }


  }

export default userActions;
