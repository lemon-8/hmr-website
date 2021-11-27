import { HStack, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";

export default function NavBar() {
  return (
    <HStack
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
      <Text fontSize={{ base: "xl", md: "2", lg: "28" }} fontWeight="medium">
        HMR.
      </Text>
      <Button
        colorScheme="hmrblack"
        borderRadius="full"
        px="5"
        fontSize={{ base: "l", md: "2", lg: "16" }}
        fontWeight="normal"
      >
        Book a Visit
      </Button>
    </HStack>
  );
}
