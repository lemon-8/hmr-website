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

export default function Footer() {
  return (
    <Box
      mt={{ base: "20", lg: "52" }}
      bg="hmrblue.500"
      height={{ base: "65vh", lg: "96" }}
      padding={{ base: "10", lg: "28" }}
    >
      <Stack direction={["column", "row"]} justifyContent="center">
        <Box>
          <Heading fontSize="xl" color="white" fontWeight="medium">
            Rental Plans
          </Heading>
          <UnorderedList
            listStyleType="none"
            margin="0"
            color="white"
            fontWeight="thin"
            lineHeight="8"
          >
            <ListItem>What we are</ListItem>
            <ListItem>What sets us apart</ListItem>
            <ListItem>Know More</ListItem>
          </UnorderedList>
        </Box>
        <Box px={{ base: "0", lg: "44" }}>
          <Heading fontSize="xl" color="white" fontWeight="medium">
            Location
          </Heading>
          <UnorderedList
            listStyleType="none"
            margin="0"
            color="white"
            fontWeight="thin"
            lineHeight="8"
          >
            <ListItem>Nearest Places</ListItem>
            <ListItem>Coming Soon</ListItem>
          </UnorderedList>
        </Box>
        <Box>
          <Heading fontSize="xl" color="white" fontWeight="medium">
            Contact Us
          </Heading>
          <UnorderedList
            listStyleType="none"
            margin="0"
            color="white"
            fontWeight="thin"
            lineHeight="8"
          >
            <ListItem>The Team</ListItem>
            <ListItem>Story</ListItem>
            <ListItem>Contact us: +91 96504-15827</ListItem>
            <ListItem>hi@hmrhostels.com</ListItem>
          </UnorderedList>
        </Box>
      </Stack>
    </Box>
  );
}
