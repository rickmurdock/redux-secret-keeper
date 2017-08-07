export const USER_REGISTER = "USER_REGISTER";
export const USER_LOGIN = "USER_LOGIN";
export const USER_LOGOUT = "USER_LOGOUT";

export function userRegister(userId) {
  return {
    type: USER_REGISTER,
    payload: userId
  };
}

export function userLogin(userId) {
  return {
    type: USER_LOGIN,
    payload: userId
  };
}

export function userLogout(userId) {
  return {
    type: USER_LOGOUT,
    payload: userId
  };
}