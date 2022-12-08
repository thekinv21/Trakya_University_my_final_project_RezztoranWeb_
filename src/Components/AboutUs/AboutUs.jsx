import { Stack, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import React, { Fragment } from "react";
import {
  FcAssistant,
  FcDonate,
  FcInTransit,
  FcCamcorder,
} from "react-icons/fc";

const AboutUs = () => {
  const About = ({ title, text, icon }) => {
    return (
      <Stack
        w="300px"
        h="230px"
        maxW="100%"
        bg="#ddd"
        borderRadius="10px"
        boxShadow="rgb(51 51 51 / 10%) 0px 1px 4px"
        alignItems={"center"}
        justifyContent="center"
        overflow="hidden"
      >
        <Flex
          w="16px"
          h="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="5px"
        >
          {icon}
        </Flex>
        <Text fontWeight={600} pt="20px">
          {title}
        </Text>
        <Text fontSize="12px" p="10px 40px" color="gray.600">
          {text}
        </Text>
      </Stack>
    );
  };

  return (
    <Fragment>
      <Stack w="100%" textAlign="center" spacing="14" alignItems="center">
        <Heading color="rgb(0,0,0,0.6)" fontWeight="600">
          SAĞLADIĞI KOLAYLIKLAR
        </Heading>

        <Stack
          h="100%"
          w="100%"
          direction={["column", "column", "column", "row"]}
          alignItems="center"
          justifyContent="center"
          spacing="10"
        >
          {/*------------------------7/24 canli iletişim------------------------------- */}
          <About
            icon={<Icon as={FcAssistant} w={20} h={20} />}
            title={"Canli Destek"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
          {/*------------------------Kolay Odeme------------------------------ */}
          <About
            icon={<Icon as={FcDonate} w={20} h={20} />}
            title={"Güvenli Ödeme"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
          {/*------------------------Hızlı Erişim------------------------------- */}
          <About
            icon={<Icon as={FcInTransit} w={20} h={20} />}
            title={"Hizli Ulaşim"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
          {/*------------------------Bonus Puanlar------------------------------- */}
          <About
            icon={<Icon as={FcCamcorder} w={20} h={20} />}
            title={"Ön İzleme"}
            text={
              "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore..."
            }
          />
        </Stack>
      </Stack>
    </Fragment>
  );
};

export default AboutUs;
