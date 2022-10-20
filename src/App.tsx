import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import EnterNewPassword from "./components/Auth/EnterNewPassword";
import Registeration from "./components/Auth/Registeration";
import REquestReset from "./components/Auth/RequestReset";
import SignIn from "./components/Auth/SignIn";
import LandingScreenDetail from "./components/LandingScreen";
import MainBuild from "./components/MainBuild";
import LandingScreen from "./components/Screen/LandingScreen";
import Header from "./components/Screen/Main/Header";
import HomePage from "./components/Screen/Main/HomePage";
import MenuHeader from "./components/Screen/Main/MenuHeader";

const App = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <BrowserRouter>
        {toggle ? (
          <div>
            <Header />
            <MenuHeader />
            <MainBuild />{" "}
          </div>
        ) : (
          <LandingScreenDetail />
        )}
      </BrowserRouter>
    </div>
  );
};

export default App;
