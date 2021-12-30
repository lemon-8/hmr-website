import { HStack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { HiMenuAlt4 } from "react-icons/hi";
import { Image } from "@chakra-ui/react";
import { MdFastfood } from "react-icons/md";
import { scroller } from "react-scroll";
import { MdFileDownload } from "react-icons/md";
import { MdPhone } from "react-icons/md";
import { FaConciergeBell } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";

export default function NavBar() {
  return (
    <HStack
      zIndex="1"
      bg={{ base: "white", md: "transparent", lg: "transparent" }}
      pt={{ base: "6", md: "2", lg: "12" }}
      px={{ base: "6", md: "2", lg: "28" }}
      pb={{ base: "6", md: "2", lg: "12" }}
      justifyContent="space-between"
      width="100%"
      minHeight="16"
      // bgColor="white"
      position="fixed"
      // borderBottom="hmrgray"
      // borderBottomWidth="1px"
    >
      <Image
        width={{ base: "8", md: "8", lg: "12" }}
        src="hmrlogox100.png"
        alt="hmr logo"
      ></Image>
      {/* <Text fontSize={{ base: "xl", md: "2", lg: "28" }} fontWeight="medium">
        HMR.
      </Text> */}
      {/* <Button
        colorScheme="hmrblack"
        borderRadius="full"
        px="5"
        fontSize={{ base: "l", md: "2", lg: "16" }}
        fontWeight="normal"
      >
        Book a Visit
      </Button> */}
      <Menu>
        <MenuButton
          as={IconButton}
          variant="solid"
          // colorScheme="hmrblack"
          aria-label="Options"
          icon={<HiMenuAlt4 />}
        />
        <MenuList>
          <MenuItem icon={<MdFastfood />} onClick={games_section}>
            Facilities
          </MenuItem>
          <MenuItem icon={<FaConciergeBell />} onClick={slideshow_photos}>
            Photos
          </MenuItem>
          <MenuItem icon={<FaConciergeBell />} onClick={scrollToSection}>
            Ammenities
          </MenuItem>

          <MenuItem icon={<BsPhoneFill />} onClick={ourApp}>
            Our App
          </MenuItem>
          <MenuDivider />
          <MenuItem icon={<MdFileDownload />}>Download App</MenuItem>
          <MenuItem icon={<MdPhone />} onClick={hmrForm}>
            Contact Us
          </MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}

const scrollToSection = () => {
  scroller.scrollTo("Ammenities_section", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const ourApp = () => {
  scroller.scrollTo("ourApp", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const hmrForm = () => {
  scroller.scrollTo("hmrForm", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const slideshow_photos = () => {
  scroller.scrollTo("slideshow_photos", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const games_section = () => {
  scroller.scrollTo("games_section", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};
