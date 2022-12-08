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
      color="#000"
    >
      {/*------------------Logo and Label Container----------------- */}

      <Stack
        display="flex"
        justifyContent="center"
        flexDirection={["column", "column", "column", "row"]}
        alignItems="center"
        mb={["30px", "20px", "40px", "20px"]}
        w="100%"
      >
        <Image pr="5px" src={searchLogo} alt="search-logo" />

        <Heading
          fontWeight="600"
          color="rgb(0,0,0,0.6)"
          size={["lg", "2xl", "lg", "2xl"]}
        >
          RESTORAN SEÇ
        </Heading>
      </Stack>

      {/*---------------Hotel,Restaurant Search inputs------------------ */}

      <Box w={["70vw", "85vw", "65vw", "45vw", "28vw"]}>
        <InputGroup m="0px 20px 20px 0px">
          <Input
            type="text"
            placeholder="Sehir , Restoran , Mutfak ara...."
            _placeholder={{ color: "#ddd" }}
            fontSize={["12px", "15px", "16px"]}
          />
          <InputRightElement width={["2.5rem", "5.5rem", "4.5rem"]}>
            <FaSearch fontSize="18px" cursor="pointer" color="#fff" />
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
            fontSize={"12px"}
            color="#ddd"
          />

          {/*---------------Hotel,Restaurant Money input------------------ */}

          <InputGroup w={["100%", "100%", "120px", "120px"]}>
            <Input pr="2.5rem" type="text" maxLength={6} fontSize={"16px"} />
            <InputRightElement width="2.5rem">
              <FaDollarSign color="#00e600" />
            </InputRightElement>
          </InputGroup>

          {/*---------------Hotel,Restaurant Stars input------------------ */}

          <InputGroup w={["100%", "100%", "100px", "100px"]}>
            <Input pr="2.5rem" type="text" maxLength={1} fontSize={"16px"} />
            <InputRightElement width="2.5rem">
              <FaStar color="yellow" />
            </InputRightElement>
          </InputGroup>

          {/*---------------Filter Button------------------ */}

          <IconButton
            w={["100%", "100%", "30%", "30%"]}
            bg="rgb(248, 179, 51)"
            aria-label="Filtrele"
            fontSize="2xl"
            _hover={{ bg: "orangered" }}
            icon={<IoMdOptions color="#fff" cursor="pointer" />}
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default Search;
