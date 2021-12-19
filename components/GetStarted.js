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

export default function GetStarted() {
  return (
    <Box>
      <Box
        borderWidth="thin"
        borderRadius={{ base: "6", lg: "14" }}
        padding={{ base: "6", lg: "14" }}
        // bg="pink"
        h={{ base: "60vh", lg: "50vh" }}
        mx={{ base: "10", lg: "60" }}
        mt={{ base: "5", lg: "32" }}
      >
        <VStack alignItems="start">
          <Heading fontWeight="500" fontSize={{ base: "4xl", lg: "6xl" }}>
            So lets get<Text color="hmrcyan.500"> started!</Text>
          </Heading>
          <Text
            fontWeight="500"
            fontSize={{ base: "xl", lg: "2xl" }}
            color="hmrgray.500"
          >
            This hostel is located nearby all the major hubs and connectivity.
          </Text>
          <HStack>
            <Button
              colorScheme="hmrblack"
              variant="outline"
              borderRadius="full"
              px={{ base: "5", lg: "5" }}
              fontSize={{ base: "sm", lg: "16" }}
              fontWeight="normal"
            >
              Download App
            </Button>
            <Button
              colorScheme="hmrblack"
              borderRadius="full"
              px={{ base: "5", lg: "5" }}
              fontSize={{ base: "sm", lg: "16" }}
              fontWeight="normal"
            >
              Book a Visit
            </Button>
          </HStack>
        </VStack>
      </Box>
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
