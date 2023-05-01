import React from "react";
import useAuthHandler from "../hooks/useAuthHandler";
import { getAuthInLocal } from "../utils/helper";

export const AuthContext = React.createContext({
  auth: null,
  isValidUser: () => {},
  removeUserAuth: () => {},
});

const AuthContextProvider = ({ children }) => {
  const { auth, isValidUser, removeUserAuth } = useAuthHandler(
    getAuthInLocal() // reutrn default auth user value
  );

  return (
    <AuthContext.Provider value={{ auth, isValidUser, removeUserAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
