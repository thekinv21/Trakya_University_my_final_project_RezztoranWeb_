import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../Screens/Login/SignIn/SignIn"
import SignUp from "../Screens/Login/SignUp/SignUp";
import Landing from './../Screens/Landing/Landing';
import Profile from './../Screens/Profile/Profile';
import Reservations from "../Screens/Reservations/Reservations";
import Discover from './../Screens/Discover/Discover';

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/discover" element={<Discover />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
