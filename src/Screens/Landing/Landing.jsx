import React, { Fragment } from "react";
import { Stack, Box } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Background from "../../Assets/images/Background.png";
import Banner from "../../Components/Banner/Banner";
import AboutUs from "../../Components/AboutUs/AboutUs";
import RestaurantSlider from "../../Components/Restaurants_Slider/RestoransList";
import Quetions from "../../Components/User_Quetions_Card/Quetions";
import Footer from "../../Common/Footer/Footer";

const Landing = () => {
  return (
    <Fragment>
      <Header />
      <Box
        maxW="100vw"
        minH="1400px"
        maxH="auto"
        bgColor="#ddd"
        bgImage={Background}
        overflowY="hidden"
      >
        <Stack spacing={20} direction="column" h="auto">
          <Banner />
          <RestaurantSlider />
          <AboutUs />
          <Quetions />
        </Stack>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Landing;
