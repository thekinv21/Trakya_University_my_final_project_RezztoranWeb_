import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  InputGroup,
  Input,
  Button,
  InputLeftAddon,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import { FcLike, FcSportsMode, FcRating } from "react-icons/fc";
import axios from "axios";
import { BiRestaurant } from "react-icons/bi";
import { FaDollarSign, FaStar } from "react-icons/fa";
import { useFormik } from "formik";
import restaurantFilter from "../../Validation/DiscoverValidate";

const DiscoverCard = () => {
  const [favorite, setFavorite] = useState([]);

  //------------------------RESTORANLARIN Filtrelenmesi------------------

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      restaurantTitle: "",
      restaurantPrice: "",
      restaurantStars: "",
    },

    validationSchema: restaurantFilter,

    onSubmit: (values) => {
      console.log(values);
    },
  });

  //--------------------RESTORANLARIN Bilgilerini Çek---------------

  useEffect(() => {
    axios("http://localhost:8080/favorites").then((favRestaurant) =>
      setFavorite(favRestaurant.data)
    );
  }, []);

  return (
    <Card
      maxW="100vw"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bg="#fff"
      boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
      justifyContent="center"
      borderRadius="18px"
    >
      {/*---------------------------------Form CONTAİNER------------------------------- */}

      <form
        onSubmit={handleSubmit}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack w={["100%", "100%", "50%", "880px"]}>
          {/*---------------------------------TİTLE TEXT------------------------------------- */}

          <CardHeader alignItems="flex-start" w="100%">
            <Heading fontWeight="semibold" fontSize="20px">
              EDİRNE DAHİLİNDE RESTORANLAR
            </Heading>
          </CardHeader>

          <CardBody>
            <Heading
              fontWeight="semibold"
              fontSize="small"
              mb="15px"
              color="orange"
            >
              Filtrele :{" "}
            </Heading>

            <Stack
              direction={["column", "column", "column", "row"]}
              spacing="7"
            >
              {/*--------------------------------------Restaurant Filtrele--------------------------------- */}

              <InputGroup>
                <InputLeftAddon children={<BiRestaurant fontSize="18px" />} />

                <Input
                  name="restaurantTitle"
                  onChange={handleChange}
                  borderLeftRadius="none"
                  fontSize="small"
                  placeholder="Restaurant / Caffe "
                  autoComplete="off"
                  focusBorderColor="rgb(248, 179, 51)"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon children={<FaDollarSign fontSize="18px" />} />

                <Input
                  name="restaurantPrice"
                  onChange={handleChange}
                  borderLeftRadius="none"
                  fontSize="small"
                  placeholder="Price $ "
                  autoComplete="off"
                  focusBorderColor="rgb(248, 179, 51)"
                />
              </InputGroup>

              <InputGroup>
                <InputLeftAddon children={<FaStar fontSize="18px" />} />

                <Input
                  name="restaurantStars"
                  onChange={handleChange}
                  borderLeftRadius="none"
                  fontSize="small"
                  placeholder="Star "
                  maxLength={1}
                  autoComplete="off"
                  focusBorderColor="rgb(248, 179, 51)"
                />
              </InputGroup>

              {/*--------------------------------UYGULA BUTTON------------------------------- */}

              <InputGroup>
                <Button
                  type="submit"
                  w="100%"
                  bg="rgb(248, 179, 51)"
                  color="#fff"
                  fontWeight="regular"
                  fontSize="small"
                  _hover={{ bg: "orange" }}
                >
                  Uygula
                </Button>
              </InputGroup>
            </Stack>
          </CardBody>

          {/*----------------------------En iyileri ve en Yakın Button--------------------------- */}

          <Stack
            direction={["column", "column", "column", "row"]}
            alignItems="center"
            pl="30px"
          >
            <Button
              variant="outline"
              size="sm"
              w="130px"
              borderRadius="50px"
              fontWeight="regular"
              rightIcon={<FcRating />}
            >
              Aile Dostu
            </Button>
            <Button
              variant="outline"
              size="sm"
              w="130px"
              borderRadius="50px"
              fontWeight="regular"
              rightIcon={<FcSportsMode />}
            >
              En Yakin
            </Button>
            <Button
              variant="outline"
              size="sm"
              w="130px"
              overflow="hidden"
              borderRadius="50px"
              fontWeight="regular"
              rightIcon={<FcLike />}
            >
              En iyisi
            </Button>
          </Stack>

          <Divider />

          {/*------------------------------------TEXT--------------------------------------- */}

          <CardBody>
            <Text fontSize="small" p="0px 20px" textAlign="center">
              Edirne bölgesindeki en iyi restoranları mı arıyorsun? Kahvaltı,
              öğle ve akşam yemeği için dışarıda yiyebileceğin en iyi yerleri
              senin için derledik. İstanbul bölgesindeki en iyi restoranları
              keşfetmeye hazır mısın? Hadi başlayalım! Bu arada, çevrimiçi bir
              masa ayırtmayı unutmayın. Önceden rezervasyon yaptırmazsanız,
              restorandan oturmadan geri çevrilme riskiniz var!
            </Text>
          </CardBody>

          {/*---------------------------------RESTORANLAR------------------------------------- */}

          <CardBody>
            <Stack direction="row" spacing="6">
              {favorite.map((fav) => (
                <Stack alignItems="center" key={fav.id}>
                  <Image
                    w="60px"
                    h="60px"
                    objectFit="cover"
                    borderRadius="50%"
                    src={fav.imgURL}
                  />
                  <Text
                    textAlign="center"
                    fontSize="smaller"
                    fontWeight="semibold"
                  >
                    {fav.title}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </CardBody>
        </Stack>
      </form>
    </Card>
  );
};

export default DiscoverCard;
