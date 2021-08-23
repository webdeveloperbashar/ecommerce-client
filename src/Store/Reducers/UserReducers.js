
export const UserLoginReducers = (state = {}, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return { user: action.payload };
    default:
      return state;
  }
};
export const UserSignupReducers = (state = {}, action) => {
  switch (action.type) {
    case "USER_SIGNUP":
      return { user: action.payload };
    default:
      return state;
  }
};
export const EmailVerify = (state = {}, action) => {
  switch (action.type) {
    case "EMAIL_VERIFY":
      return { verify: action.payload };
    default:
      return state;
  }
};
