import React from "react";
import {
  Input,
  FormControl,
  FormLabel,
  FormHelperText,
  Select,
  Stack,
  Button,
  Heading,
  Card,
} from "@chakra-ui/react";
import { MdAddAPhoto } from "react-icons/md";

const ProfileEditCard = () => {
  return (
    <Stack direction="column" spacing="8">
      {/*-----------------------Card-1 Title------------------------- */}

      <Stack>
        <Heading
          textAlign="start"
          fontSize="16PX"
          fontWeight="bold"
          color="rgb(0,0,0,0.5)"
          mb="5px"
        >
          PERSONEL BİLGİLERİNİZ
        </Heading>

        <Card
          bg="#c1c1c1"
          color="#fff"
          boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
          minW={["320px", "450px", "440px", "570px"]}
          maxW={["340px", "340px", "340px", "570px"]}
          h={["500px", "600px", "500px", "500px"]}
          borderRadius="10px"
          p="16px"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          {/*--------------------------Add User Photo Image and E-mail Adres--------------------------- */}

          <Stack w="100%" textAlign="start">
            <FormControl
              w="72px"
              h="72px"
              bg="rgb(240, 242, 245)"
              borderRadius="50%"
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              color="#fff"
            >
              <FormLabel htmlFor="add" m="0">
                <MdAddAPhoto color="#777" fontSize="22px" cursor="pointer" />
              </FormLabel>
              <Input type="file" id="add" display="none" />
            </FormControl>

            <FormControl>
              <FormHelperText m="10px 0px" fontSize="10px">
                E-posta Adresi .....
              </FormHelperText>

              <FormLabel mt="5px" fontSize="12px">
                E-posta adresi gelir...
              </FormLabel>
            </FormControl>
          </Stack>

          {/*-------------------------ENTER NAME AND SURNAME--------------------- */}

          <Stack w="100%" direction="row" spacing="8" p="16px">
            <Input
              w="45%"
              variant="flushed"
              placeholder="Name"
              _placeholder={{ fontSize: "12px", color: "#fff" }}
              fontSize="12px"
              focusBorderColor="lime"
            />
            <Input
              w="45%"
              variant="flushed"
              placeholder="Surname"
              _placeholder={{ fontSize: "12px", color: "#fff" }}
              fontSize="12px"
              focusBorderColor="orangered"
            />
          </Stack>

          {/*---------------------Telephone number-------------------------- */}

          <Stack w="100%" p="16px" direction="row" spacing="8">
            <Select
              variant="flushed"
              w="20%"
              fontSize="12px"
              focusBorderColor="lime"
            >
              <option bg="gray">+905</option>
            </Select>

            <Input
              w="45%"
              variant="flushed"
              placeholder="Phone number"
              _placeholder={{ fontSize: "12px", color: "#fff" }}
              fontSize="12px"
              focusBorderColor="lime"
            />
          </Stack>

          {/*---------------------------Selecr Language İnput----------------------- */}

          <Stack p="16px" w="100%">
            <Select
              variant="flushed"
              w="40%"
              fontSize="12px"
              focusBorderColor="lime"
            >
              <option>Türkçe</option>
              <option>English</option>
              <option>Rusça</option>
            </Select>
          </Stack>

          {/*---------------------------Save All Changes Button----------------------- */}

          <Stack textAlign="start" w="100%" p="16px">
            <Button
              colorScheme={"blackAlpha"}
              fontSize="14px"
              w="200px"
              disabled
            >
              Değişiklikleri Kaydet
            </Button>
          </Stack>
        </Card>
      </Stack>

      {/*---------------------------Şifre değiştir Butonu----------------------- */}

      <Stack direction="column">
        <Heading
          textAlign="start"
          fontSize="16PX"
          fontWeight="bold"
          color="rgb(0,0,0,0.5)"
          mb="5px"
        >
          PAROLA DEĞİŞTİR
        </Heading>

        <Card
          bg="#c1c1c1"
          boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
          minW={["320px", "450px", "440px", "570px"]}
          maxW={["340px", "100%", "340px", "570px"]}
          h={["100px", "100px", "100px", "100px"]}
          borderRadius={["none", "10px", "10px"]}
          textAlign="center"
          display="flex"
          justifyContent="center"
          alignItems="start"
          pl="40px"
        >
          <Button
            w="220px"
            bg="rgb(248, 179, 51)"
            borderRadius="8px"
            color="#fff"
            fontWeight="bold"
            fontSize="14px"
            _hover={{ color: "rgb(0,0,0,0.5)" }}
          >
            Parolayi Değiştir
          </Button>
        </Card>
      </Stack>
    </Stack>
  );
};

export default ProfileEditCard;
