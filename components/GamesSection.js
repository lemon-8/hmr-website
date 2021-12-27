import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";

export default function GamesSection() {
  return (
    <Box
      mx={{ base: "10", xl: "80" }}
      pt={{ base: "20", xl: "36" }}
      maxWidth="100vw"
    >
      <Box>
        <Heading
          fontSize={{ base: "4xl", xl: "6xl" }}
          fontWeight="600"
          textAlign="center"
          mx={{ base: "0%", md: "0%", xl: "0%" }}
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
        content="Enjoy a hot cup of tea after a long tiring day along with some tasty snacks."
        imgSrc="./snacks.png"
      />
      <GameItem
        number="03"
        itemTitle1="Badminton"
        itemTitle2="Court"
        content="In your free time you can go to the badminton court and play without any worries with your roommates and friends."
        imgSrc="./badminton.png"
      />
      <GameItem
        number="04"
        rightAlign={true}
        itemTitle1="Food"
        itemTitle2="Mess"
        content="For your food requirements we got you covered with our own food mess with the most healthy and delicious foods."
        imgSrc="./Mess.png"
      />
      <GameItem
        number="05"
        itemTitle1="Table"
        itemTitle2="Tennis"
        content="We also have our Table Tennis section where you can spin and serve with your roommates."
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
  content = "We have our own gym section, where you can workout on your fitness and development with the right equipment.",
}) {
  return (
    <Stack
      direction={rightAlign ? ["column", "row-reverse"] : ["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      mt="20"
    >
      <Box
        width={{ base: "100%", xl: "50%" }}
        marginLeft={rightAlign ? { base: "0", xl: "20" } : "0"}
      >
        <Heading
          fontSize={{ base: "md", xl: "4xl" }}
          fontWeight="600"
          textAlign="left"
          mx={{ base: "0%", md: "0%", xl: "0%" }}
          color="hmrblue.500"
        >
          <HStack>
            <Text fontSize={{ base: "7xl", xl: "8xl" }}>{number}</Text>
            <VStack
              alignItems="flex-start"
              fontSize={{ base: "xl", xl: "3xl" }}
              w="100%"
            >
              <Text color="hmrcyan.500"> {itemTitle1}</Text>
              <Text color="hmrcyan.500"> {itemTitle2}</Text>
            </VStack>
          </HStack>
        </Heading>
        <Text
          mr={{ base: "0", xl: "28" }}
          // bg="gray.100"
          fontSize={{ base: "md", xl: "xl" }}
          fontWeight="300"
          color="hmrgray.500"
          mt="6"
        >
          {content}
        </Text>
      </Box>

      <Box width={{ base: "100%", xl: "50%" }}>
        <Image
          src={imgSrc}
          alt="A illustration of gym"
          paddingTop={{ base: "10", xl: "0" }}
          paddingLeft={{ base: "0", xl: "30" }}
        />
      </Box>
    </Stack>
  );
}
