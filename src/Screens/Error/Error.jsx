import React from "react";
import {
  Box,
  Image,
  Flex,
  Stack,
  Text,
  Heading,
  Button,
} from "@chakra-ui/react";
import Karikatur from "../../Assets/images/ourPn.png";
import Background from "../../Assets/images/Background.png";
import Logo from "../../Assets/Svg/Logo.svg";
import { useNavigate } from "react-router-dom";

const Error = () => {
  const navigate = useNavigate();

  return (
    <Box
      w="100vw"
      h="100vh"
      bgColor="#14162E"
      bgImage={Background}
      color="#fff"
      userSelect={"none"}
    >
      {/*-------------------Mobil Tablet Laptop vb Responsive------------------------ */}
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        justifyContent={[
          "center", // mobil
          "center", // tablet
          "center", // tablet2
          "space-between", //Laptop
        ]}
        p="0px 40px"
      >
        {/*------------------------Our Karikatur---------------------------- */}

        <Box alignSelf="end" display={["none", "none", "none", "block"]}>
          <Image h="700px" src={Karikatur} />
        </Box>

        <Box>
          <Stack alignItems="center" spacing={10}>
            <Heading
              fontFamily="inherit"
              fontSize={["10em", "15em", "15em", "15em"]}
            >
              404
            </Heading>
            <Text
              fontSize={["1em", "2em", "2em", "3em"]}
              fontFamily="monospace"
            >
              Maalesef Sayfa bulunamadi
            </Text>

            <Button
              onClick={() => navigate("/landing")}
              colorScheme="red"
              w="300px"
              fontWeight="regular"
              fontSize={14}
            >
              Ana Sayfaya Geri Dönün
            </Button>
          </Stack>
        </Box>

        {/*------------------------Our Logo---------------------------- */}

        <Box display={["none", "none", "none", "block"]}>
          <Image src={Logo} />
        </Box>
      </Flex>
    </Box>
  );
};

export default Error;
