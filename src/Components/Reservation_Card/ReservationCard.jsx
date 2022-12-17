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
import { useNavigate } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";

const ReservationCard = () => {
  //----------------Rezerve Edilen Restoranlar Listesi------------------

  const [reserved, setReserved] = useState([]);

  //----------------Rezerve Etmek için Discovera Git--------------------

  const navigate = useNavigate();

  //----------------Rezerve Edilen  Restoranlarin Bilgisi---------------

  useEffect(() => {
    axios(" http://localhost:8080/reservations").then((reservedRestaurant) =>
      setReserved(reservedRestaurant.data)
    );
  }, []);

  return (
    <Fragment>
      {/*--------------------------Eger Reservasyon Bulunuyorsa------------------------------*/}

      {reserved.length > 0 ? (
        <Stack spacing={4}>
          <Heading mt="30px">
            <Badge fontSize={["16px", "18px", "20px", "20px"]}>
              Yaklaşan Rezervasyonlar ({reserved.length})
            </Badge>
          </Heading>

          {reserved.map((reservedRestaurant) => (
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              bg="#fff"
              key={reservedRestaurant.id}
            >
              <Image
                objectFit="cover"
                maxW={{ base: "100%", sm: "200px" }}
                src={reservedRestaurant.imgURL}
                alt={reservedRestaurant.title}
              />

              <Stack
                direction={"row"}
                w="100%"
                flexDirection={["column", "column", "column", "row"]}
                justifyContent={["start", "start", "start", "space-between"]}
              >
                <CardBody w="100%">
                  <Heading fontFamily={"unset"} fontSize="20px">
                    {reservedRestaurant.title}
                  </Heading>

                  <Text pt="10px" fontSize={14}>
                    {reservedRestaurant.Date}
                  </Text>

                  <Text pt="5px" fontSize={12}>
                    {reservedRestaurant.comment}
                  </Text>

                  <Text pt="5px" fontSize={12}>
                    {reservedRestaurant.numberOfPeople}
                  </Text>

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
                </CardBody>

                <CardBody
                  display="flex"
                  alignItems="center"
                  justifyContent={["center", "center", "center", "flex-end"]}
                >
                  <Button
                    w={["100%", "100%", "120px", "100px"]}
                    colorScheme="whatsapp"
                    fontSize="small"
                    fontWeight={200}
                    size='sm'
                  >
                    Düzenle
                  </Button>

                  <Button
                    w={["100%", "100%", "120px", "100px"]}
                    colorScheme="red"
                    fontSize="small"
                    fontWeight={200}
                    ml="20px"
                    size='sm'
                  >
                    İptal Et
                  </Button>
                </CardBody>
              </Stack>
            </Card>
          ))}
        </Stack>
      ) : (
        /*------------------------------------Eger Reservasyon Bulunmuyorsa------------------------------*/

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
            w={["310px", "470px", "430px", "730px"]}
            overflow="hidden"
          >
            <CardHeader>
              <Heading fontFamily="Poppins" fontSize="20px">
                Restoranlari Keşfederek Bonus Puanlar Kazanin
              </Heading>
            </CardHeader>
            <CardBody fontSize="small">
              <Text>Yaklaşan Rezervasyon Bulunmamaktadir</Text>
            </CardBody>
            <CardFooter>
              <Button
                onClick={() => navigate("/discover")}
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
