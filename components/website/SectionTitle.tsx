import { Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Heading
      color={useColorModeValue("teal.500", "teal.200")}
      mt="8"
      mb="5"
      as="h2"
      size="xl"
    >
      {title}
    </Heading>
  );
}
