export const authReducer = (state = null, action) => {
    switch (action.type) {
      case "login":
        localStorage.setItem('user', JSON.stringify(action.payload));
        return action.payload;
      case "logout":
        localStorage.removeItem('user');
        return null;
      default:
        return state;
    }
  };
  