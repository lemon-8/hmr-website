import Particles from "react-particles-js";
import { Image } from "@chakra-ui/image";
import { Repulse } from "tsparticles/Options/Classes/Interactivity/Modes/Repulse";
import {
  Center,
  Square,
  Circle,
  Button,
  useBreakpointValue,
} from "@chakra-ui/react";
import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  VStack,
  Flex,
} from "@chakra-ui/layout";
export default function HeroSection() {
  const particleDensityArea = useBreakpointValue({
    base: 700,
    xl: 600,
  });
  return (
    <Box
      mx={{ base: "6", md: "2", xl: "72" }}
      minH="100vh"
      //   bgColor="black"
      pt={{ base: "28", md: "40", xl: "40" }}
    >
      <Particles
        height="100vh"
        width="98vw"
        style={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        params={{
          particles: {
            number: {
              value: 10,
              density: {
                enable: true,
                value_area: particleDensityArea,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              speed: 5,
              out_mode: "out",
              direction: "top",
            },
            shape: {
              type: "image",
              image: [
                {
                  src: "./pizza.svg",
                  height: 20,
                  width: 20,
                },
                {
                  src: "./dot.svg",
                  height: 20,
                  width: 20,
                },
                {
                  src: "./coffee.svg",
                  height: 20,
                  width: 20,
                },
              ],
            },

            size: {
              value: 30,
              random: false,
              anim: {
                enable: true,
                speed: 4,
                size_min: 10,
                sync: false,
              },
            },
            opacity: {
              value: 0.5,
              anim: {
                enable: true,
              },
            },
          },
          retina_detect: false,
          interactivity: {},
          // interactivity: {
          //   onhover: {
          //     enable: true,
          //     mode: "repulse",
          //   },
          // },
        }}
      />
      <Box
        zIndex={1}
        bgColor={{
          base: "yellow",
          sm: "red",
          md: "blueviolet",
          lg: "black",
          xl: "green",
        }}
      >
        <Heading
          fontSize={{ base: "7vw", md: "5xl", xl: "6xl" }}
          fontWeight="600"
          color="hmrblue.500"
          textAlign="center"
          lineHeight={{ base: "125%", md: "104.5%", xl: "104.5%" }}
        >
          Hassle Free Stays in a <Text color="hmrcyan.500">Managed Hostel</Text>
        </Heading>
        <Text
          order={{ base: "2", md: "1", xl: "1" }}
          fontSize={{ base: "md", xl: "xl" }}
          fontWeight="500"
          textAlign="center"
          mx={{ base: "0%", md: "0%", xl: "25%" }}
          color="hmrgray.500"
          mt="6"
        >
          Your own place to chill with your boy&apos;s gang! The only hostel
          with an amazing mobile app to meet all your hostel needs
        </Text>
        <Center
          width="100%"
          //   bgColor="white"
          mt="16"
          order={{ base: "1", md: "2", xl: "2" }}
        >
          <Image
            borderRadius="xl"
            src="./hmr-building.png"
            alt="A picture of HMR hostel building"
          />
        </Center>
      </Box>
    </Box>
  );
}
