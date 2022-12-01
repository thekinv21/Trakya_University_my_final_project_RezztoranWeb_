import React from "react";
import {
  Box,
  Flex,
  Image,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FaSearch, FaDollarSign, FaStar } from "react-icons/fa";
import { IoMdOptions } from "react-icons/io";

import searchLogo from "../../Assets/Svg/searchLogo.svg";

const Search = () => {
  return (
    <Flex
      flexDirection={["column", "column", "column"]}
      alignItems={["center", "center", "center"]}
      justifyContent="center"
      color="#fff"
      pt="6rem"
    >
      {/*------------------Logo and Label Container----------------- */}
      
      <Stack
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        mb={["30px", "20px", "40px", "20px"]}
      >
        <Image pr="10px" src={searchLogo} alt="search-logo" />

        <Heading fontWeight="400" size={["lg", "2xl", "lg", "3xl"]}>
          Dilediğin Restorani Seç
        </Heading>
      </Stack>

      {/*---------------Hotel,Restaurant Search inputs------------------ */}

      <Box w={["70vw", "85vw", "65vw", "45vw", "28vw"]}>
        <InputGroup m="0px 20px 20px 0px">
          <Input
            type="text"
            placeholder="Sehir , Restoran , Mutfak ara...."
            focusBorderColor="orange.300"
            borderColor={"orange"}
            fontSize={["12px", "15px", "16px"]}
          />
          <InputRightElement width={["2.5rem", "5.5rem", "4.5rem"]}>
            <FaSearch fontSize="18px" cursor="pointer" />
          </InputRightElement>
        </InputGroup>

        <Flex
          flexDirection={["column", "column", "row", "row"]}
          alignItems="center"
          justifyContent="space-around"
          gap={"12px"}
        >
          {/*---------------Hotel,Restaurant Reservation Date-Locale input------------*/}

          <Input
            w={["100%", "100%", "200px", "200px"]}
            placeholder="Select Date and Time"
            size="md"
            type="datetime-local"
            focusBorderColor="orange.300"
            borderColor={"orange"}
            fontSize={"12px"}
          />

          {/*---------------Hotel,Restaurant Money input------------------ */}

          <InputGroup w={["100%", "100%", "120px", "120px"]}>
            <Input
              pr="2.5rem"
              type="text"
              maxLength={6}
              focusBorderColor="orange.300"
              borderColor={"orange"}
              fontSize={"16px"}
            />
            <InputRightElement width="2.5rem">
              <FaDollarSign color="greenyellow" />
            </InputRightElement>
          </InputGroup>

          {/*---------------Hotel,Restaurant Stars input------------------ */}

          <InputGroup w={["100%", "100%", "100px", "100px"]}>
            <Input
              pr="2.5rem"
              type="text"
              maxLength={1}
              focusBorderColor="orange.300"
              borderColor={"orange"}
              fontSize={"16px"}
            />
            <InputRightElement width="2.5rem">
              <FaStar color="yellow" />
            </InputRightElement>
          </InputGroup>

          {/*---------------Filter Button------------------ */}

          <IconButton
            w={["100%", "100%", "30%", "30%"]}
            bg="orange.600"
            aria-label="Filtrele"
            fontSize="2xl"
            _hover={{ bg: "orangered", color: "#ddd" }}
            icon={<IoMdOptions cursor="pointer" />}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Search;
