import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "yup-phone";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
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
import { Link } from "@chakra-ui/react";

function HmrForm() {
  return (
    <Box
      className="hmrForm"
      padding={{ base: "5", xl: "9" }}
      // h={{ base: "l", xl: "xl" }}
      mx={{ base: "10", lg: "44", xl: "80" }}
      mt={{ base: "5", lg: "20", xl: "32" }}
      borderWidth="thin"
      borderRadius={{ base: "2xl", xl: "2xl" }}
    >
      <Heading fontWeight="semibold" color="hmrblack.500">
        Interested?
      </Heading>
      <Text fontWeight="500" color="hmrgray.500">
        Fill the form below to know more or you can contact us on the mentioned
        phone number
      </Text>
      <Stack direction={["column", "row"]}>
        <Box w={{ base: "l", lg: "96", xl: "2xl" }}>
          <FormControl id="name">
            <FormLabel marginTop={{ base: "5", xl: "9" }}>Your Name</FormLabel>
            <Input placeholder="Full Name" />
            <FormLabel marginTop={{ base: "5", xl: "9" }}>Email ID</FormLabel>
            <Input placeholder="Email ID" />
            <FormLabel marginTop={{ base: "5", xl: "9" }}>
              Phone Number
            </FormLabel>
            <Input placeholder="Phone Number" />
            <FormLabel marginTop={{ base: "5", xl: "9" }}>
              What can we help you with?
            </FormLabel>
            <Textarea placeholder="Description" />
          </FormControl>
        </Box>
        <Box
          // bg="red.100"
          color="hmrblack.500"
          paddingTop={{ base: "0", xl: "12" }}
          paddingLeft={{ base: "0", lg: "10", xl: "10" }}
          fontSize={{ base: "l", xl: "l" }}
        >
          <VStack alignItems="start" mt={{ base: "10", xl: "0" }}>
            <HStack>
              <MdCall color="#01CFE7" />
              <Text>
                <Link href="tel:91 98103-06346">+91 98103-06346</Link>
              </Text>
            </HStack>
            <HStack marginTop={{ base: "0", xl: "7" }}>
              <MdMail color="#01CFE7" />
              <Text>
                <Link href="mailto:hi@hmrhostels.com">hi@hmrhostels.com</Link>
              </Text>
            </HStack>
          </VStack>
          <Image display={{ base: "none", xl: "initial" }} src="thumbsup.png" />
        </Box>
      </Stack>
      <Button
        colorScheme="hmrblack"
        borderRadius="xl"
        px="5"
        fontSize={{ base: "l", md: "14", xl: "16" }}
        marginTop={{ base: "5", xl: "9" }}
        fontWeight="normal"
        width={{ base: "100%", lg: "initial", xl: "initial" }}
      >
        Submit
      </Button>
    </Box>
  );
}

export default function ContactForm() {
  const schema = Yup.object().shape({
    name: Yup.string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .min(6, "Please enter your full name")
      .required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string()
      .required("You cannot procceed without a valid phone number")
      .phone("IN", false, "Please enter a valid phone number"),
    description: Yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data, "data");
  };
  console.log(errors, "errors");
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        className="hmrForm"
        padding={{ base: "5", xl: "9" }}
        mx={{ base: "10", lg: "44", xl: "80" }}
        mt={{ base: "5", lg: "20", xl: "32" }}
        borderWidth="thin"
        borderRadius={{ base: "2xl", xl: "2xl" }}
      >
        <Heading fontWeight="semibold" color="hmrblack.500">
          Interested?
        </Heading>
        <Text fontWeight="500" color="hmrgray.500">
          Fill the form below to know more or you can contact us on the
          mentioned phone number
        </Text>
        <Stack direction={["column", "row"]}>
          <Box w={{ base: "l", lg: "96", xl: "2xl" }}>
            <FormControl isInvalid={errors.name}>
              <FormLabel marginTop={{ base: "5", xl: "9" }}>
                Your Name
              </FormLabel>
              <Input placeholder="Full Name" {...register("name")} />
              <FormErrorMessage>
                {errors.name && errors.name.message}
              </FormErrorMessage>
            </FormControl>
            <FormControl>
              <FormLabel marginTop={{ base: "5", xl: "9" }}>Email ID</FormLabel>
              <Input placeholder="Email ID" {...register("email")} />
            </FormControl>
            <FormControl>
              <FormLabel marginTop={{ base: "5", xl: "9" }}>
                Phone Number
              </FormLabel>
              <Input placeholder="Phone Number" {...register("phone")} />
            </FormControl>
            <FormControl>
              <FormLabel marginTop={{ base: "5", xl: "9" }}>
                What can we help you with?
              </FormLabel>
              <Textarea
                placeholder="Description"
                {...register("description")}
              />
            </FormControl>
          </Box>
          <Box
            // bg="red.100"
            color="hmrblack.500"
            paddingTop={{ base: "0", xl: "12" }}
            paddingLeft={{ base: "0", lg: "10", xl: "10" }}
            fontSize={{ base: "l", xl: "l" }}
          >
            <VStack alignItems="start" mt={{ base: "10", xl: "0" }}>
              <HStack>
                <MdCall color="#01CFE7" />
                <Text>
                  <Link href="tel:91 98103-06346">+91 98103-06346</Link>
                </Text>
              </HStack>
              <HStack marginTop={{ base: "0", xl: "7" }}>
                <MdMail color="#01CFE7" />
                <Text>
                  <Link href="mailto:hi@hmrhostels.com">hi@hmrhostels.com</Link>
                </Text>
              </HStack>
            </VStack>
            <Image
              display={{ base: "none", xl: "initial" }}
              src="thumbsup.png"
            />
          </Box>
        </Stack>
        <Button
          colorScheme="hmrblack"
          borderRadius="xl"
          px="5"
          fontSize={{ base: "l", md: "14", xl: "16" }}
          marginTop={{ base: "5", xl: "9" }}
          fontWeight="normal"
          width={{ base: "100%", lg: "initial", xl: "initial" }}
        >
          Submit
        </Button>
      </Box>
    </form>
  );
}
