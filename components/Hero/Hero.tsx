import { Box, Heading, Text, HStack } from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Link, Button, Icon } from "@chakra-ui/react";
import useMediaQuery from "../../hooks/useMediaQuery";

export default function Landing() {
  const isLgBreakpoint = useMediaQuery(1024);

  return (
    <Box mt="10rem">
      <Heading
        className="gradient_heading"
        fontSize="display"
      >{`Hi. I'm Jeusto.`}</Heading>
      <Heading
        className="gradient_heading"
        mt="-1rem"
        as="h1"
        fontSize="display"
      >
        A Developer.
      </Heading>
      <Box fontSize="display3" mt="2rem">
        <Text>{`🚀 Exploring opportunities and side projects.`}</Text>
        <Text>
          {`🏫 Currently a student at the University of Strasbourg in France.`}
        </Text>
      </Box>
      <HStack mt="1.5rem" spacing="0.75rem">
        <Link href="mailto:arhunsad@gmail.com" isExternal>
          <Button
            fontSize={isLgBreakpoint ? "16px" : "14px"}
            size={isLgBreakpoint ? "md" : "sm"}
            leftIcon={<Icon as={FaEnvelope} />}
          >
            Email
          </Button>
        </Link>
        <Link href="https://github.com/Jeusto" isExternal>
          <Button
            fontSize={isLgBreakpoint ? "16px" : "14px"}
            size={isLgBreakpoint ? "md" : "sm"}
            leftIcon={<Icon as={FaGithub} />}
          >
            Github
          </Button>
        </Link>
        <Link href="https://twitter.com/Jeusto" isExternal>
          <Button
            fontSize={isLgBreakpoint ? "16px" : "14px"}
            size={isLgBreakpoint ? "md" : "sm"}
            leftIcon={<Icon as={FaTwitter} />}
          >
            Twitter
          </Button>
        </Link>
      </HStack>
    </Box>
  );
}
