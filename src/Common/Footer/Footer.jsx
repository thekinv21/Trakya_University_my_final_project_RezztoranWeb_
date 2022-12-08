import React from "react";
import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Link,
  IconButton,
  Image,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import AppStore from "../../Assets/Svg/AppStore.svg";
import GooglePlay from "../../Assets/Svg/GooglePlay.svg";


const Footer = () => {
  return (
    <Box     bg="#36454F" color="#fff" fontSize="14px">
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 4 }}
          spacing={8}
          fontSize="12px"
          color="#c1c1c1"
        >
          <Stack align="flex-start">
            <Text fontSize="2xl" mb="20px">
              YASAL
            </Text>
            <Link href="#">Künye</Link>
            <Link href="#">Gizlilik Politikası</Link>
            <Link href="#">Şartlar ve Koşullar</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontSize="2xl" mb="20px">
              HAKKIMIZDA
            </Text>
            <Link href="#">Bonus Puanları</Link>
            <Link href="#">Bize Ulaşin</Link>
            <Link href="#">Restoranınızı Listeleyin</Link>
            <Link href="#">Kariyer</Link>
            <Link href="#">Site Haritası</Link>
          </Stack>

          <Stack align="flex-start">
            <Text fontSize="2xl" mb="20px">
              SOSYAL
            </Text>
            <Stack direction={"row"} spacing={6}>
              <IconButton
                colorScheme={"facebook"}
                rounded="100%"
                icon={<FaFacebook />}
                w='40px'
              />
              <IconButton
                colorScheme={"twitter"}
                rounded="100%"
                icon={<FaTwitter />}
              />

              <IconButton
                colorScheme={"red"}
                rounded="100%"
                icon={<FaYoutube />}
              />
            </Stack>
          </Stack>

          <Stack align="flex-start">
            <Text fontSize="2xl">UYGULAMALAR</Text>

            <>
              <Link href="#" pr="20px">
                <Image w="100px" src={GooglePlay} />
              </Link>
              <Link href="#">
                <Image w="100px" src={AppStore} />
              </Link>
            </>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
