import React from "react";
import {
  Card,
  Flex,
  Text,
  Image,
  CardBody,
  Link,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import UserSvg from "../../Assets/Svg/ProfileCardUser.svg";
import { ProfileMenuLinks } from "../Links/Links";

const ProfileCard = () => {
  return (
    <Card
      bg="#c1c1c1"
      boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
      minW="290px"
      maxW="300px"
      h="500px"
      borderRadius="10px"
      p="30px 0px"
    >
      <Flex
        w="100%"
        h="100%"
        alignItems="center"
        flexDirection="column"
        justifyContent="center"
      >
        <Image src={UserSvg} />

        {/*---------------User giriş yaptiğinda Nicki gözükecek Unutmaa-------------- */}

        <Text pt="30px" fontSize="14px">
          Tekrar hoş geldiniz, User..
        </Text>
      </Flex>

      {/*------------------------------------Menu Links-------------------------------- */}

      <CardBody p="0px" mt="20px">
        {ProfileMenuLinks.map((cardLink, index) => (
          <UnorderedList key={index} listStyleType="none">
            <Link
              href={cardLink.href}
              borderTop="0.5px solid #979797"
              display="flex"
              alignItems="center"
              p="12px 4px"
              fontSize="14px"
              _hover={{
                borderLeft: "8px solid rgb(248, 179, 51)",
                color: "#FAC050",
              }}
            >
              <ListItem pr="10px" color="#000">
                {" "}
                {cardLink.icon}
              </ListItem>
              <ListItem fontWeight="300">{cardLink.name}</ListItem>
            </Link>
          </UnorderedList>
        ))}
      </CardBody>
    </Card>
  );
};

export default ProfileCard;
