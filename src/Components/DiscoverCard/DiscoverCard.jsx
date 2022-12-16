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
  Select,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import {
  FcConferenceCall,
  FcCalendar,
  FcClock,
  FcLike,
  FcSportsMode,
  FcRating,
} from "react-icons/fc";
import axios from "axios";
import { BiRestaurant } from "react-icons/bi";
import { FaDollarSign, FaStar } from "react-icons/fa";

const DiscoverCard = () => {
  const [favorite, setFavorite] = useState([]);

  //--------------------RESTORANLARIN IMAGE VE İSİMLERİNİ ALALIM---------------

  useEffect(() => {
    async function getFavorites() {
      const { data: FavoriteRestaurants } = await axios.get(
        "../Database/Favorites.json"
      );

      setFavorite(FavoriteRestaurants);
    }

    getFavorites();
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
      {/*---------------------------------CARD CONTAİNER------------------------------- */}

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

          <Stack direction={["column", "column", "column", "row"]} spacing="7">
            {/*--------------------------------------Restaurant name vs--------------------------------- */}

            <InputGroup>
              <InputLeftAddon children={<BiRestaurant fontSize="18px" />} />

              <Input
                borderLeftRadius="none"
                fontSize="small"
                placeholder="Restaurant / Caffe "
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children={<FaDollarSign fontSize="18px" />} />

              <Input
                borderLeftRadius="none"
                fontSize="small"
                placeholder="Price $ "
              />
            </InputGroup>

            <InputGroup>
              <InputLeftAddon children={<FaStar fontSize="18px" />} />

              <Input
                borderLeftRadius="none"
                fontSize="small"
                placeholder="Star "
                maxLength={1}
              />
            </InputGroup>
          </Stack>
        </CardBody>

        <CardBody>
          <Heading
            fontWeight="semibold"
            fontSize="small"
            mb="15px"
            color="orange"
          >
            Masa Bul :{" "}
          </Heading>

          <Stack direction={["column", "column", "column", "row"]} spacing="7">
            {/*---------------------------------KİŞİ SAYISI------------------------------- */}
            <InputGroup>
              <InputLeftAddon children={<FcConferenceCall fontSize="20px" />} />
              <Select
                borderLeftRadius="none"
                fontSize="small"
                textAlign="center"
              >
                <option>Kişi Sayısı</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
            </InputGroup>

            {/*-----------------------------------TARİH----------------------------------- */}

            <InputGroup>
              <InputLeftAddon children={<FcCalendar fontSize="18px" />} />

              <Input
                type="date"
                fontSize="small"
                defaultValue={"arih"}
                textAlign="center"
              />
            </InputGroup>

            {/*--------------------------------------SAAT--------------------------------- */}

            <InputGroup>
              <InputLeftAddon children={<FcClock fontSize="18px" />} />

              <Select
                borderLeftRadius="none"
                fontSize="small"
                textAlign="center"
              >
                <option>Saat Seçiniz</option>
                <option value="12:30">12:30</option>
                <option value="12:30">12:30</option>
                <option value="12:30">12:30</option>
                <option value="12:30">12:30</option>
              </Select>
            </InputGroup>

            {/*--------------------------------UYGULA BUTTON------------------------------- */}

            <InputGroup>
              <Button
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

          {/*----------------------------En iyileri ve en Yakın Button--------------------------- */}

          <Stack direction="row" m="25px">
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
              borderRadius="50px"
              fontWeight="regular"
              rightIcon={<FcLike />}
            >
              En iyisi
            </Button>
          </Stack>

          <Divider />

          {/*---------------------------------AÇİKLAMA TEXT------------------------------------- */}

          <CardBody>
            <Text fontSize="small" p="0px 20px">
              Edirne bölgesindeki en iyi restoranları mı arıyorsun? Kahvaltı,
              öğle ve akşam yemeği için dışarıda yiyebileceğin en iyi yerleri
              senin için derledik. İstanbul bölgesindeki en iyi restoranları
              keşfetmeye hazır mısın? Hadi başlayalım! Bu arada, çevrimiçi bir
              masa ayırtmayı unutmayın. Önceden rezervasyon yaptırmazsanız,
              restorandan oturmadan geri çevrilme riskiniz var!
            </Text>
          </CardBody>

          {/*----------------------------------YAKIN VE POPULER RESTORANLAR-------------------------- */}

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
                  <Text textAlign="center" fontSize="smaller">
                    {fav.title}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </CardBody>
        </CardBody>

        {/*---------------------------------RESTORANLAR VE IMAGELERİ------------------------------------- */}
      </Stack>
    </Card>
  );
};

export default DiscoverCard;
