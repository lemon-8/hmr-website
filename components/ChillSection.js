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
      mx={{ base: "0", md: "0", xl: "64" }}
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
            order={{ base: "2", md: "1", xl: "1" }}
            fontSize={{ base: "2xl", md: "4xl", xl: "6xl" }}
            fontWeight="600"
            px={{ lg: "8", xl: "0" }}
            textAlign={{ base: "center", md: "0", lg: "left", xl: "left" }}
            mt={{ base: "-48", md: "0", xl: "0" }}
            mx={{ base: "0", md: "0%", xl: "0%" }}
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
            mx={{ base: "8", xl: "0" }}
            fontSize={{ base: "md", xl: "xl" }}
            fontWeight="500"
            color="hmrgray.500"
            mt="6"
          >
            Hangout with your friends and enjoy the hostel experience. We
            welcome you to the all boys hostel and hope you have a good time!
          </Text>
        </Box>

        <Box width={{ base: "90vw", lg: "xl", xl: "8xl" }}>
          <Image
            src="./boys.png"
            alt="A illustration of friends"
            paddingLeft={{ base: "0", xl: "6" }}
          />
        </Box>
      </Stack>
    </Box>
  );
}
