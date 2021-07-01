import {
  Flex,
  Button,
  Box,
  HStack,
  VStack,
  Link,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Icon,
} from "@chakra-ui/react";
import logo from "/public/logo.svg";
import NextImage from "next/image";
import NextLink from "next/link";
import useMediaQuery from "../../hooks/useMediaQuery";
import { AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const MobileNavbar = () => (
    <>
      <Drawer isOpen={isOpen} placement="right" size="full" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg="background">
          <DrawerCloseButton variant="ghost" />
          <DrawerHeader mb="2rem"></DrawerHeader>
          <DrawerBody>
            <VStack spacing="0.75rem">
              <Link
                onClick={onClose}
                className="link link--about"
                href="#about"
                passHref
              >
                <Button variant="underline" fontSize="6xl">
                  About
                </Button>
              </Link>
              <Link
                onClick={onClose}
                className="link link--featured"
                href="#featured"
                passHref
              >
                <Button variant="underline" fontSize="6xl">
                  Featured
                </Button>
              </Link>
              <Link
                onClick={onClose}
                className="link link--projects"
                href="#projects"
                passHref
              >
                <Button variant="underline" fontSize="6xl">
                  Projects
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  return (
    <Flex
      zIndex="999"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      px="7vw"
      py="1vw"
      boxShadow="md"
      background="background"
      pos="fixed"
      right="0"
      top="0"
      left="0"
    >
      <NextLink href="/#" passHref>
        <Box pt="0.3rem" cursor="pointer">
          <NextImage
            layout="fixed"
            width="45"
            height="45"
            alt="tr"
            src={logo}
          ></NextImage>
        </Box>
      </NextLink>
      {isLargerThan768 ? (
        <HStack spacing="0.75rem">
          <Link className="link link--about" href="#about" passHref>
            <Button variant="underline" fontSize="18px">
              About
            </Button>
          </Link>
          <Link className="link link--featured" href="#featured" passHref>
            <Button variant="underline" fontSize="18px">
              Featured
            </Button>
          </Link>
          <Link className="link link--projects" href="#projects" passHref>
            <Button variant="underline" fontSize="18px">
              Projects
            </Button>
          </Link>
        </HStack>
      ) : (
        <Icon
          as={AiOutlineMenu}
          cursor="pointer"
          w={7}
          h={7}
          onClick={onOpen}
        />
      )}
      <MobileNavbar />
    </Flex>
  );
}
