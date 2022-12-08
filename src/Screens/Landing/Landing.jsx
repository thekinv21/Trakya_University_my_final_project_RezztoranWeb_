import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Background from "../../Assets/images/Background.png";

const Landing = () => {
  return (
    <Box w="100vw" h="100vh" bgColor="#B2BEB5" bgImage={Background}>
      <Header />
      <Search />
    </Box>
  );
};

export default Landing;
