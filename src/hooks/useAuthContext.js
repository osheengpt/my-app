import React from "react";
import { AuthContext } from "../contexts/AuthContext";

const useAuthContext = () => React.useContext(AuthContext);

export default useAuthContext;
