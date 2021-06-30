import { Box, Heading, Text, Flex } from "@chakra-ui/layout";
import NextImage from "next/image";
import me from "/public/me.jpg";
import logo from "/public/logo.svg";

export default function About() {
  return (
    <Flex
      id="about"
      flexWrap="wrap"
      pt="10rem"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box w="55%">
        <Heading fontWeight="700" as="h1" fontSize="display2">
          About me
        </Heading>
        <Text fontSize="display3" mt="1rem">
          {`Hey! I'm Arhun Saday, also known as Jeusto. I've been close to a 
          computer since an early age, and been passionate about it since then.`}
        </Text>
        <Text fontSize="display3" mt="1rem">
          {`I've been doing graphic design and 3D modeling as a hobby for a few years. Fast forward to today, I
        study computer science and maths at the University of Strasbourg in
        France.`}
        </Text>
        <Text fontSize="display3" mt="1rem">
          {`I do programming in various languages and technologies including Typescript, React, Nextjs, Python, Java and more.
        I try to learn and get better every single day. I especially love building interesting and
        useful stuff with code.`}
        </Text>
      </Box>
      <Box width="25rem" height="25rem" overflow="hidden">
        <svg className="defs">
          <defs>
            <clipPath id="squircle" clipPathUnits="objectBoundingBox">
              <path d="M .5 0 C .1 0 0 .1 0 .5 0 .9 .1 1 .5 1 .9 1 1 .9 1 .5 1 .1 .9 0 .5 0 Z" />
            </clipPath>
          </defs>
        </svg>
        <NextImage className="squircle" src={me} alt="Segun Adebayo" />
      </Box>
    </Flex>
  );
}
