import React, { Fragment } from "react";
import Navbar from "./../../Common/Navbar/Navbar";
import { Box, Stack } from "@chakra-ui/react";
import Background from "../../Assets/images/Background.png";
import Footer from "../../Common/Footer/Footer";
import ProfileCard from '../../Components/Profile_Card/ProfileCard'
import ProfileEditCard from '../../Components/Profile_Edit_Card/ProfileEditCard'

const Profile = () => {
  return (
    <Fragment>
      <Navbar />

      <Box
        bgImage={Background}
        bgColor="#ddd"
        maxW="100vw"
        h="100vh"
        maxH="auto"
        position="relative"
        zIndex="0"
      >
        <Stack
          w="100%"
          h="100%"
          spacing={24}
          direction={["column", "column", "column", "row"]}
          alignItems={["center", "center", "center", "center"]}
          justifyContent={["center", "center", "center", "center"]}
        >
          {/*------------------------Profile Card Component-------------------------- */}
          <Box display={["none", "none", "none", "block"]}>
            <ProfileCard />
          </Box>

          {/*------------------------Profile Edit Card Component-------------------------- */}
          <Box>
            <ProfileEditCard />
          </Box>
        </Stack>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Profile;
