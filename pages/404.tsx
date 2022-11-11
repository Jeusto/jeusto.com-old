import { Heading, Center, Button, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

export default function Custom404() {
  const { t } = useTranslation("common");

  return (
    <Center height="70vh">
      <SlideWhenVisible threshold="0.11">
        <VStack>
          <Heading variant="brand" margin="auto" textAlign="center" as="h1">
            {t("404_title")}
          </Heading>
          <NextLink href="/" passHref>
            <Button variant="solid">{t("404_goHome")}</Button>
          </NextLink>
        </VStack>
      </SlideWhenVisible>
    </Center>
  );
}
