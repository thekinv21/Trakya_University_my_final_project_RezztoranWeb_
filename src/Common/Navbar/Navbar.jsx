import React, { Fragment } from "react";
import {
  Flex,
  Link,
  Menu,
  MenuList,
  MenuCommand,
  MenuButton,
  MenuDivider,
  MenuItem,
  Image,
  Text,
  IconButton,
  useDisclosure,
  HStack,
  Box,
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
import searchLogo from "../../Assets/Svg/searchLogo.svg";
import {
  NavbarMenuLinks,
  ProfileMenuLinks,
} from "../../Components/Links/Links";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Fragment>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="8vh"
        p="35px"
        position="fixed"
        w="100%"
        top="0px"
        left="0px"
        bg="rgba(21, 21, 21, 1)"
        boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
        zIndex="999"
      >
        {/*---------------------------Hamburger Menu When Window was Mobile Responsive------------------------ */}
        <IconButton
          size="lg"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon fontSize="22px" />}
          display={["block", "block", "block", "none"]}
          onClick={isOpen ? onClose : onOpen}
          borderRadius="50%"
          color="#fff"
          bg="gray.800"
          _hover={{ bg: "gray.700" }}
        />

        {/*---------------------------Logo ------------------------ */}

        <Link href={"./landing"} display={["none", "none", "none", "block"]}>
          <Image
            w={["60px", "60px", "80px", "90px"]}
            src={searchLogo}
            cursor="pointer"
          />
        </Link>

        {/*---------------------------Rezztoran ------------------------ */}

        <Image
          w={["130px", "160px", "160px", "220px"]}
          src={RezztoranLogo}
          cursor="pointer"
        />

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
            <MenuCommand textAlign="center" mt="5px">
              <Text fontSize="13px" color="#000">
                Vadim Kiniabaev
              </Text>
              <Text mt="2px" fontSize="xx-small">
                Bonus Puanlarim : 100
              </Text>
            </MenuCommand>

            <MenuDivider mt="15px" />

            {NavbarMenuLinks.map((menuLink, index) => (
              <Link
                key={index}
                href={menuLink.href}
                textDecoration="none"
                fontSize="13px"
              >
                <MenuItem p="10px 20px" icon={menuLink.icon}>
                  {menuLink.name}
                </MenuItem>
              </Link>
            ))}
          </MenuList>
        </Menu>

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
              <DrawerContent   bg="rgba(21, 21, 21, 1)" w="100%" h="100%" alignItems="center">
                <DrawerCloseButton color="#fff" />

                <DrawerHeader cursor="pointer">
                  <Link href="/landing">
                    <Image src={searchLogo} />
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
                    {ProfileMenuLinks.map((mobileLink, index) => (
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
      </Flex>
    </Fragment>
  );
};

export default Navbar;
