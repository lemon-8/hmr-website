import { Image } from "@chakra-ui/image";
import { MdOutlineWifi } from "react-icons/md";
import { MdCoffee } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdPowerSettingsNew } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { MdBed } from "react-icons/md";
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
        fontSize={{ base: "3xl", lg: "6xl" }}
        mx={{ base: "10", lg: "80" }}
        mt={{ base: "10", lg: "40" }}
        fontWeight="600"
        textAlign="center"
        color="hmrblack.500"
      >
        Know More About <Text color="hmrcyan.500">the Hostel</Text>
      </Heading>
      <Center
        // bg="tomato"
        borderColor="#ECECEC"
        borderWidth="medium"
        borderRadius={{ base: "5px", lg: "10px" }}
        h={{ base: "60vh", lg: "36vh" }}
        color="hmrblue.500"
        mt={{ base: "5", lg: "32" }}
        mx={{ base: "10", lg: "56" }}
      >
        <Stack
          direction={["column", "row"]}
          textAlign={{ base: "center", lg: "initial" }}
        >
          <Heading
            fontWeight="500"
            marginRight={{ base: "0", lg: "10" }}
            mt={{ base: "0", lg: "10" }}
            mb={{ base: "10", lg: "0" }}
          >
            Ammenities
          </Heading>
          <Stack
            direction={["column", "row"]}
            ml={{ base: "0", lg: "0" }}
            fontSize={{ base: "xl", lg: "2xl" }}
          >
            <VStack alignItems="left" mx={{ base: "0", lg: "14" }}>
              <Ammenities />
              <Ammenities
                icon={<MdCoffee color="#01CFE7" />}
                text="Cafeteria/Mess"
              />
              <Ammenities
                icon={<MdHome color="#01CFE7" />}
                text="Home Styled Cooked Meals"
              />
            </VStack>
            <VStack alignItems="left">
              <Ammenities
                icon={<MdPowerSettingsNew color="#01CFE7" />}
                text="24x7 PowerBackup"
              />
              <Ammenities
                icon={<MdFavoriteBorder color="#01CFE7" />}
                text="HouseKeeping"
              />
              <Ammenities
                icon={<MdBed color="#01CFE7" />}
                text="Furnished Bedrooms"
              />
            </VStack>
          </Stack>
        </Stack>
      </Center>
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
        fontSize={{ base: "l", lg: "xl" }}
        pl={{ base: "2", lg: "5" }}
      >
        {text}
      </Text>
    </HStack>
  );
}
