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

export default function PhoneMockups() {
  return (
    //   Dual mockup
    <Box maxWidth="100vw">
      <Heading
        fontSize={{ base: "3xl", lg: "6xl" }}
        mx={{ base: "10", lg: "80" }}
        mt={{ base: "10", lg: "40" }}
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
        mx={{ base: "12", lg: "10" }}
        mt={{ base: "2", lg: "2" }}
        fontWeight="500"
        color="hmrgray.500"
        fontSize={{ base: "xl", lg: "xl" }}
      >
        We have our own app which makes the hostel experience better than ever
      </Center>
      <Center mt={{ base: "10", lg: "0" }} mb={{ base: "10", lg: "20" }}>
        <Image
          src="/RightPhone.png"
          marginLeft={{ base: "44", lg: "80" }}
          position="absolute"
          maxW={{ base: "50%", lg: "100%" }}
        />
        <Image
          src="/LeftPhone.png"
          position="absolute"
          marginTop={{ base: "64", lg: "0" }}
          marginBottom={{ base: "64", lg: "0" }}
          marginRight={{ base: "20", lg: "80" }}
          maxW={{ base: "75%", lg: "100%" }}
        />
        <Image src="/Blob.png" mt={{ base: "0", lg: "20" }} />
      </Center>

      {/* Large phone small phone */}
      <Box maxWidth="100%">
        <Stack
          direction={["column", "row"]}
          mx={{ base: "10", lg: "52" }}
          textAlign="left"
        >
          <Box>
            <Image src="2phones.png" />
          </Box>
          <VStack>
            <Heading
              fontSize={{ base: "3xl", lg: "5xl" }}
              mx={{ base: "0", lg: "10" }}
              // pl={{ base: "0", lg: "10" }}
              fontWeight="500"
              color="hmrblack.500"
            >
              The all in one app for
            </Heading>
            <Box
              paddingLeft={{ base: "0", lg: "5" }}
              paddingTop={{ base: "0", lg: "5" }}
            >
              <Features />
              <Features text="Viewing Announcements" />
              <Features text="Checking Out Nearby Places" />
              <Features text="Request Cleaning of the Room" />
              <Features text="Approving Visitors" />
            </Box>
          </VStack>
        </Stack>
      </Box>
      {/* Paying Rent */}
      <Box
        // bg="linkedin.100"
        mt={{ base: "10", lg: "32" }}
        mx={{ base: "10", lg: "60" }}
      >
        <Stack direction={["column", "row"]}>
          <Image src="PayingRent.png" />

          <VStack justifyContent="center">
            <Heading
              mb={{ base: "0", lg: "10" }}
              textAlign="end"
              fontWeight="500"
              fontSize={{ base: "3xl", lg: "6xl" }}
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
              fontSize={{ base: "xl", lg: "26" }}
            >
              Writing a very long sentance to justify the usage of the heading
              so that the customer is interested in taking a look at the
              website.
            </Text>
          </VStack>
        </Stack>
      </Box>
      {/* Safe and secure space */}
      <Box mt={{ base: "10", lg: "32" }} mx={{ base: "10", lg: "60" }}>
        <Stack direction={["column", "row"]}>
          <VStack textAlign="left" justifyContent="center">
            <Heading
              textAlign="start"
              fontWeight="500"
              fontSize={{ base: "xl", lg: "6xl" }}
              color="hmrcyan.500"
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
              fontSize={{ base: "xl", lg: "26" }}
            >
              Writing a very long sentance to justify the usage of the heading
              so that the customer is interested in taking a look at the
              website.
            </Text>
          </VStack>
          <Image src="SecureSpace.png" />
        </Stack>
      </Box>
    </Box>
  );
}

function Features({ icon = <MdOutlineCreditCard />, text = "Managing rent" }) {
  return (
    <HStack
      marginTop={{ base: "4", lg: "8" }}
      lineHeight="taller"
      fontSize={{ base: "xl", lg: "27" }}
      fontFamily="poppins"
      fontWeight="500"
      color="hmrcyan.500"
    >
      {icon}
      <Text>{text}</Text>
    </HStack>
  );
}
