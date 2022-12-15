import { useState, useEffect } from "react";
import {
  Stack,
  Card,
  Heading,
  CardBody,
  Flex,
  Image,
  Text,
  Code,
  Link,
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
      {discoverRestorants.map((restaurants) => (
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="elevated"
          size="lg"
          bg="#fff"
          key={restaurants.id}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", sm: "250px" }}
            src={restaurants.imgURL}
            alt={restaurants.title}
          />

          <Flex
            justifyContent="space-between"
            w="100%"
            alignItems="center"
            h="100%"
          >
            <CardBody>
              <Heading fontWeight="bold" fontSize="25px">
                {restaurants.title}
              </Heading>

              <Text m="10px 0px" fontSize="16px">
                {restaurants.city}
              </Text>
              <Text fontSize="12px" m="10px 0px">
                {restaurants.district}
              </Text>

              <Code
                children={restaurants.category}
                borderRadius="5px"
                fontSize="12px"
              />
            </CardBody>

            <CardBody textAlign="end">
              <Link
                href={`#`}
                p='10px 25px'
                textAlign='center'
                bg="rgb(248, 179, 51)"
                borderRadius="10px"
                fontWeight="regular"
                fontSize="14px"
                color='#fff'
              >
                Masa Ayir
              </Link>

              <Text fontSize="12px" mt='10px'>
                Değerlendirme : {restaurants.most_rated}
              </Text>
            </CardBody>
          </Flex>
        </Card>
      ))}
    </Stack>
  );
};

export default DiscoverRestorans;
