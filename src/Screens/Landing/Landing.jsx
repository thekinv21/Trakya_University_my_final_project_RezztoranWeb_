import React from "react";
import { Stack, Box } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Background from "../../Assets/images/Background.png";
import RestoransList from "../../Components/RestoransList/RestoransList";
import Footer from "../../Common/Footer/Footer";
const Landing = () => {
  return (
    <Box
      maxW="100vw"
      h="1200px"
      maxH={"1200px"}
      bgColor="#B2BEB5"
      bgImage={Background}
    >
      <Header />

      <Stack spacing={20} direction="column" pt="10rem">
        <Search />
        <RestoransList />
      </Stack>

      <Footer />
    </Box>
  );
};

export default Landing;
