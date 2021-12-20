import { Image } from "@chakra-ui/image";
import { MdOutlineCreditCard } from "react-icons/md";
import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  VStack,
  Center,
  Flex,
} from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import { Iframe } from "react-iframe";
import { AspectRatio } from "@chakra-ui/react";

export default function GetStarted() {
  return (
    <Box
      justifyContent="center"
      alignContent="center"
      // width={{ base: "80%", lg: "80%" }}
      borderWidth="thin"
      borderRadius={{ base: "6", lg: "14" }}
      mx={{ base: "10", lg: "60" }}
      mt={{ base: "5", lg: "32" }}
    >
      <Stack direction={["column", "row"]}>
        <Box
          // borderWidth="thin"
          // borderRadius={{ base: "6", lg: "14" }}
          padding={{ base: "6", lg: "14" }}
          // bg="pink"
          // h={{ base: "60vh", lg: "70vh" }}
          // mx={{ base: "10", lg: "60" }}
          // mt={{ base: "5", lg: "32" }}
        >
          <VStack alignItems="start">
            <HStack>
              <Heading fontWeight="500" fontSize={{ base: "3xl", lg: "6xl" }}>
                So lets get<Text color="hmrcyan.500"> started!</Text>
              </Heading>
            </HStack>
            <Text
              fontWeight="500"
              fontSize={{ base: "xl", lg: "2xl" }}
              color="hmrgray.500"
            >
              This hostel is located nearby all the major hubs and connectivity.
            </Text>

            <Stack
              direction={["column", "row"]}
              // bg="blue.100"
              width="100%"
              py={{ base: "5", lg: "14" }}
              spacing="4"
            >
              <Button
                colorScheme="hmrblack"
                variant="outline"
                borderRadius="full"
                width="100%"
                px={{ base: "3", lg: "14" }}
                fontSize={{ base: "14", lg: "16" }}
                fontWeight="normal"
              >
                Download App
              </Button>
              <Button
                colorScheme="hmrblack"
                borderRadius="full"
                width="100%"
                px={{ base: "5", lg: "14" }}
                fontSize={{ base: "sm", lg: "16" }}
                fontWeight="normal"
              >
                Book a Visit
              </Button>
            </Stack>
          </VStack>
        </Box>
        <Box bg="pink">
          {/* <AspectRatio ratio={16 / 9}> */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng"
            alt="demo"
            allowFullScreen
          />
          {/* </AspectRatio> */}
        </Box>
      </Stack>
    </Box>
  );
}

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}
