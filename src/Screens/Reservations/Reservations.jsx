import React, { Fragment } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import { Stack, Box } from "@chakra-ui/react";
import Background from "../../Assets/images/Background.png";
import Footer from "../../Common/Footer/Footer";
import ProfileCard from "./../../Components/ProfileCard/ProfileCard";
import ReservationCard from "../../Components/ReservationCard/ReservationCard";

const Reservations = () => {
  return (
    <Fragment>
      <Navbar />

      <Box
        bgImage={Background}
        bgColor="#ddd"
        maxW="100vw"
        minH="100vh"
        maxH="auto"
        position="relative"
        zIndex="0"
      >
        <Stack
          w="100%"
          h="100%"
          spacing={12}
          direction={["column", "column", "column", "row"]}
          alignItems={["center", "center", "center", "center"]}
          justifyContent={["center", "center", "center", "center"]}
          pt='100px'
        >
          {/*------------------------Profile Card Component-------------------------- */}
          <Box display={["none", "none", "none", "none", "block"]}>
            <ProfileCard />
          </Box>

          {/*------------------------Reservations İnfo Card-------------------------- */}
          <Box>
            <ReservationCard />
          </Box>
        </Stack>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Reservations;
