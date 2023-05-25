import React from "react";
import { DEFAULT_USER_AUTH } from "../utils/consts";
import {
  validateUser,
  setAuthInLocal,
  removeAuthInLocal,
  removePostedJobsInLocal,
} from "../utils/helper";

const useAuthHandler = (initialState) => {
  const [auth, setAuth] = React.useState(initialState);

  const isValidUser = (userAuth) => {
    const { email, password, type } = userAuth;
    const user = DEFAULT_USER_AUTH[type].find((user) =>
      validateUser(user, { email, password })
    );
    if (user) {
      setAuth(user);
      setAuthInLocal(user);
      return true;
    }
    return false;
  };

  const removeUserAuth = () => {
    removeAuthInLocal();
    // removePostedJobsInLocal();
    setAuth(null);
  };

  return {
    auth,
    isValidUser,
    removeUserAuth,
  };
};

export default useAuthHandler;
