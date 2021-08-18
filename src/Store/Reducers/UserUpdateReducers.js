export const UserUpdateReducer = (state = {}, action) => {
  switch (action.type) {
    case "USER_UPDATE":
      return { user: action.payload };
    default:
      return state;
  }
};
