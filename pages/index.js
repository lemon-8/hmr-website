import { Image } from "@chakra-ui/image";
import { Box, Heading, HStack, Text, Stack, VStack } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/react";
import Head from "next/head";
import HeroSection from "../components/HeroSection";
import ChillSection from "../components/ChillSection";
import NavBar from "../components/Navbar";
import GamesSection from "../components/GamesSection";
import SlideShow from "../components/SlideShow";
import KnowMore from "../components/KnowMore";
import PhoneMockups from "../components/PhoneMockups";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";
import HmrForm from "../components/HmrForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>HMR Hostel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Box minHeight="100vh" maxWidth="100vw">
        <NavBar />
        <HeroSection />
        <ChillSection />
        <GamesSection />
        <SlideShow />
        <KnowMore />
        <PhoneMockups />
        <GetStarted />
        <HmrForm />
        <Footer />
      </Box>
    </>
  );
}
