import { Flex, Button, Box, Slide, HStack } from "@chakra-ui/react";
import logo from "/public/logo.svg";
import NextImage from "next/image";
import NextLink from "next/link";

const MobileDrawer = () => <></>;

export default function Navbar() {
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px="5vw"
      py="1.5vw"
      boxShadow="xl"
      background="background"
      pos="fixed"
      right="0"
      top="0"
      left="0"
    >
      <NextLink href="/" passHref>
        <Box cursor="pointer">
          <NextImage
            layout="fixed"
            width="45"
            height="45"
            alt="tr"
            src={logo}
          ></NextImage>
        </Box>
      </NextLink>
      <HStack spacing="0.75rem">
        <NextLink href="/" passHref>
          <Button variant="ghost" fontSize="base">
            Home
          </Button>
        </NextLink>

        <NextLink href="#about" passHref>
          <Button variant="ghost" fontSize="base">
            About
          </Button>
        </NextLink>

        <NextLink href="#featured_project" passHref>
          <Button variant="ghost" fontSize="base">
            Featured
          </Button>
        </NextLink>
        <NextLink href="#projects" passHref>
          <Button variant="ghost" fontSize="base">
            Projects
          </Button>
        </NextLink>
      </HStack>
    </Flex>
  );
}
