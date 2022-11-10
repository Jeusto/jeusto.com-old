import {
  Wrap,
  Flex,
  VStack,
  HStack,
  Text,
  Heading,
  Button,
  Link,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FiArrowRight, FiClock, FiTag } from "react-icons/fi";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";
import { BiTimer } from "react-icons/bi";
import { TbTags } from "react-icons/tb";
import { Image } from "@chakra-ui/react";

export default function PostCard({ frontmatter, isFeatured }: any) {
  const { t } = useTranslation("common");
  const date = new Date(frontmatter.published);
  const month = date.toLocaleString("default", { month: "long" });
  const formattedDate = `${date.getDate()} ${month} ${date.getFullYear()}`;

  return (
    <SlideWhenVisible threshold="0.11">
      <NextLink href={`/blog/${frontmatter.slug}`} locale={false} passHref>
        <Link href={`/blog/${frontmatter.slug}`} tabIndex={-1}>
          <Box
            borderRadius="lg"
            overflow="hidden"
            bg={useColorModeValue("gray.50", "gray.850")}
            transition={"all 150ms ease-in-out"}
            borderWidth="1px"
            borderColor={useColorModeValue("gray.200", "gray.800")}
            _hover={{
              transform: "translateY(-3px)",
              boxShadow: "lg",
            }}
          >
            <Flex>
              {isFeatured && (
                <Image
                  w={{ base: "0", lg: "50%" }}
                  objectFit={"cover"}
                  src={`/images/posts/example-post/cover.png`}
                  alt={"Image for article called: " + frontmatter.title}
                ></Image>
              )}
              <VStack w="100%" p="5" alignItems="flex-start" spacing="2">
                {/* <Text
                  fontFamily="heading"
                  color={useColorModeValue("gray.500", "gray.500")}
                  borderLeft="2px"
                  paddingLeft={2}
                  borderColor={useColorModeValue("gray.400", "gray.600")}
                >
                  {formattedDate}
                </Text> */}
                <Heading
                  as="h3"
                  fontSize="xl"
                  transition={"all 150ms ease-in-out"}
                  cursor={"pointer"}
                >
                  {frontmatter.title}
                </Heading>
                {isFeatured && <Text>{frontmatter.description}</Text>}
                <Flex w="100%" justifyContent="space-between">
                  <Wrap
                    color={useColorModeValue("gray.600", "gray.500")}
                    fontFamily={"heading"}
                  >
                    <HStack>
                      <BiTimer />
                      <Text>{frontmatter.readingTime}</Text>
                    </HStack>
                    <HStack>
                      <TbTags />
                      <Text>{frontmatter.tags}</Text>
                    </HStack>
                  </Wrap>
                </Flex>

                <Button
                  placeSelf={"flex-end"}
                  variant="link"
                  rightIcon={<FiArrowRight />}
                  color={useColorModeValue("teal.500", "teal.200")}
                  _hover={{
                    textDecoration: "none",
                  }}
                >
                  {t("button_readMore")}
                </Button>
              </VStack>
            </Flex>
          </Box>
        </Link>
      </NextLink>
    </SlideWhenVisible>
  );
}
