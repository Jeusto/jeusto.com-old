import {
  VStack,
  Flex,
  Box,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import PostsList from "@/components/website/Posts/PostsList";
import { getAllPosts } from "@/utils/getData";
import { Post } from "@/utils/types";

export default function Blog({ posts }: { posts: Post[] }) {
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
        size="2xl"
      >
        Blog
      </Heading>
      <Box mt="3" mb="5" w="90%">
        <Text>
          I oc­ca­sion­ally pen down my thoughts about various topics like
          programming, tech­nol­ogy, pro­duc­tiv­ity, and de­sign.
        </Text>
      </Box>
      <Box>
        <VStack spacing="5" w="full" alignItems="stretch">
          {posts.length > 0 ? (
            <PostsList posts={posts} maxCount={999} />
          ) : (
            <Text>
              There&apos;s no blog posts yet. Please check back later 🙃
            </Text>
          )}
        </VStack>
      </Box>
    </Flex>
  );
}

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
}
