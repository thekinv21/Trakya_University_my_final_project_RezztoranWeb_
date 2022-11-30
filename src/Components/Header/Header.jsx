import React from "react";
import {
  Box,
  Flex,
  IconButton,
  useDisclosure,
  Heading,
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
import User from "../../Svg/images/user1.png";
import { BiRestaurant } from "react-icons/bi";
import { FaStar, FaUser, FaHeart, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
  
  const Links = [
    {
      name: "Ana Sayfa",
      href: "#",
    },
    {
      name: "Hakkımızda",
      href: "#",
    },
    {
      name: "Restoranlar",
      href: "#",
    },
  ];

  const MenuLinks = [
    {
      name: "Restoranlar",
      href: "#",
      icon: <BiRestaurant fontSize="18px" />,
    },
    {
      name: "Favori Restoranlar",
      href: "#",
      icon: <FaHeart fontSize="18px" />,
    },
    {
      name: "Bonus Puanlar",
      href: "#",
      icon: <FaStar fontSize="18px" />,
    },
    {
      name: "Profilim",
      href: "#",
      icon: <FaUser fontSize="18px" />,
    },
    {
      name: "Çikiş",
      href: "/signin",
      icon: <FaSignOutAlt fontSize="18px" />,
    },
  ];

  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        h="16"
        p="20px 20px"
      >
        {/*---------------------------Hamburger Menu Mobile Responsive olunca Çıkar------------------------ */}
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
          bg="orange"
        />

        {/*---------------------------Logo yazisi------------------------ */}

        <Heading size={["lg", "lg", "xl"]} color="orangered" cursor="pointer">
          REZZTORAN
        </Heading>

        <Flex alignItems="center">
          {/*--------------------------Lİnks---------------------- */}
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={16}
              display={{ base: "none", md: "flex" }}
              pr="20px"
            >
              {Links.map((link) => (
                <Link
                  color="#fff"
                  _hover={{
                    textDecoration: "none",
                    p: "5px 30px",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  key={link.name}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
          </HStack>

          {/*-----------------User Logo--------------------- */}

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
                <Text fontSize="sm">Vadim Kiniabaev</Text>
                <Text mt="5px" fontSize="xx-small">
                  Bonus Puanlarim : 100
                </Text>
              </MenuCommand>

              <MenuDivider m="20px 10px" />

              {MenuLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  textDecoration="none"
                  fontSize="13px"
                >
                  <MenuItem icon={link.icon}>{link.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {/*---------------------------Mobile Responsive olduğunda Linkler------------------------ */}
      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <ScaleFade initialScale={0.5} in={isOpen}>
            <Stack as={"nav"} spacing={4} alignItems="center" mt="20px">
              {Links.map((link, index) => (
                <Link
                  color="#fff"
                  _hover={{
                    w: "100%",
                    textAlign: "center",
                    textDecoration: "none",
                    p: "5px 10px",
                    borderRadius: "5px",
                    transition: "all 0.5s",
                    bgGradient: "linear(to-r, red.500, yellow.500)",
                  }}
                  key={index}
                  href={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </Stack>
          </ScaleFade>
        </Box>
      ) : null}
    </Box>
  );
};

export default Header;
