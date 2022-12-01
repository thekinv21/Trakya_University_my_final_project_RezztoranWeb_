import React, { useState } from "react";
import {
  Heading,
  VStack,
  Stack,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  Link,
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const SignInForm = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);

  return (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      w={{ base: "90%", md: 400 }}
      justifyContent="center"
    >
      <Stack align="center" pb="50px">
        <Heading fontSize="4xl" fontWeight="400" textAlign="center">
          Sign in to your Account
        </Heading>
        <Text fontSize={"1xl"} color={"gray.400"} align="center">
          to enjoy all of our cool features ✌️
        </Text>
      </Stack>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          Username
        </FormLabel>

        <InputGroup>
          <Input
            type="text"
            name="username"
            placeholder="Enter username.."
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />

          <InputRightElement width="4.5rem">
            <EmailIcon color="#000" />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          Password
        </FormLabel>

        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            name="password"
            placeholder="Enter Password.."
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />
          <InputRightElement width="4.5rem">
            <Button
              color="#000"
              h="1.5rem"
              size="18px"
              bg="none"
              onClick={showPassword}
            >
              {show ? <ViewOffIcon /> : <ViewIcon />}
            </Button>
          </InputRightElement>
        </InputGroup>

        <Box
          display="flex"
          w="100%"
          pt="8px"
          justifyContent="flex-end"
          fontSize="12px"
          color={"gray.500"}
        >
          <Link justifyContent="flex-end">Forgot Password ?</Link>
        </Box>
      </FormControl>

      <FormControl pt="20px">
        <Button
          w="100%"
          bg="#4462F2"
          fontWeight="400"
          fontSize="14px"
          borderRadius="5px"
          _hover={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
        >
          Sign In
        </Button>
      </FormControl>

      <FormControl>
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            m="30px 0px"
          >
            <Stack>
              <Text
                w={["70px", "120px", "130px", "140px"]}
                border="1px solid #ddd"
              ></Text>
            </Stack>

            <Text>Or</Text>

            <Stack>
              <Text
                w={["70px", "120px", "130px", "140px"]}
                border="1px solid #ddd"
              ></Text>
            </Stack>
          </Box>

          <Flex alignItems="center" justifyContent="space-around">
            {/*---------------- Facebook ---------------*/}
            <IconButton
              w="80px"
              colorScheme={"facebook"}
              icon={<FaFacebook />}
            />

            {/*----------------- Google -----------------*/}
            <IconButton w="80px" colorScheme={"gray"} icon={<FcGoogle />} />
          </Flex>
        </Box>
      </FormControl>
    </VStack>
  );
};

export default SignInForm;
