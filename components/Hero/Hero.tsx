import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link, Button, Icon } from "@chakra-ui/react";

export default function Landing() {
  return (
    <Box mt="10rem">
      <Heading fontWeight="700" as="h1" fontSize="display">
        {`Hi. I'm Jeusto.`}
      </Heading>
      <Heading mt="0.5rem" fontWeight="700" as="h1" fontSize="display">
        A developer.
      </Heading>
      <Box fontSize="display3" mt="3rem">
        <Text>🚀 Exploring opportunities and side projects.</Text>
        <Text>
          🏫 Currently a student at the University of Strasbourg, France.
        </Text>
      </Box>
      <HStack mt="1rem" spacing="0.75rem">
        <Link href="https://github.com/Jeusto" isExternal>
          <Button fontSize="base" leftIcon={<Icon as={FaGithub} w={5} h={5} />}>
            Github
          </Button>
        </Link>
        <Link href="https://twitter.com/Jeusto" isExternal>
          <Button
            fontSize="base"
            leftIcon={<Icon as={FaTwitter} w={5} h={5} />}
          >
            Twitter
          </Button>
        </Link>
        <Link href="mailto:arhunsad@gmail.com" isExternal>
          <Button
            fontSize="base"
            leftIcon={<Icon as={FaEnvelope} w={5} h={5} />}
          >
            Email
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
