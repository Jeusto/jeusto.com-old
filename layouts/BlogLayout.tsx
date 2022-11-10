import Seo from "@/components/Seo";
import { Post } from "@/utils/types";
import {
  Wrap,
  Flex,
  VStack,
  HStack,
  Image,
  Text,
  Heading,
  AspectRatio,
  Box,
} from "@chakra-ui/react";
import { BiTimer } from "react-icons/bi";
import { TbTags, TbCalendarTime } from "react-icons/tb";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";
import { createRef } from "react";
import ReadingProgress from "@/components/website/ReadingProgress";
import { useColorModeValue } from "@chakra-ui/react";

interface BlogProps {
  children: React.ReactNode;
  frontmatter?: Post;
}

export default function BlogLayout({ children, frontmatter }: BlogProps) {
  const target = createRef() as React.MutableRefObject<HTMLInputElement>;
  const colorModeValue = useColorModeValue("teal.500", "teal.200");

  return (
    <>
      <ReadingProgress target={target} />
      <Box mb="20">
        <Seo {...frontmatter} />
        {frontmatter && (
          <article ref={target}>
            <Flex
              transition="background-color 200ms linear"
              alignItems="left"
              direction="column"
              m="auto"
              px="10"
              maxW="1000px"
            >
              <SlideWhenVisible threshold="0.11">
                <VStack
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  spacing="1.5"
                >
                  <Flex
                    w="100%"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Heading color={colorModeValue} as="h1" fontSize="4xl">
                      {frontmatter.title}
                    </Heading>
                  </Flex>
                  <Wrap fontFamily="heading" spacing="5">
                    <HStack>
                      <TbCalendarTime />
                      <Text>{frontmatter.published}</Text>
                    </HStack>
                    <HStack>
                      <BiTimer />
                      <Text>{frontmatter.readingTime}</Text>
                    </HStack>
                    <HStack>
                      <TbTags />
                      <Text>{frontmatter.tags}</Text>
                    </HStack>
                  </Wrap>
                </VStack>
                {frontmatter.coverImage && (
                  <AspectRatio my="5" ratio={1920 / 1080}>
                    <Image
                      boxShadow="xs"
                      borderRadius="md"
                      src={frontmatter.coverImage}
                      alt=""
                    ></Image>
                  </AspectRatio>
                )}
                <Box as="main" className="post">
                  {children}
                </Box>
              </SlideWhenVisible>
            </Flex>
          </article>
        )}
      </Box>
    </>
  );
}
