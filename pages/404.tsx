import { Heading, Center } from "@chakra-ui/react";

export default function Custom404() {
  return (
    <Center height="95vh">
      <Heading
        w="100%"
        margin="auto"
        textAlign="center"
        as="h1"
        fontSize="display"
      >
        404. Page not found.
      </Heading>
    </Center>
  );
}
