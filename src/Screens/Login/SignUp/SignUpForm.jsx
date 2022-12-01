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
  Box,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon, EmailIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaPhone, FaUser } from "react-icons/fa";

const SignUpForm = () => {
  const [show, setShow] = useState(false);
  const showPassword = () => setShow(!show);
  return (
    <VStack
      as="form"
      mx="auto"
      h="100vh"
      w={{ base: "100%", md: 450 }}
      justifyContent="center"
    >
      <Heading
        w="100%"
        fontSize={["5xl", "7xl", "7xl", "7xl"]}
        fontFamily="VALORANT"
        textAlign="center"
        mb="20px"
      >
        REZZTORAN
      </Heading>

      <Stack align="start" w="full" pb="20px">
        <Text fontSize={"2xl"} align="start">
          Sign Up
        </Text>

        <Text fontSize='12px' color="gray.400" align="start">
          Create a new account...
        </Text>
      </Stack>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          Firstname
        </FormLabel>

        <InputGroup>
          <Input
            type="text"
            name="firstname"
            placeholder="Enter Firstname"
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />

          <InputRightElement width="4.5rem">
            <FaUser color="#000" />
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl>
        <FormLabel fontWeight="400" fontSize="12px">
          E-mail adress
        </FormLabel>

        <InputGroup>
          <Input
            type="e-mail"
            name="username"
            placeholder="Enter E-mail.."
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
          Telephone Number
        </FormLabel>

        <InputGroup>
          <Input
            type="tel"
            name="tel_number"
            placeholder="Enter Phone Number"
            _placeholder={{ fontSize: "12px" }}
            bg="#fff"
            border="none"
            outline="none"
            color="#000"
          />

          <InputRightElement width="4.5rem">
            <FaPhone color="#000" />
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
      </FormControl>

      <FormControl pt="50px">
        <Button
          w="100%"
          bg="#4462F2"
          fontWeight="400"
          fontSize="14px"
          borderRadius="5px"
          _hover={{ boxShadow: "0px 12px 21px 4px rgba(68, 97, 242, 0.15)" }}
        >
          Create Account
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
            <IconButton w="80px" colorScheme={'gray'} icon={<FcGoogle />} />
          </Flex>
        </Box>
      </FormControl>
    </VStack>
  );
};

export default SignUpForm;
