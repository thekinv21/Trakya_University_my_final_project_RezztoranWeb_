import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../Screens/Login/SignIn/SignIn"
import SignUp from "../Screens/Login/SignUp/SignUp";
import Landing from './../Screens/Landing/Landing';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
