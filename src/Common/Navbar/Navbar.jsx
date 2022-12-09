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
} from "@chakra-ui/react";
import User from "../../Assets/images/user1.png";
import RezztoranLogo from "../../Assets/Svg/REZZ.svg";
import searchLogo from "../../Assets/Svg/searchLogo.svg";
import { NavbarMenuLinks } from "../../Components/Links/Links";

const Navbar = () => {
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
        bg="#36454F"
        boxShadow="0 -1px 6px -1px rgba(0, 0, 0, 0.1)"
        zIndex="999"
      >
        {/*---------------------------Logo ------------------------ */}

        <Link href={'./landing'}>
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
      </Flex>
    </Fragment>
  );
};

export default Navbar;
