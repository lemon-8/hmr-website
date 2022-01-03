import { Image } from "@chakra-ui/image";
import { MdOutlineWifi } from "react-icons/md";
import { MdCoffee } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdBed, MdTv, MdSportsTennis } from "react-icons/md";

import {
  Box,
  Heading,
  HStack,
  Text,
  Stack,
  VStack,
  Center,
} from "@chakra-ui/layout";
import { color } from "@chakra-ui/styled-system";
// import MaterialIcon from "react-native-vector-icons/MaterialIcons";

export default function KnowMore() {
  return (
    <Box maxWidth="100vw" className="Ammenities_section">
      <Heading
        fontSize={{ base: "3xl", xl: "6xl" }}
        mx={{ base: "10", xl: "80" }}
        mt={{ base: "10", xl: "40" }}
        fontWeight="600"
        textAlign="center"
        color="hmrblack.500"
      >
        Know More About <Text color="hmrcyan.500">the Hostel</Text>
      </Heading>
      {/* <Center
        // bg="tomato"
        // borderColor="#ECECEC"
        // borderWidth="medium"
        // borderRadius={{ base: "5px", xl: "10px" }}
        // h={{ base: "60vh", xl: "36vh" }}
        // color="hmrblue.500"
        // mt={{ base: "5", xl: "32" }}
        // mx={{ base: "10", xl: "56" }}
      > */}
      <Stack
        borderColor="#ECECEC"
        borderWidth="medium"
        justifyContent="center"
        mt={{ base: "5", xl: "32" }}
        mx={{ base: "10", xl: "56" }}
        borderRadius={{ base: "5px", xl: "10px" }}
        h={{ base: "auto", xl: "36vh" }}
        color="hmrblue.500"
        direction={["column", "row"]}
        textAlign={{ base: "center", xl: "initial" }}
        padding={{ base: "10", xl: "4" }}
      >
        <Center>
          <Stack direction={["column", "row"]}>
            <Heading
              fontWeight="500"
              marginRight={{ base: "0", xl: "28" }}
              mt={{ base: "0", xl: "12" }}
              // mb={{ base: "10", xl: "0" }}
            >
              Amenities
            </Heading>
            <Stack
              direction={["column", "row"]}
              px={{ base: "2", xl: "0" }}
              fontSize={{ base: "xl", xl: "2xl" }}
              textAlign="start"
            >
              <VStack alignItems="left" mx={{ base: "0", xl: "14" }}>
                <Ammenities />
                <Ammenities
                  icon={<MdCoffee color="#01CFE7" />}
                  text="Cafeteria/Mess"
                />
                <Ammenities
                  icon={<MdHome color="#01CFE7" />}
                  text="Home Styled Cooked Meals"
                />
                <Ammenities
                  icon={<MdTv color="#01CFE7" />}
                  text="Living Area with DTH/TV"
                />
              </VStack>
              <VStack alignItems="left">
                <Ammenities
                  icon={<MdPowerSettingsNew color="#01CFE7" />}
                  text="24x7 PowerBackup"
                />
                <Ammenities
                  icon={<MdFavoriteBorder color="#01CFE7" />}
                  text="Housekeeping"
                />
                <Ammenities
                  icon={<MdBed color="#01CFE7" />}
                  text="Furnished Bedrooms"
                />
                <Ammenities
                  icon={<MdSportsTennis color="#01CFE7" />}
                  text="Indoor Games and Activities"
                />
              </VStack>
            </Stack>
          </Stack>
        </Center>
      </Stack>
      {/* </Center> */}
    </Box>
  );
}

function Ammenities({
  icon = <MdOutlineWifi color="#01CFE7" />,
  text = "High Speed Wi-Fi",
}) {
  return (
    <HStack>
      {icon}
      <Text
        fontWeight="500"
        fontSize={{ base: "l", xl: "xl" }}
        pl={{ base: "2", xl: "5" }}
      >
        {text}
      </Text>
    </HStack>
  );
}
