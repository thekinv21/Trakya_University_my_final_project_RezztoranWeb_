import React, { Fragment } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import { Box } from "@chakra-ui/react";
import Background from '../../Assets/images/Background.png'

const Profile = () => {
  return (
    <Fragment>
      <Box w='100vw' h='100vh' bgColor="#14162E">
        <Box w='100%' h='100%' bgImage={Background}>
          <Navbar />
        </Box>
      </Box>
    </Fragment>
  );
};

export default Profile;
