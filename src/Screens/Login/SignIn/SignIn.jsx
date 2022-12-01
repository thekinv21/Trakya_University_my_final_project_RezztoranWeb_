import React from "react";
import { Box, Image, Flex, Stack, Text, Link } from "@chakra-ui/react";
import Karikatur from "../../../Assets/images/ourPn.png";
import Background from "../../../Assets/images/bg.jfif";
import Logo from "../../../Assets/Svg/Logo.svg";
import SignInForm from "./SignInForm";


const SignIn = () => {
  return (
    <Box w="100vw" h="100vh" bgImage={Background} color="#fff">
      <Box w="100%" h="100%" bgColor="#14162E" opacity="0.9">
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
          {/*------------------------Our Karikatur and SignUp Link---------------------------- */}

          <Flex
            h="100%"
            alignItems="flex-end"
            display={["none", "none", "none", "flex"]}
          >
            <Box>
              <Image h="700px" src={Karikatur} />
            </Box>
            <Box position="relative" bottom="200px" left="-80px">
              <Stack>
                <Text fontSize="5xl" fontWeight="300">
                  Sign up
                </Text>
                <Box textAlign="end" fontSize="sm">
                  <Text pb="5px">Create Account.....</Text>
                  <Link href="/signup" color="#4462f2">
                    Sign Up now!
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Flex>

          {/*------------------------Our Logo---------------------------- */}

          <Box display={["none", "none", "none", "block"]}>
            <Image position="relative" left="-130px" src={Logo} />
          </Box>

          {/*------------------------SingIn form---------------------------- */}

          <Box>
            <SignInForm />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default SignIn;
