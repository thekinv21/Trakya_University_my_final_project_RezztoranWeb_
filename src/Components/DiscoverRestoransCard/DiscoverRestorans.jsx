import { useState, useEffect } from "react";
import {
  Stack,
  Card,
  Heading,
  CardBody,
  Image,
  Text,
  Code,
  Link,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const DiscoverRestorans = () => {
  const [discoverRestorants, setDiscover] = useState([]);

  useEffect(() => {
    async function getRestaurants() {
      const { data: DiscoverRestaurantsList } = await axios.get(
        "../Database/Restorant_data.json"
      );

      setDiscover(DiscoverRestaurantsList);
    }

    getRestaurants();
  }, []);

  return (
    <Stack spacing={4}>
      {discoverRestorants.map((restaurant) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          bg="#fff"
          key={restaurant.id}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "200px" }}
            src={restaurant.imgURL}
            alt={restaurant.title}
          />

          <Stack
            direction={"row"}
            w="100%"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent={["start", "start", "start", "space-between"]}
          >
            <CardBody>
              <Heading fontFamily={"unset"} fontSize="20px">
                {restaurant.title}
              </Heading>

              <Text pt="10px" fontSize={14}>
                {restaurant.city}
              </Text>

              <Text pt="5px" fontSize={12}>
                {restaurant.district}
              </Text>

              <Text pt="5px" fontSize={12}>
                {restaurant.most_rated}
              </Text>

              <Code
                children="Aile İçin Uygundur"
                mt="10px"
                fontSize={10}
                borderRadius={5}
              />
            </CardBody>

            <CardBody
              display="flex"
              alignItems="center"
              justifyContent={["center", "center", "center", "flex-end"]}
            >
              <Button
                w={["100%", "100%", "120px", "120px"]}
                href="#"
                as={Link}
                colorScheme="whatsapp"
                fontSize="small"
                fontWeight={200}
              >
                Masa Ayirt
              </Button>
            </CardBody>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default DiscoverRestorans;
