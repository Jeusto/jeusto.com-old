import { Flex, Button, Box, Slide, HStack, Link } from "@chakra-ui/react";
import logo from "/public/logo.svg";
import NextImage from "next/image";
import NextLink from "next/link";

const MobileDrawer = () => <></>;

export default function Navbar() {
  return (
    <Flex
      zIndex="999"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px="7vw"
      py="1.5vw"
      boxShadow="xl"
      background="background"
      pos="fixed"
      right="0"
      top="0"
      left="0"
    >
      <NextLink href="/#" passHref>
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
        <Link className="link link--about" href="#about" passHref>
          <Button variant="underline" fontSize="base">
            About
          </Button>
        </Link>
        <Link className="link link--featured" href="#featured" passHref>
          <Button variant="underline" fontSize="base">
            Featured
          </Button>
        </Link>
        <Link className="link link--projects" href="#projects" passHref>
          <Button variant="underline" fontSize="base">
            Projects
          </Button>
        </Link>
        <Link className="link  link--contact" href="" passHref>
          <Button variant="underline" fontSize="base">
            Contact
          </Button>
        </Link>
      </HStack>
    </Flex>
  );
}
