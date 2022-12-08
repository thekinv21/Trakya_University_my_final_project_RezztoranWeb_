import React from "react";
import { Box, Stack } from "@chakra-ui/react";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import Background from "../../Assets/images/Background.png";
import RestoransList from "../../Components/RestoransList/RestoransList";

const Landing = () => {
  return (
    <Stack
      spacing="160"
      direction="column"
      w="100vw"
      h="100vh"
      maxH='auto'
      bgColor="#B2BEB5"
      bgImage={Background}
    >
      <Header />
      <Search />
      <RestoransList />

    </Stack>
  );
};

export default Landing;
