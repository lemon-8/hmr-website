import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Textarea,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  VStack,
  Flex,
} from "@chakra-ui/layout";
import { MdCall } from "react-icons/md";
import { MdMail } from "react-icons/md";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

export default function HmrForm() {
  return (
    <Box
      className="hmrForm"
      padding={{ base: "5", lg: "9" }}
      // h={{ base: "l", lg: "xl" }}
      mx={{ base: "10", lg: "80" }}
      mt={{ base: "5", lg: "32" }}
      borderWidth="thin"
      borderRadius={{ base: "2xl", lg: "2xl" }}
    >
      <Heading fontWeight="semibold" color="hmrblack.500">
        Interested?
      </Heading>
      <Text fontWeight="500" color="hmrgray.500">
        Fill the form below to know more or you can contact us on the mentioned
        phone number
      </Text>
      <Stack direction={["column", "row"]}>
        <Box w={{ base: "l", lg: "2xl" }}>
          <FormControl id="name">
            <FormLabel marginTop={{ base: "5", lg: "9" }}>Your Name</FormLabel>
            <Input placeholder="Full Name" />
            <FormLabel marginTop={{ base: "5", lg: "9" }}>Email ID</FormLabel>
            <Input placeholder="Email ID" />
            <FormLabel marginTop={{ base: "5", lg: "9" }}>
              Phone Number
            </FormLabel>
            <Input placeholder="Phone Number" />
            <FormLabel marginTop={{ base: "5", lg: "9" }}>
              What can we help you with?
            </FormLabel>
            <Textarea placeholder="Description" />
          </FormControl>
        </Box>
        <Box
          // bg="red.100"
          color="hmrblack.500"
          paddingTop={{ base: "0", lg: "12" }}
          paddingLeft={{ base: "0", lg: "10" }}
          fontSize={{ base: "l", lg: "l" }}
        >
          <VStack alignItems="start" mt={{ base: "10", lg: "0" }}>
            <HStack>
              <MdCall color="#01CFE7" />
              <Text>+91 96504-15827</Text>
            </HStack>
            <HStack marginTop={{ base: "0", lg: "7" }}>
              <MdMail color="#01CFE7" />
              <Text>hi@hmrhostels.com</Text>
            </HStack>
          </VStack>
          <Image display={{ base: "none", lg: "initial" }} src="thumbsup.png" />
        </Box>
      </Stack>
      <Button
        colorScheme="hmrblack"
        borderRadius="lg"
        px="5"
        fontSize={{ base: "l", md: "2", lg: "16" }}
        marginTop={{ base: "5", lg: "9" }}
        fontWeight="normal"
        width={{ base: "100%", lg: "initial" }}
      >
        Submit
      </Button>
    </Box>
  );
}

const hmrForm = () => {
  scroller.scrollTo("hmrForm", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
