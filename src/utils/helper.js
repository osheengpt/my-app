export const validateUser = (user, userAuth) =>
  user.email === userAuth.email && user.password === userAuth.password;

export const setAuthInLocal = (userAuth) => {
  window.localStorage.setItem("UserAuth", JSON.stringify(userAuth));
};

export const removeAuthInLocal = () => {
  window.localStorage.removeItem("UserAuth");
};

export const getAuthInLocal = () => {
  const auth = window.localStorage.getItem("UserAuth");
  if (auth) {
    return JSON.parse(auth);
  }
  return null;
};
