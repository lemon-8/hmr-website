import { useState } from "react";
import { Image } from "@chakra-ui/image";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { Center, useBreakpointValue } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function SlideShow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselLabels = ["Bedrooms", "Bedrooms", "Common Area", "Bathroom"];
  const bulletsize = useBreakpointValue({ base: "20px", xl: "30px" });
  return (
    <Box
      mx={{ lg: "32" }}
      className="slideshow_photos"
      sx={{ "--swiper-bullet-size": bulletsize }}
    >
      <Heading
        fontSize={{ base: "xl", xl: "6xl" }}
        mx={{ base: "10", xl: "80" }}
        mt={{ base: "10", xl: "40" }}
        fontWeight="600"
        textAlign="left"
        color="hmrblack.500"
      >
        Let&apos;s Have a Look
      </Heading>
      <Text
        fontSize={{ base: "md", xl: "4xl" }}
        mx={{ base: "10", xl: "80" }}
        fontWeight="500"
        textAlign="left"
        color="hmrcyan.500"
      >
        {carouselLabels[activeIndex]}
      </Text>
      <Carousel setActiveIndex={setActiveIndex} />
    </Box>
  );
}

const Carousel = ({ setActiveIndex }) => {
  return (
    <Box>
      <Swiper
        modules={[Pagination, Autoplay]}
        grabCursor={true}
        navigation={true}
        autoplay={{
          delay: 5000,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: "hmr-swiper-bullet-active",
        }}
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
          <Center mx={{ base: "10", xl: "56" }}>
            <Image
              src="Room1.png"
              borderRadius={{ base: "10", xl: "3xl" }}
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
          <Center mx={{ base: "10", xl: "56" }}>
            <Image
              src="Room2.png"
              borderRadius={{ base: "10", xl: "3xl" }}
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
          <Center mx={{ base: "10", xl: "56" }}>
            <Image
              src="commonarea.png"
              borderRadius={{ base: "10", xl: "3xl" }}
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
          <Center mx={{ base: "10", xl: "56" }}>
            <Image
              src="Bathroom.png"
              borderRadius={{ base: "10", xl: "3xl" }}
              alt="Image 1 of Roomyarn build"
            />
          </Center>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};
