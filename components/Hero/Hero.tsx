import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { FiGithub, FiTwitter, FiMail, FiLinkedin } from "react-icons/fi";
import useMediaQuery from "../../hooks/useMediaQuery";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import CustomLink from "./CustomLink";

export default function Landing() {
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
          <CustomLink
            isFirst={true}
            url="mailto:arhunsad@gmail.com"
            name="Email"
            icon={FiMail}
          ></CustomLink>
          <CustomLink
            isFirst={false}
            url="https://github.com/Jeusto"
            name="Github"
            icon={FiGithub}
          ></CustomLink>
          <CustomLink
            isFirst={false}
            url="https://www.linkedin.com/in/asaday/"
            name="LinkedIn"
            icon={FiLinkedin}
          ></CustomLink>
          <CustomLink
            isFirst={false}
            url="https://twitter.com/Jeustoo"
            name="Twitter"
            icon={FiTwitter}
          ></CustomLink>
        </Flex>
      </SlideWhenVisible>
    </Box>
  );
}
