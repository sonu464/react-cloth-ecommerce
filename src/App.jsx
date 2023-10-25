import React from "react";
import "./App.css";

import Login from "./components/UI/Login/Login";
import Home from "./components/Pages/Home/Home";

import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      {!isAuth && <Login />}
      {isAuth && <Home />}
    </>
  );
}

export default App;
