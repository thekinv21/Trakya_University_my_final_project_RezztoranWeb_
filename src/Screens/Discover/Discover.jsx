import { Fragment } from "react";
import Navbar from "../../Common/Navbar/Navbar";
import { Stack, Box } from "@chakra-ui/react";
import Background from "../../Assets/images/Background.png";
import Footer from "../../Common/Footer/Footer";
import DiscoverCard from "../../Components/Discover_Card/DiscoverCard";
import DiscoverFilter from "../../Components/Discover_Filter_Card/DiscoverFilter";
import DiscoverRestaurants from "../../Components/Discover_Restaurants_Card/DiscoverRestorans";

const Discover = () => {
  return (
    <Fragment>
      <Navbar />

      <Box
        bgImage={Background}
        bgColor="#ddd"
        maxW="100vw"
        minH="100vh"
        maxH="auto"
        p="48px"
        position="relative"
        zIndex="0"
      >
        <Stack
          w="100%"
          h="100%"
          mt="100px"
          spacing={10}
          direction={["column", "column", "column", "row"]}
          justifyContent={["center", "center", "center", "center"]}
        >
          <Box display={["none", "none", "none", "none", "block"]}>
            <DiscoverFilter />
          </Box>

          <Stack spacing={4}>
            <DiscoverCard />
            <DiscoverRestaurants />
          </Stack>
        </Stack>
      </Box>

      <Footer />
    </Fragment>
  );
};

export default Discover;
