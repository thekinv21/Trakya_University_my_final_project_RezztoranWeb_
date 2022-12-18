import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "../Screens/Login/SignIn/SignIn"
import SignUp from "../Screens/Login/SignUp/SignUp";
import Landing from './../Screens/Landing/Landing';
import Profile from './../Screens/Profile/Profile';
import Reservations from "../Screens/Reservations/Reservations";
import Discover from './../Screens/Discover/Discover';
import Restaurant from './../Screens/Restaurant/Restaurant';
import Error from "../Screens/Error/Error";

const Routers = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error/>}/>
          <Route path="/" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/restaurant/:restaurant_id" element={<Restaurant />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routers;
