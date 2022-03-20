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
import { AiOutlineMenu } from "react-icons/ai";
import NextImage from "next/image";
import NextLink from "next/link";
import logo from "/public/logo.svg";
import useMediaQuery from "../../hooks/useMediaQuery";
import useTranslation from "next-translate/useTranslation";

export default function Navbar() {
  const isLargerThan768 = useMediaQuery(768);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t, lang } = useTranslation("common");

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
              >
                <Button variant="underline" fontSize="6xl">
                  {t("navbar_about")}
                </Button>
              </Link>
              <Link
                onClick={onClose}
                className="link link--featured"
                href="#featured"
              >
                <Button variant="underline" fontSize="6xl">
                  {t("navbar_featured")}
                </Button>
              </Link>
              <Link
                onClick={onClose}
                className="link link--projects"
                href="#projects"
              >
                <Button variant="underline" fontSize="6xl">
                  {t("navbar_projects")}
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
      {/* TODO: Remove this*/}
      <NextLink href="/" locale={lang === "en" ? "fr" : "en"} passHref>
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
          <Link className="link link--about" href="#about">
            <Button variant="underline" fontSize="18px">
              {t("navbar_about")}
            </Button>
          </Link>
          <Link className="link link--featured" href="#featured">
            <Button variant="underline" fontSize="18px">
              {t("navbar_featured")}
            </Button>
          </Link>
          <Link className="link link--projects" href="#projects">
            <Button variant="underline" fontSize="18px">
              {t("navbar_projects")}
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
