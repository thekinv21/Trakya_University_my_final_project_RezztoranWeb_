import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  HStack,
  Link,
  Menu,
  MenuList,
  MenuCommand,
  MenuButton,
  MenuDivider,
  MenuItem,
  Image,
  Text,
  ScaleFade,
  Stack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import User from "../../Assets/images/user1.png";
import RezztoranLogo from "../../Assets/Svg/REZZ.svg";

import { HeaderWebLinks, HeaderMenuLinks } from "../../Common/Links/Links";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="10vh"
        p="35px"
        position="fixed"
        w="100%"
        top="0px"
        left="0px"
        bgColor="#16222a"
      >
        {/*---------------------------Hamburger Menu When Window was Mobile Responsive------------------------ */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="18px" />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="orangered"
          borderRadius="50%"
          color="#ddd"
          _hover={{ bg: "orange" }}
        />

        {/*---------------------------Rezztoran Logo ------------------------ */}

        <Image
          w={["130px", "160px", "160px", "220px"]}
          src={RezztoranLogo}
          cursor="pointer"
        />

        {/*--------------------------Header and Menu Links---------------------- */}
        <Flex alignItems="center">
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={16}
              display={{ base: "none", md: "flex" }}
              pr="20px"
            >
              {HeaderWebLinks.map((webLink, index) => (
                <HStack
                  key={index}
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    p: "5px 40px",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                >
                  <Text>{webLink.icon}</Text>

                  <Link
                    href={webLink.href}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {webLink.name}
                  </Link>
                </HStack>
              ))}
            </HStack>
          </HStack>

          {/*-----------------User Logo and Menu Links--------------------- */}

          <Menu>
            <MenuButton>
              <Image
                ml={["15px", "20px", "20px", "10px", "30px"]}
                cursor="pointer"
                w="40px"
                rounded="100%"
                src={User}
              />
            </MenuButton>

            <MenuList>
              <MenuCommand textAlign="center">
                <Text fontSize="13px" color="#000">
                  Vadim Kiniabaev
                </Text>
                <Text mt="5px" fontSize="xx-small">
                  Bonus Puanlarim : 100
                </Text>
              </MenuCommand>

              <MenuDivider m="20px 10px" />

              {HeaderMenuLinks.map((menuLink, index) => (
                <Link
                  key={index}
                  href={menuLink.href}
                  textDecoration="none"
                  fontSize="13px"
                >
                  <MenuItem icon={menuLink.icon}>{menuLink.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/*---------------------------Mobile Responsive Links and positions------------------------ */}
      {isOpen ? (
        <Box pb={5} display={{ md: "none" }}>
          <ScaleFade initialScale={0.5} in={isOpen}>
            <Stack
              w="100%"
              h="180px"
              position="absolute"
              top="70px"
              spacing={6}
              alignItems="center"
              justifyContent="center"
              bg={"orange.600"}
              
            >
              {HeaderWebLinks.map((mobileLink, index) => (
                <HStack
                  key={index}
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    p: "5px 80px",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    bgColor: "green.500",
                  }}
                >
                  <Text>{mobileLink.icon}</Text>

                  <Link
                    href={mobileLink.href}
                    _hover={{
                      textDecoration: "none",
                    }}
                  >
                    {mobileLink.name}
                  </Link>
                </HStack>
              ))}
            </Stack>
          </ScaleFade>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
