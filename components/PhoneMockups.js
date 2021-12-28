import { Image } from "@chakra-ui/image";

import {
  Purchase32,
  Bullhorn32,
  Location32,
  Clean32,
  IdManagement32,
} from "@carbon/icons-react";
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

import { GoPrimitiveDot } from "react-icons/go";
import { Icon } from "@chakra-ui/react";

export default function PhoneMockups() {
  return (
    //   Dual mockup
    <Box maxWidth="100%" className="ourApp">
      <Heading
        fontSize={{ base: "3xl", xl: "6xl" }}
        mx={{ base: "10", lg: "44", xl: "80" }}
        mt={{ base: "10", xl: "40" }}
        fontWeight="600"
        textAlign="center"
        color="hmrblack.500"
      >
        What makes us{" "}
        <Text as="span" color="hmrcyan.500">
          different?
        </Text>
      </Heading>
      <Center
        textAlign="center"
        mx={{ base: "12", xl: "10" }}
        mt={{ base: "2", xl: "2" }}
        fontWeight="500"
        color="hmrgray.500"
        fontSize={{ base: "xl", xl: "xl" }}
      >
        We have our own app which makes the hostel experience better than ever
      </Center>
      <Center mt={{ base: "10", xl: "0" }} mb={{ base: "10", xl: "20" }}>
        <Image
          src="/RightPhone.png"
          alt="RightPhone"
          marginLeft={{ base: "44", lg: "80", xl: "80" }}
          position="absolute"
          maxW={{ base: "50%", xl: "100%" }}
        />
        <Image
          src="/LeftPhone.png"
          alt="LeftPhone"
          position="absolute"
          marginTop={{ base: "64", xl: "0" }}
          marginBottom={{ base: "64", xl: "0" }}
          marginRight={{ base: "20", lg: "44", xl: "80" }}
          maxW={{ base: "75%", xl: "100%" }}
        />
        <Image
          src="/Blob.png"
          mt={{ base: "0", xl: "20" }}
          alt="Blob Background"
        />
      </Center>

      {/* Large phone small phone */}
      <Box maxWidth="100%">
        <Stack
          direction={["column", "row"]}
          mx={{ base: "10", lg: "44", xl: "52" }}
          textAlign="left"
        >
          <Box>
            <Image src="2phones.png" alt="2 Phones" />
          </Box>
          <VStack>
            <Heading
              fontSize={{ base: "3xl", xl: "5xl" }}
              mx={{ base: "0", xl: "10" }}
              // pl={{ base: "0", xl: "10" }}
              fontWeight="500"
              color="hmrblack.500"
            >
              The all in one app for
            </Heading>
            <Box
              paddingLeft={{ base: "0", xl: "5" }}
              paddingTop={{ base: "0", xl: "5" }}
            >
              <Features icon={Purchase32} />
              <Features icon={Bullhorn32} text="Viewing Announcements" />
              <Features icon={Location32} text="Checking Out Nearby Places" />
              <Features icon={Clean32} text="Request Cleaning of the Room" />
              <Features icon={IdManagement32} text="Approving Visitors" />
            </Box>
          </VStack>
        </Stack>
      </Box>
      {/* Paying Rent */}
      <Box
        // bg="linkedin.100"
        mt={{ base: "10", xl: "32" }}
        mx={{ base: "10", lg: "44", xl: "60" }}
      >
        <Stack direction={["column", "row"]}>
          <Image src="PayingRent.png" alt="Paying rent" />

          <VStack justifyContent="center">
            <Heading
              // mb={{ base: "0", xl: "0" }}
              marginLeft={{ xl: "80" }}
              textAlign="end"
              fontWeight="500"
              fontSize={{ base: "3xl", xl: "6xl" }}
              color="hmrcyan.500"
            >
              Paying rent{" "}
              <Text as="span" color="hmrblack.500">
                has never been easier
              </Text>
            </Heading>
            <Text
              fontWeight="400"
              color="hmrgray.500"
              textAlign="right"
              fontSize={{ base: "xl", xl: "26" }}
              paddingLeft={{ xl: "60" }}
            >
              Writing a very long sentance to justify the usage of the heading
              so that the customer is interested in taking a look at the
              website.
            </Text>
          </VStack>
        </Stack>
      </Box>
      {/* Safe and secure space */}
      <Box
        mt={{ base: "10", lg: "28", xl: "32" }}
        mx={{ base: "10", lg: "44", xl: "60" }}
      >
        <Stack direction={["column", "row"]}>
          <VStack textAlign="left" justifyContent="center">
            <Heading
              fontWeight="500"
              fontSize={{ base: "3xl", xl: "6xl" }}
              color="hmrcyan.500"
              marginRight={{ xl: "72" }}
            >
              Your own safe{" "}
              <Text as="span" color="hmrblue.500">
                and secure space
              </Text>
            </Heading>
            <Text
              fontWeight="400"
              color="hmrgray.500"
              textAlign="left"
              paddingRight={{ xl: "72" }}
              fontSize={{ base: "xl", xl: "26" }}
            >
              Writing a very long sentance to justify the usage of the heading
              so that the customer is interested in taking a look at the
              website.
            </Text>
          </VStack>
          <Image src="SecureSpace.png" alt="Safe and secure space" />
        </Stack>
      </Box>
    </Box>
  );
}

function Features({ icon = GoPrimitiveDot, text = "Managing rent" }) {
  return (
    <HStack
      width={{ xl: "fit-content" }}
      bg="#F5F9FE"
      padding="3"
      px="5"
      borderRadius="full"
      marginTop={{ base: "10", xl: "8" }}
      lineHeight="none"
      fontSize={{ base: "xl", lg: "xl", xl: "2xl" }}
      fontFamily="poppins"
      fontWeight="500"
      color="hmrcyan.500"
    >
      <Icon as={icon} color="hmrcyan.500" boxSize="1.3em" />
      <Text>{text}</Text>
    </HStack>
  );
}
