import { useState, useEffect } from "react";
import {
  Stack,
  Card,
  Heading,
  CardBody,
  Image,
  Text,
  Code,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DiscoverRestorans = () => {
  const [discoverRestorants, setDiscover] = useState([]);
  const navigate = useNavigate();

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
          bg="#fff"
          key={restaurant.id}
        >
          <Image
            objectFit="cover"
            w={["330px", "250px", "200px", "250px"]}
            src={restaurant.imgURL}
            alt={restaurant.title}
          />

          <Stack>
            <CardBody>
              <Heading size="md">{restaurant.title}</Heading>

              <Text fontSize="small">
                <Code
                  children="City:"
                  mr="10px"
                  colorScheme={"orange"}
                  mt="10px"
                />
                {restaurant.city}
              </Text>

              <Text fontSize="small">
                <Code
                  children="District:"
                  mr="10px"
                  colorScheme={"orange"}
                  mt="10px"
                />
                {restaurant.district}
              </Text>

              <Text py="2" fontSize="small">
                <Code children="Address:" mr="10px" colorScheme={"orange"} />
                {restaurant.detailedAddress}
              </Text>

              <Text fontSize="small">
                <Code children="Category:" mr="10px" colorScheme={"orange"} />
                {restaurant.category}
              </Text>

              <Text fontSize="small">
                <Code
                  children="Most Rated:"
                  mr="10px"
                  colorScheme={"orange"}
                  mt="10px"
                />
                {restaurant.most_rated}
              </Text>

              <Text fontSize="small">
                <Code
                  children="Star:"
                  mr="10px"
                  colorScheme={"orange"}
                  mt="10px"
                />
                {restaurant.star}
              </Text>
            </CardBody>

            <CardFooter p="0px 0px 20px 15px" alignItems="start">
              <Button
                colorScheme="green"
                fontSize="small"
                fontWeight="regular"
                w="130px"
                onClick={() => (navigate('#'))}
              >
                Masa Ayirt
              </Button>
            </CardFooter>
          </Stack>
        </Card>
      ))}
    </Stack>
  );
};

export default DiscoverRestorans;
