import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import CustomLink from "./CustomLink";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <Box mt="10rem">
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_heading" fontSize="display">
          {t("hero_name")}
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_heading" as="h1" fontSize="display">
          {t("hero_role")}
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Box fontSize="display3" mt="2rem">
          <Text>{t("hero_text1")}</Text>
          <Text>{t("hero_text2")}</Text>
        </Box>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Flex ml="-1.5" flexWrap="wrap" mt="1rem">
          <CustomLink
            isFirst={true}
            url="mailto:arhunsad@gmail.com"
            name="Email"
            icon={FiMail}
          ></CustomLink>
          <CustomLink
            isFirst={false}
            url="https://github.com/Jeusto"
            name="Github"
            icon={FiGithub}
          ></CustomLink>
          <CustomLink
            isFirst={false}
            url={t("hero_linkedinLink")}
            name="LinkedIn"
            icon={FiLinkedin}
          ></CustomLink>
          <CustomLink
            isFirst={false}
            url="https://twitter.com/Jeustoo"
            name="Twitter"
            icon={FiTwitter}
          ></CustomLink>
        </Flex>
      </SlideWhenVisible>
    </Box>
  );
}
