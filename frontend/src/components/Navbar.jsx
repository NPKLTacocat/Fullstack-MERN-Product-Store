import { Button, Container, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { FaRegSquarePlus } from "react-icons/fa6";
import { MdOutlineLightMode } from "react-icons/md";
import { useColorMode, useColorModeValue } from "./ui/color-mode";
const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const textColor = useColorModeValue("white", "black");
  const gradientColorFrom = useColorModeValue("blue.300", "cyan.100");
  const gradientColorTo = useColorModeValue("blue.200", "cyan.50");

  return (
    <Container px={2}>
      <Flex
        h={20}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          textAlign={"center"}
          fontWeight={"bold"}
          bgGradient={"to-r"}
          gradientFrom={gradientColorFrom}
          gradientTo={gradientColorTo}
          rounded={"lg"}
          paddingLeft={2}
          paddingRight={2}
          h={10}
          color={textColor}
        >
          <Link to="/">Product Store</Link>
        </Text>
        <HStack spaceX={2}>
          <Link to="/create">
            <Button
              bgGradient={"to-l"}
              gradientFrom={gradientColorFrom}
              gradientTo={gradientColorTo}
              rounded={"lg"}
              h={10}
              w={10}
              color={textColor}
            >
              <Icon size={"lg"}>
                <FaRegSquarePlus />
              </Icon>
            </Button>
          </Link>

          <Button
            onClick={toggleColorMode}
            bgGradient={"to-l"}
            gradientFrom={gradientColorFrom}
            gradientTo={gradientColorTo}
            rounded={"lg"}
            h={10}
            w={10}
            color={textColor}
          >
            <Icon size={"lg"}>
              <MdOutlineLightMode />
            </Icon>
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
