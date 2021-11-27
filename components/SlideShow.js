import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

export default function SlideShow() {
  return (
    <Box>
      <Heading
        fontSize={{ base: "xl", lg: "6xl" }}
        mx={{ base: "10", lg: "80" }}
        mt={{ base: "10", lg: "40" }}
        fontWeight="600"
        textAlign="left"
        color="hmrblack.500"
      >
        Let&apos;s Have a Look
      </Heading>
      <Text
        fontSize={{ base: "md", lg: "4xl" }}
        mx={{ base: "10", lg: "80" }}
        fontWeight="500"
        textAlign="left"
        color="hmrcyan.500"
      >
        Bedroom
      </Text>
      <Center mx={{ base: "10", lg: "56" }}>
        <Image
          src="Room1.png"
          borderRadius={{ base: "10", lg: "35px" }}
          alt="Image 1 of Roomyarn build"
        />
      </Center>
    </Box>
  );
}
