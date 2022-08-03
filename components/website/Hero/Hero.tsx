import {
  Box,
  Heading,
  Text,
  Button,
  Link,
  HStack,
  useColorModeValue,
  Tooltip,
} from "@chakra-ui/react";
import { FiGithub, FiMail, FiLinkedin } from "react-icons/fi";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <Box>
      <Heading
        color={useColorModeValue("teal.500", "teal.200")}
        as="h1"
        size="2xl"
      >
        {t("hero_name")}
      </Heading>
      <Box mt="5">
        <Text>{t("hero_description")}</Text>
        <Text mt="1">{t("hero_description2")}</Text>
      </Box>
      <HStack mt="3" ml="-5" flexWrap="wrap">
        <Link
          tabIndex={-1}
          m="1.5"
          href={"mailto:arhunsad@gmail.com"}
          isExternal
        >
          <Tooltip label="arhunsad@gmail.com">
            <Button variant="ghost" leftIcon={<FiMail size={"1.4em"} />}>
              Email
            </Button>
          </Tooltip>
        </Link>
        <Link
          tabIndex={-1}
          m="1.5"
          href={"https://github.com/Jeusto/"}
          isExternal
        >
          <Button variant="ghost" leftIcon={<FiGithub size={"1.4em"} />}>
            Github
          </Button>
        </Link>
        <Link tabIndex={-1} m="1.5" href={t("hero_linkedinLink")} isExternal>
          <Button variant="ghost" leftIcon={<FiLinkedin size={"1.4em"} />}>
            LinkedIn
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
