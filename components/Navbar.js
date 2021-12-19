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
      <Image width="12" src="hmrlogo.png" alt="hmr logo"></Image>
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
          <MenuItem icon={<HiMenuAlt4 />}>Ammenities</MenuItem>
          <MenuItem icon={<HiMenuAlt4 />}>Our App</MenuItem>
          <MenuDivider />
          <MenuItem icon={<HiMenuAlt4 />}>Download App</MenuItem>
          <MenuItem icon={<HiMenuAlt4 />}>Contact Us</MenuItem>
        </MenuList>
      </Menu>
    </HStack>
  );
}
