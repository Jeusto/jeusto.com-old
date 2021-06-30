import { Box, Heading, Text } from "@chakra-ui/layout";

export default function Featured() {
  return (
    <Box id="featured" pt="10rem">
      <Heading className="gradient_text2" fontSize="display2">
        Featured project : Silverbug
      </Heading>
      <Text mt="1rem" fontSize="display3">
        Coming soon...
      </Text>
    </Box>
  );
}
