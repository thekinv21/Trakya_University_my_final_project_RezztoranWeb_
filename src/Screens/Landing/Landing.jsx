import React, { Fragment } from "react";
import { Stack, Box } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Background from "../../Assets/images/Background.png";
import RestoransList from "../../Components/RestoransList/RestoransList";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Footer from "../../Common/Footer/Footer";
import Quetions from "../../Components/Questions/Quetions";
const Landing = () => {
  return (
    <Fragment>
      <Header />
      <Box
        maxW="100vw"
        minH="1400px"
        maxH="auto"
        bgColor="#B2BEB5"
        bgImage={Background}
        overflowY="hidden"
      >
        <Stack spacing={20} direction="column" pt="8rem" h="auto">
          <Search />
          <RestoransList />
          <AboutUs />
          <Quetions />
        </Stack>
      </Box>
      <Footer />
    </Fragment>
  );
};

export default Landing;
