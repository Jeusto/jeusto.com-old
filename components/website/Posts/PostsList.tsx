import { SimpleGrid, Box } from "@chakra-ui/layout";
import PostCard from "@/components/website/Posts/PostCard";
import { Post } from "@/utils/types";

export default function PostsList({
  posts,
  maxCount,
}: {
  posts: Post[];
  maxCount: number;
}) {
  return (
    <Box>
      <SimpleGrid columns={{ sm: 1, md: 1, lg: 1, xl: 2 }} spacing="5">
        {posts.slice(0, maxCount).map((post: any) => (
          <PostCard key={post.slug} frontmatter={post} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
