import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  VStack,
  Flex,
} from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
export default function ChillSection() {
  return (
    <Box
      mx={{ base: "0", md: "0", lg: "64" }}
      pt="52"
      // minH="100vh"
      bgColor="white"
    >
      <Stack
        direction={["column", "row"]}
        // spacing="24px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box width="100vw">
          <Heading
            order={{ base: "2", md: "1", lg: "1" }}
            fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
            fontWeight="600"
            textAlign={{ base: "center", md: "0", lg: "left" }}
            mt={{ base: "-32", md: "0", lg: "0" }}
            mx={{ base: "0", md: "0%", lg: "0%" }}
            color="hmrblue.500"
          >
            Your own place to chill
            <Text>
              with
              <Text as="span" color="hmrcyan.500">
                {" "}
                the boys
              </Text>
            </Text>
          </Heading>
          <Text
            mx={{ base: "8", lg: "0" }}
            fontSize={{ base: "md", lg: "xl" }}
            fontWeight="500"
            color="hmrgray.500"
            mt="6"
          >
            Writing a very long sentance to justify the usage of the heading so
            that the customer is interested in taking a look at the website.
          </Text>
        </Box>

        <Box width={{ base: "90vw", lg: "8xl" }}>
          <Image
            src="./boys.png"
            alt="A illustration of friends"
            paddingLeft={{ base: "0", lg: "6" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
