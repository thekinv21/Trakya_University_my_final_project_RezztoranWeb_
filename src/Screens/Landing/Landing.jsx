import React from "react";
import { Box } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";

const Landing = () => {
  return (
    <Box w={"100vw"} h={"100vh"} bgColor="#1E1E1E">
      <Header />
      <Search/>
    </Box>
  );
};

export default Landing;
