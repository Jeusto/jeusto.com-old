import { Box, Heading, Text, Flex, Link, Button, Icon } from "@chakra-ui/react";
import { FiGithub, FiTwitter, FiMail } from "react-icons/fi";
import useMediaQuery from "../../hooks/useMediaQuery";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";

export default function Landing() {
  const isLgBreakpoint = useMediaQuery(1024);

  return (
    <Box mt="10rem">
      <SlideWhenVisible threshold="0.11">
        <Heading
          className="gradient_heading"
          fontSize="display"
        >{`Hi. I'm Jeusto.`}</Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Heading
          className="gradient_heading"
          mt="-1rem"
          as="h1"
          fontSize="display"
        >
          A Developer.
        </Heading>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Box fontSize="display3" mt="2rem">
          <Text>{`🚀 Exploring opportunities and side projects.`}</Text>
          <Text>
            {`🏫 Currently a student at the University of Strasbourg in France.`}
          </Text>
        </Box>
      </SlideWhenVisible>
      <SlideWhenVisible threshold="0.11">
        <Flex mt="1rem">
          <Link href="mailto:arhunsad@gmail.com" isExternal>
            <Button
              variant="ghost"
              fontSize={isLgBreakpoint ? "16px" : "14px"}
              size={isLgBreakpoint ? "md" : "sm"}
              leftIcon={<Icon as={FiMail} />}
            >
              Email
            </Button>
          </Link>
          <Link ml="0.7rem" href="https://github.com/Jeusto" isExternal>
            <Button
              variant="ghost"
              fontSize={isLgBreakpoint ? "16px" : "14px"}
              size={isLgBreakpoint ? "md" : "sm"}
              leftIcon={<Icon as={FiGithub} />}
            >
              Github
            </Button>
          </Link>
          <Link ml="0.7rem" href="https://twitter.com/Jeustoo" isExternal>
            <Button
              variant="ghost"
              fontSize={isLgBreakpoint ? "16px" : "14px"}
              size={isLgBreakpoint ? "md" : "sm"}
              leftIcon={<Icon as={FiTwitter} />}
            >
              Twitter
            </Button>
          </Link>
        </Flex>
      </SlideWhenVisible>
    </Box>
  );
}
