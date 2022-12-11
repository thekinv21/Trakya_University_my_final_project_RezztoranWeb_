import {
  Stack,
  Image,
  Card,
  Heading,
  Text,
  Divider,
  CardBody,
  CheckboxGroup,
  Checkbox,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import Map from "../../Assets/images/MAP.png";

const DiscoverFilter = () => {
  return (
    <Stack direction="column" spacing="4">
      <Image src={Map} objectFit="cover" borderRadius="10px" cursor="pointer" />

      <Card bg="#fff" borderRadius="18px">
        <CardBody>
          {/*-------------------------------Title vb------------------------------- */}

          <Heading fontSize="16px" fontWeight="bold">
            ARAMA KRİTERLERİ
          </Heading>

          <Text
            w="50%"
            fontSize="10px"
            bg="rgb(248, 179, 51)"
            color="#fff"
            size="xs"
            m="10px 0px"
            textAlign="center"
            borderRadius="10px"
          >
            Online Rezervasyonalar
          </Text>

          <Divider m="20px 0px" />

          {/*------------------------------Yemek Türü Seçme vb------------------------------ */}

          <Heading fontSize="14px" fontWeight="bold">
            MUTFAK
          </Heading>

          <CheckboxGroup colorScheme="orange" fontSize="small">
            <Stack mt="20px" spacing={[1, 6]} direction="column">
              <Checkbox value="ciger">Ciger</Checkbox>
              <Checkbox value="kebap">Kebap</Checkbox>
              <Checkbox value="alkollu">Alkollü</Checkbox>
              <Checkbox value="icecek">İçecek</Checkbox>
              <Checkbox value="pizza">Pizza</Checkbox>
            </Stack>
          </CheckboxGroup>

          <Divider m="20px 0px" />

          {/*------------------------------Değerlendirme------------------------------ */}

          <Heading fontSize="16px" fontWeight="bold">
            DEĞERLENDİRME
          </Heading>

          <Stack direction="row" spacing={14} m="20px 0px 0px" color="orange">
            <Heading fontSize="small">1</Heading>
            <Heading fontSize="small">2</Heading>
            <Heading fontSize="small">3</Heading>
            <Heading fontSize="small">4</Heading>
            <Heading fontSize="small">5</Heading>
          </Stack>

          <Slider defaultValue={0} min={0} max={5} step={1} m="20px 0px">
            <SliderTrack bg="orange.100">
              <SliderFilledTrack bg="orange" />
            </SliderTrack>
            <SliderThumb boxSize={4} bg="orange.200" />
          </Slider>
        </CardBody>
      </Card>
    </Stack>
  );
};

export default DiscoverFilter;
