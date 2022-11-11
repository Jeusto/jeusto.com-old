import { Heading } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Heading variant="brand" mt="8" mb="5" as="h2" fontSize="3xl">
      {title}
    </Heading>
  );
}
