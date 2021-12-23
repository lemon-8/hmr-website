import Particles from "react-tsparticles";
import { Image } from "@chakra-ui/image";
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
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectCards } from "swiper";
import "swiper/css";
import "swiper/css/effect-cards";

export default function HeroSection() {
  const particleDensityArea = useBreakpointValue({
    base: 700,
    xl: 600,
  });
  return (
    <Box
      mx={{ base: "6", md: "2", lg: "72" }}
      minH="100vh"
      //   bgColor="black"
      pt={{ base: "28", md: "40", lg: "40" }}
    >
      <Particles
        height="100vh"
        width="98vw"
        id="particles-js"
        style={{
          zIndex: -1,
          position: "absolute",
          top: 0,
          left: 0,
        }}
        params={{
          fullScreen: {
            enable: false,
          },
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
              enable: true,
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
                enable: false,
              },
            },
          },
          retina_detect: true,

          interactivity: {},
          // interactivity: {
          //   onhover: {
          //     enable: true,
          //     mode: "repulse",
          //   },
          // },
        }}
      />
      <Box zIndex={1}>
        <Heading
          fontSize={{ base: "7vw", md: "5xl", lg: "6xl" }}
          fontWeight="600"
          color="hmrblue.500"
          textAlign="center"
          lineHeight={{ base: "125%", md: "104.5%", lg: "104.5%" }}
        >
          Hassle Free Stays in a <Text color="hmrcyan.500">Managed Hostel</Text>
        </Heading>
        <Text
          order={{ base: "2", md: "1", lg: "1" }}
          fontSize={{ base: "md", lg: "xl" }}
          fontWeight="500"
          textAlign="center"
          mx={{ base: "0%", md: "0%", lg: "25%" }}
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
          order={{ base: "1", md: "2", lg: "2" }}
        >
          <Carousel />
          {/* <Image
						borderRadius="xl"
						src="./hmr-building.png"
						alt="A picture of HMR hostel building"
					/> */}
        </Center>
      </Box>
    </Box>
  );
}

function Carousel() {
  // SwiperCore.use([EffectCards]);
  return (
    <Swiper
      modules={[EffectCards]}
      effect={"cards"}
      grabCursor={true}
      style={{ height: "100%", width: "500px" }}
      loop
      loopedSlides={3}
    >
      <SwiperSlide style={{ borderRadius: "10px" }}>
        <Image
          borderRadius="xl"
          src="./hmr-building.png"
          alt="A picture of HMR hostel building"
        />
      </SwiperSlide>
      <SwiperSlide style={{ borderRadius: "10px" }}>
        <Image
          borderRadius="xl"
          src="./hmr-building.png"
          alt="A picture of HMR hostel building"
        />
      </SwiperSlide>
      <SwiperSlide style={{ borderRadius: "10px" }}>
        <Image
          borderRadius="xl"
          src="./hmr-building.png"
          alt="A picture of HMR hostel building"
        />
      </SwiperSlide>
    </Swiper>
  );
}
