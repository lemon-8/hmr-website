import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

export default function GamesSection() {
  return (
    <Box
      mx={{ base: "10", lg: "80" }}
      pt={{ base: "20", lg: "36" }}
      maxWidth="100vw"
    >
      <Box>
        <Heading
          fontSize={{ base: "4xl", lg: "6xl" }}
          fontWeight="600"
          textAlign="center"
          mx={{ base: "0%", md: "0%", lg: "0%" }}
          color="hmrblack.500"
          padding="0"
        >
          Never get bored <Text color="hmrcyan.500">even for a second</Text>
        </Heading>
      </Box>
      <GameItem />
      <GameItem
        number="02"
        rightAlign={true}
        itemTitle1="Tea"
        itemTitle2="Stall"
        content="Writing a very long sentance to justify the usage of the heading so that the customer is interested in taking a look at the website."
        imgSrc="./snacks.png"
      />
      <GameItem
        number="03"
        itemTitle1="Badminton"
        itemTitle2="Court"
        content="Writing a very long sentance to justify the usage of the heading so that the customer is interested in taking a look at the website."
        imgSrc="./badminton.png"
      />
      <GameItem
        number="04"
        rightAlign={true}
        itemTitle1="Food"
        itemTitle2="Mess"
        content="Writing a very long sentance to justify the usage of the heading so that the customer is interested in taking a look at the website."
        imgSrc="./Mess.png"
      />
      <GameItem
        number="05"
        itemTitle1="Table"
        itemTitle2="Tennis"
        content="Writing a very long sentance to justify the usage of the heading so that the customer is interested in taking a look at the website."
        imgSrc="./TableTennis.png"
      />
    </Box>
  );
}

function GameItem({
  number = "01",
  itemTitle1 = "Gym and",
  itemTitle2 = "Gaming Area",
  rightAlign = false,
  imgSrc = "./gym.png",
  content = "Writing a very long sentance to justify the usage of the heading so that the customer is interested in taking a look at the website.",
}) {
  return (
    <Stack
      direction={rightAlign ? ["column", "row-reverse"] : ["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      mt="20"
    >
      <Box
        width={{ base: "100%", lg: "50%" }}
        marginLeft={rightAlign ? { base: "0", lg: "20" } : "0"}
      >
        <Heading
          fontSize={{ base: "md", lg: "4xl" }}
          fontWeight="600"
          textAlign="left"
          mx={{ base: "0%", md: "0%", lg: "0%" }}
          color="hmrblue.500"
        >
          <HStack>
            <Text fontSize={{ base: "7xl", lg: "8xl" }}>{number}</Text>
            <VStack
              alignItems="flex-start"
              fontSize={{ base: "xl", lg: "3xl" }}
              w="100%"
            >
              <Text color="hmrcyan.500"> {itemTitle1}</Text>
              <Text color="hmrcyan.500"> {itemTitle2}</Text>
            </VStack>
          </HStack>
        </Heading>
        <Text
          mr={{ base: "0", lg: "28" }}
          // bg="gray.100"
          fontSize={{ base: "md", lg: "xl" }}
          fontWeight="300"
          color="hmrgray.500"
          mt="6"
        >
          {content}
        </Text>
      </Box>

      <Box width={{ base: "100%", lg: "50%" }}>
        <Image
          src={imgSrc}
          alt="A illustration of gym"
          paddingTop={{ base: "10", lg: "0" }}
          paddingLeft={{ base: "0", lg: "30" }}
        />
      </Box>
    </Stack>
  );
}
