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
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";
// import { Link } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box
      mt={{ base: "20", lg: "52" }}
      bg="hmrblue.500"
      height={{ base: "60vh", lg: "96" }}
      padding={{ base: "10", lg: "28" }}
    >
      <Stack
        direction={["column", "row"]}
        justifyContent={{ base: "left", lg: "center" }}
      >
        <Box>
          <Heading fontSize="xl" color="white" fontWeight="medium">
            Contact Us
          </Heading>
          <UnorderedList
            listStyleType="none"
            margin="0"
            pt="3"
            color="white"
            fontWeight="thin"
            lineHeight="9"
          >
            <ListItem>
              <Link href="tel:91 98103-06346">+91 98103-06346</Link>
            </ListItem>
            <ListItem>
              <Link href="mailto:hi@hmrhostels.com">hi@hmrhostels.com</Link>
            </ListItem>
          </UnorderedList>
        </Box>
        <Box pl={{ base: "0", lg: "16" }}>
          <Heading fontSize="xl" color="white" fontWeight="medium">
            HMR Hostels
          </Heading>
          <UnorderedList
            listStyleType="none"
            margin="0"
            pt="3"
            color="white"
            fontWeight="thin"
            lineHeight="9"
          >
            <ListItem>
              <Link href="/privacy">Privacy Policy</Link>
              <ListItem>
                Near Metro College, Knowledge Park III, Greater Noida
              </ListItem>
            </ListItem>
          </UnorderedList>
        </Box>
      </Stack>
      <Text
        textAlign="center"
        color="gray.400"
        marginTop={{ base: "12", lg: "16" }}
      >
        Developed and Designed by{" "}
        <Text as="span" color="#FCE100">
          <Link href="https://lemon8.in/">🍋Lemon8.in</Link>
        </Text>
      </Text>
    </Box>
  );
}
