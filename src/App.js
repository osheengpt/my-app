import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import RootContainer from "./components/RootContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <RootContainer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
