import { Box, Heading, Text } from "@chakra-ui/layout";

export default function Featured() {
  return (
    <Box id="featured" pt="10rem">
      <Heading fontWeight="700" as="h1" fontSize="display2">
        ⭐ Featured project: Silverbug
      </Heading>
      <Text>Coming soon...</Text>
    </Box>
  );
}
