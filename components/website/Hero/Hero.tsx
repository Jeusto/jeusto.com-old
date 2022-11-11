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
import useTranslation from "next-translate/useTranslation";
import { Image } from "@chakra-ui/react";

export default function Landing() {
  const { t } = useTranslation("common");

  return (
    <HStack spacing="5" justifyContent="space-between" alignItems="center">
      <Box w="100%">
        <Heading variant="brand" as="h1" fontSize="4xl">
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
      <Image
        borderRadius="lg"
        transition={"all 150ms ease-in-out"}
        w={{ base: "0", lg: "30%" }}
        borderColor={useColorModeValue("gray.200", "gray.800")}
        transform={"rotate(3deg)"}
        objectFit={"cover"}
        src={`/images/avatar.png`}
        alt={"Arhun Saday profile picture"}
      ></Image>
      {/* <Box>
        <Heading
          color={useColorModeValue("teal.500", "teal.200")}
          as="h1"
          size="xl"
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
      </Box> */}
    </HStack>
  );
}
