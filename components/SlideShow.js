import { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function SlideShow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselLabels = ["Bedroom", "Living Room", "Kitchen", "Bathroom"];
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
        {carouselLabels[activeIndex]}
      </Text>
      <Carousel setActiveIndex={setActiveIndex} />
      {/* <Center mx={{ base: "10", lg: "56" }}>
        <Image
          src="Room1.png"
          borderRadius={{ base: "10", lg: "35px" }}
          alt="Image 1 of Roomyarn build"
        />
      </Center> */}
    </Box>
  );
}

const Carousel = ({ setActiveIndex }) => {
  return (
    <Box>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        style={{ zIndex: "0" }}
        onActiveIndexChange={(e) => {
          setActiveIndex(e.activeIndex);
        }}
      >
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Center mx={{ base: "10", lg: "56" }}>
            <Image
              src="Room1.png"
              borderRadius={{ base: "10", lg: "3xl" }}
              alt="Image 1 of Roomyarn build"
            />
          </Center>
          {/* <Image
          src="Room1.png"
          height="lg"
          borderRadius={{ base: "10", lg: "2xl" }}
        /> */}
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Center mx={{ base: "10", lg: "56" }}>
            <Image
              src="Room1.png"
              borderRadius={{ base: "10", lg: "3xl" }}
              alt="Image 1 of Roomyarn build"
            />
          </Center>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Center mx={{ base: "10", lg: "56" }}>
            <Image
              src="Room1.png"
              borderRadius={{ base: "10", lg: "3xl" }}
              alt="Image 1 of Roomyarn build"
            />
          </Center>
        </SwiperSlide>
        <SwiperSlide
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Center mx={{ base: "10", lg: "56" }}>
            <Image
              src="Room1.png"
              borderRadius={{ base: "10", lg: "3xl" }}
              alt="Image 1 of Roomyarn build"
            />
          </Center>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
