import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import {
  Stack,
  Card,
  CardHeader,
  CardFooter,
  Text,
  Image,
  CardBody,
  Heading,
  Button,
  Badge,
  Box,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const ReservationCard = () => {
  //------------------------------------Rezerve Edilen Restoranlar Arrayi-------------------------------

  const [reserved, setReserved] = useState([]);

  //----------------------------Rezerve Edilen Restoranlar Bilgisi Jsondan Çekildi------------------------

  useEffect(() => {
    async function getReservedRest() {
      const { data: reservedRestaurant } = await axios.get(
        "../Database/Reservations.json"
      );

      setReserved(reservedRestaurant);
    }

    getReservedRest();
  }, []);

  return (
    <Fragment>
      {/*------------------------------------Eger Reservasyon Bulunuyorsa------------------------------*/}

      {reserved.length > 0 ? (
        <Stack direction="column" spacing="4">
          <Heading>
            <Badge
              fontSize={["16px", "16px", "20px", "20px"]}
              colorScheme="blackAlpha"
            >
              Yaklaşan Rezervasyonlarim ({reserved.length})
            </Badge>
          </Heading>

          {/*----------------------------------------Reservation Card---------------------------------- */}
          {reserved.map((reservedRestaurant) => (
            <Card
              w={["350px", "480px", "630px", "700px"]}
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              bg="#fff"
              key={reservedRestaurant.id}
              alignItems="center"
              justifyContent="space-evenly"
            >
              <Image
                objectFit="cover"
                w={["250px", "160px", "270px", "330px"]}
                src={reservedRestaurant.imgURL}
                alt={reservedRestaurant.title}
                h="200px"
                maxH="200px"
                borderRadius="10px"
              />

              <Stack>
                <CardBody>
                  {/*---------------------------------Reservasyon Durumu----------------------------- */}
                  <Heading size="xs">
                    Status :{" "}
                    <Badge colorScheme="green">Onaylanmiş Rezervasyon</Badge>
                  </Heading>

                  {/*------------------------------Reserve Edilen Restaurant Adı----------------------*/}

                  <Heading size="xs" pt="10px">
                    Restaurant :{" "}
                    <Badge colorScheme="orange">
                      {reservedRestaurant.title}
                    </Badge>
                  </Heading>

                  {/*---------------------------Reserve Edilen Restaurant Tarihi----------------------*/}

                  <Heading size="xs" pt="10px">
                    Date :{" "}
                    <Badge colorScheme="orange">
                      {reservedRestaurant.Date}
                    </Badge>
                  </Heading>
                  {/*--------------------------Reserve Edilen Rest Kişi Sayısı ------------------------*/}
                  <Heading size="xs" pt="10px">
                    Persons :{" "}
                    <Badge colorScheme="orange">
                      {reservedRestaurant.numberOfPeople}
                    </Badge>
                  </Heading>

                  {/*--------------------------Reserve Edilen Restaurant Comment------------------------*/}

                  <Heading size="xs" pt="10px">
                    Comment :{" "}
                    <Badge colorScheme="orange">
                      {reservedRestaurant.comment}
                    </Badge>
                  </Heading>

                  {/*-----------------------------Reserve Edilen Restaurant Stars------------------------*/}

                  <Stack
                    pt="10px"
                    display="flex"
                    alignItems="center"
                    direction="row"
                  >
                    <Heading size="xs">Restaurant Stars : </Heading>
                    <Box display="flex" mt="2" alignItems="center" size="xs">
                      {Array(5)
                        .fill("")
                        .map((_, i) => (
                          <StarIcon
                            fontSize="xs"
                            key={i}
                            color={
                              i < reservedRestaurant.star
                                ? "teal.500"
                                : "gray.300"
                            }
                          />
                        ))}
                    </Box>
                  </Stack>

                  {/*---------------------------Düzenle veya  İptal Et Buttonları------------------------*/}

                  <Stack direction="row" spacing="6" mt="15px">
                    <Button
                      bg="rgb(248, 179, 51)"
                      fontWeight="regular"
                      color="#fff"
                      fontSize="small"
                      size="sm"
                      _hover={{ bg: "orange" }}
                    >
                      Düzenle
                    </Button>
                    <Button
                      colorScheme="gray"
                      fontWeight="regular"
                      fontSize="small"
                      size="sm"
                    >
                      İptal Et
                    </Button>
                  </Stack>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Stack>
      ) : (
        //-----------------------------Eğer herhangi bir rezervasyon bulunamadıysa--------------------------------

        <Stack spacing="6">
          <Heading>
            <Badge
              fontSize={["16px", "16px", "20px", "20px"]}
              colorScheme="blackAlpha"
            >
              Yaklaşan Rezervasyonlar ({reserved.length})
            </Badge>
          </Heading>

          <Card
            bg="#fff"
            alignItems="center"
            w={["310px", "430px", "430px", "430px"]}
            overflow="hidden"
          >
            <CardHeader>
              <Badge colorScheme="orange">
                {" "}
                Restoranlari Keşfederek Bonus Puanlar Kazanin
              </Badge>
            </CardHeader>
            <CardBody fontSize="small">
              <Text>Yaklaşan Rezervasyon Bulunmamaktadir</Text>
            </CardBody>
            <CardFooter>
              <Button
                size="md"
                width="200px"
                bg="rgb(248, 179, 51)"
                color="#fff"
                fontWeight="regular"
                fontSize="small"
                _hover={{ bg: "orange" }}
              >
                Restoranlari Keşfet
              </Button>
            </CardFooter>
          </Card>
        </Stack>
      )}
    </Fragment>
  );
};

export default ReservationCard;
