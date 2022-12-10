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
  Stack,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerHeader,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import User from "../../Assets/images/user1.png";
import RezztoranLogo from "../../Assets/Svg/REZZ.svg";
import { HeaderWebLinks, NavbarMenuLinks } from "../Links/Links";

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
        bg="#36454F"
        boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
        zIndex="999"
      >
        {/*---------------------------Hamburger Menu When Window was Mobile Responsive------------------------ */}
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="19px" />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          color="#ddd"
          bg="gray.600"
          borderRadius="50%"
          _hover={{ bg: "gray.700" }}
        />

        {/*-------------------------------Rezztoran Logo ------------------------ */}

        <Image
          w={["130px", "160px", "160px", "220px"]}
          src={RezztoranLogo}
          cursor="pointer"
        />

        {/*------------------------------Header Links----------------------------- */}
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

          {/*------------------------------User Logo and Links------------------------- */}

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

              {NavbarMenuLinks.map((menuLink, index) => (
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
        <Box display={{ md: "none" }}>
          <Drawer
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyItems={"center"}
          >
            <DrawerOverlay />
            <DrawerContent bg="#36454F" w="100%" h="100%" alignItems="center">
              <DrawerCloseButton color="#fff" />

              <DrawerHeader cursor="pointer">
                <Link href="/landing">
                  <Image src={RezztoranLogo} />
                </Link>
              </DrawerHeader>

              <DrawerBody>
                <Stack
                  w="100%"
                  h="100%"
                  direction="column"
                  alignItems={"center"}
                  justifyContent="center"
                  spacing="8"
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
                        bgGradient: "linear(to-r, red.500, yellow.500)",
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
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
