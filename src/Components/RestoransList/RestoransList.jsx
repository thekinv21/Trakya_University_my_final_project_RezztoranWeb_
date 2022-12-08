import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Badge, Image, Stack, Text, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RestoransList = () => {
  const [resData, setresData] = useState([]);

  //----------------------------------Check data with Axios-----------------------------------
  useEffect(() => {
    async function fetchData() {
      const { data: mydata } = await axios.get(
        "../Database/Restorant_data.json"
      );

      setresData(mydata);
    }

    fetchData();
  }, []);

  //----------------------------------Slider Ayarları için-----------------------------------
  const sliderSettings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 1500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Stack w="100%" textAlign="center" spacing="12">
      <Heading color="rgb(0,0,0,0.6)" fontWeight="600">
        POPÜLER RESTORANLAR
      </Heading>

      <Stack w="100%" p="0px 7%" direction={["column", "column", "column"]}>
        {/*---------------------------------------------Slider Container-------------------------------------------- */}
        <Slider {...sliderSettings}>
          {resData.map((restoran) => (
            <Box
              w="200px"
              maxW="350px"
              h={["320px", "400px", "400px", "400px"]}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              key={restoran.id}
              cursor="pointer"
              bg="#ddd"
            >
              {/*-----------------------------------------Restorants Image---------------------------------------------- */}
              <Image
                w="400px"
                maxW="100%"
                src={restoran.imgURL}
                alt={restoran.title}
              />

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  <Badge borderRadius="full" px="2" colorScheme="teal">
                    New
                  </Badge>
                  <Box
                    color="gray.500"
                    fontWeight="semibold"
                    fontSize="10px"
                    textTransform="uppercase"
                    ml="2"
                  >
                    Location : {restoran.city} &nbsp; &nbsp; Stars :{" "}
                    {restoran.star}
                  </Box>
                </Box>

                {/*-----------------------------------------Restorant İnformation-------------------------------------------- */}

                <Box
                  mt="1"
                  fontWeight="semibold"
                  as="h4"
                  lineHeight="tight"
                  noOfLines={1}
                >
                  Restaurant : &nbsp; {restoran.title}
                </Box>

                <Text fontSize="small">
                  Category : &nbsp;{restoran.category}
                </Text>

                <Text fontSize="xs">
                  Most Rated : &nbsp; &nbsp;{restoran.price}
                </Text>

                <Box display="flex" mt="2" alignItems="center">
                  {Array(5)
                    .fill("")
                    .map((_, i) => (
                      <StarIcon
                        key={i}
                        color={i < restoran.star ? "teal.500" : "gray.300"}
                      />
                    ))}
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Stack>
    </Stack>
  );
};

export default RestoransList;
