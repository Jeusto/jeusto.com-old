import { Box, Heading, Text } from "@chakra-ui/layout";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";

export default function Featured() {
  return (
    <Box id="featured" pt="10rem">
      <SlideWhenVisible threshold="0.11">
        <Heading className="gradient_text2" fontSize="display2">
          Featured project : Silverbug
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Text mt="1rem" fontSize="display3">
          Coming soon...
        </Text>
      </SlideWhenVisible>
    </Box>
  );
}
