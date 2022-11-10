import {
  Heading,
  VStack,
  useColorModeValue,
  HStack,
  Box,
  SimpleGrid,
  Flex,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

const CustomLink = ({ url, type, icon }) => {
  return (
    <NextLink href={url} locale={false} passHref>
      <Link href={url} isExternal tabIndex={-1}>
        <Box
          px="5"
          py="2"
          borderRadius="lg"
          overflow="hidden"
          cursor="pointer"
          bg={useColorModeValue("gray.50", "gray.850")}
          transition={"all 150ms ease-in-out"}
          borderWidth="1px"
          borderColor={useColorModeValue("gray.200", "gray.800")}
          _hover={{
            transform: "translateY(-5px)",
            boxShadow: "lg",
          }}
        >
          <VStack>
            <HStack>
              {icon}
              <Heading as="h3" fontSize="xl">
                {type}
              </Heading>
            </HStack>
          </VStack>
        </Box>
      </Link>
    </NextLink>
  );
};

export default function Links() {
  const { t } = useTranslation("common");
  const links = [
    {
      type: "Github",
      name: "@Jeusto",
      url: "https://github.com/Jeusto/",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#455A64"
            d="M40.3,15.7c0.6-1.7,1.2-5-0.4-8.7c-4.5,0-8.3,3.2-8.9,3.8c-2.2-0.5-4.6-0.7-7-0.7c-2.5,0-4.9,0.3-7.2,0.8C13.7,7.7,9.6,7,8,7c0,0-0.9,1.8-0.9,5c0,2,0.5,3.2,0.8,3.8C5.5,18.3,4,21.7,4,26.1c0,11.2,7.1,15,20,15s20-3.8,20-15C44,21.5,42.6,18.1,40.3,15.7z"
          />
          <path
            fill="#FFCCBC"
            d="M24,39c-8.2,0-15-1.4-15-9c0-2.9,1.6-4.5,2.7-5.5c2.5-2.2,6.7-1.2,12.3-1.2c4.1,0,7.6-0.7,10.4,0.2c2.8,0.9,4.6,3.5,4.6,6.3C39,37.7,35,39,24,39z"
          />
          <path
            fill="#D84315"
            d="M25,34c0,0.6-0.4,1-1,1s-1-0.4-1-1s0.4-1,1-1S25,33.4,25,34z M26.5,36.5c0.2-0.2,0.2-0.5,0-0.7s-0.5-0.2-0.7,0c-0.9,0.9-2.6,0.9-3.5,0c-0.2-0.2-0.5-0.2-0.7,0s-0.2,0.5,0,0.7c0.7,0.7,1.5,1,2.5,1S25.8,37.1,26.5,36.5z"
          />
          <path
            fill="#FFF"
            d="M19,29.5c0,2.5-1.3,4.5-3,4.5s-3-2-3-4.5s1.3-4.5,3-4.5S19,27,19,29.5z M32,25c-1.7,0-3,2-3,4.5s1.3,4.5,3,4.5c1.7,0,3-2,3-4.5S33.7,25,32,25z"
          />
          <path
            fill="#6D4C41"
            d="M34,30c0,1.7-0.9,3-2,3s-2-1.3-2-3c0-0.2,0-0.5,0.1-0.7c0.1,0.4,0.5,0.7,0.9,0.7c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1c-0.2,0-0.4,0.1-0.6,0.2c0.4-0.7,0.9-1.2,1.6-1.2C33.1,27,34,28.3,34,30z M16,27c-0.7,0-1.2,0.5-1.6,1.2c0.2-0.1,0.4-0.2,0.6-0.2c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1c-0.4,0-0.8-0.3-0.9-0.7c0,0.2-0.1,0.5-0.1,0.7c0,1.7,0.9,3,2,3s2-1.3,2-3S17.1,27,16,27z"
          />
        </svg>
      ),
    },
    {
      type: "Twitter",
      name: "@Jeustoo",
      url: "https://twitter.com/Jeustoo",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#03A9F4"
            d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
          />
        </svg>
      ),
    },
    {
      type: "LinkedIn",
      name: "@asaday",
      url: t("hero_linkedinLink"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#0288D1"
            d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
          />
          <path
            fill="#FFF"
            d="M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
          />
        </svg>
      ),
    },
    {
      type: "Youtube",
      name: "@Jeusto",
      url: "https://www.youtube.com/c/Jeusto",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#FF3D00"
            d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
          />
          <path fill="#FFF" d="M20 31L20 17 32 24z" />
        </svg>
      ),
    },
    {
      type: "Twitch",
      name: "@Jeusto",
      url: "https://www.twitch.tv/jeusto",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          width="48px"
          height="48px"
        >
          <path
            fill="#7e57c2"
            d="M42,27.676c-3,3.441-6,6.882-9,10.324c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c-1,0-2,0-3,0	c0-2,0-4,0-6c-3.333,0-6.667,0-10,0c0-7.431,0-14.863,0-22.294C7.455,12.804,8.909,9.902,10.364,7C20.909,7,31.455,7,42,7	C42,13.892,42,20.784,42,27.676z"
          />
          <path
            fill="#fafafa"
            d="M39,26.369c-1.667,1.877-3.333,3.754-5,5.631c-2.333,0-4.667,0-7,0c-2.333,2-4.667,4-7,6c0-2,0-4,0-6	c-2.667-0.008-5.333-0.016-8-0.024c0-7.326,0-14.651,0-21.976c9,0,18,0,27,0C39,15.456,39,20.912,39,26.369z"
          />
          <rect width="3" height="10" x="21" y="16" fill="#7e57c2" />
          <rect width="3" height="10" x="30" y="16" fill="#7e57c2" />
        </svg>
      ),
    },
  ];

  return (
    <Flex
      transition="background-color 200ms linear"
      alignItems="left"
      direction="column"
      m="auto"
      px="10"
      maxW="1000px"
      mb="20"
    >
      <Heading
        color={useColorModeValue("teal.500", "teal.200")}
        as="h1"
        fontSize="4xl"
      >
        {t("links_title")}
      </Heading>
      <SlideWhenVisible threshold="0.11">
        <SimpleGrid mt="5" columns={{ base: 1, md: 2, lg: 3 }} spacing="5">
          {links.map((link) => (
            <CustomLink
              key={link.name}
              type={link.type}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </SimpleGrid>
      </SlideWhenVisible>
    </Flex>
  );
}
