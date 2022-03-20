import { Box, Heading, Text } from "@chakra-ui/layout";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function Featured() {
  const { t } = useTranslation("common");

  return (
    <Box id="featured" pt="10rem">
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_text2" fontSize="display2">
          {t("featured_heading")}
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Text mt="1rem" fontSize="display3">
          {t("featured_text")}
        </Text>
      </SlideWhenVisible>
    </Box>
  );
}
