import { Box, Heading, Text, Flex } from "@chakra-ui/layout";
import NextImage from "next/image";
import me from "/public/me.jpg";
import useMediaQuery from "../../hooks/useMediaQuery";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function About() {
  const isMediumBreakpoint = useMediaQuery(768);
  const { t } = useTranslation("common");

  return (
    <Flex
      id="about"
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      pt="10rem"
    >
      <Box
        w={{ base: "100%", sm: "100%", md: "53%", lg: "63%", xl: "63%" }}
        maxW="65rem"
      >
        <SlideWhenVisible threshold="0.11">
          <Heading className="gradient_text1" fontSize="display2">
            {t("about_heading")}
          </Heading>
        </SlideWhenVisible>
        <SlideWhenVisible threshold="0.11">
          <Text fontSize="display3" mt="1rem">
            {t("about_text1")}
          </Text>
        </SlideWhenVisible>
        <SlideWhenVisible threshold="0">
          <Text fontSize="display3" mt="1rem">
            {t("about_text2")}
          </Text>
        </SlideWhenVisible>
        <SlideWhenVisible threshold="0.11">
          <Text fontSize="display3" mt="1rem">
            {t("about_text3")}
          </Text>
        </SlideWhenVisible>
      </Box>
      <Box
        w={{ base: "70%", sm: "70%", md: "45%", lg: "35%", xl: "35%" }}
        maxW="20rem"
        margin={isMediumBreakpoint ? "0" : "2rem auto auto auto"}
      >
        <svg className="defs">
          <defs>
            <clipPath id="squircle" clipPathUnits="objectBoundingBox">
              <path d="M .5 0 C .1 0 0 .1 0 .5 0 .9 .1 1 .5 1 .9 1 1 .9 1 .5 1 .1 .9 0 .5 0 Z" />
            </clipPath>
          </defs>
        </svg>
        <SlideWhenVisible threshold="0.11">
          <NextImage className="squircle" src={me} alt="Arhun Saday" />
        </SlideWhenVisible>
      </Box>
    </Flex>
  );
}
