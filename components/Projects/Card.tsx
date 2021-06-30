import {
  Flex,
  Box,
  HStack,
  Image,
  Text,
  IconButton,
  Tag,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaPython, FaJs, FaSass } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

type CardProps = {
  imageUrl: string;
  title: string;
  desc: string;
  repoLink: string;
  demoLink: string;
  tag: string;
};

export default function Card({
  imageUrl,
  title,
  desc,
  repoLink,
  demoLink,
  tag,
}: CardProps) {
  const getTag = (tag: string) => {
    let color = "gray";
    let icon = "FaCode";
    switch (tag) {
      case "React":
        color = "blue";
        icon = "FaReact";
        break;
      case "Typescript":
        color = "blue";
        icon = "SiTypescript";
        break;
      case "Javascript":
        color = "yellow";
        icon = "FaJs";
        break;
      case "Next.js":
        color = "lightgray";
        icon = "IoLogoVercel";
        break;
      case "Python":
        color = "orange";
        icon = "FaPython";
        break;
      case "Sass":
        color = "pink";
        icon = "FaSass";
        break;
      default:
        break;
    }
  };

  return (
    <Flex
      borderRadius="1rem"
      border="1px red solid"
      overflow="hidden"
      flexDirection="column"
    >
      <Image src="https://i.imgur.com/qxBeAkj.png" alt=""></Image>
      <Flex p="1rem">
        <Text>{title}</Text>
        <IconButton aria-label="Project repo" icon={<FaGithub />} />
        <IconButton aria-label="Project demo" icon={<FaExternalLinkAlt />} />
      </Flex>
      <HStack p="1rem">
        <Tag></Tag>
        <Tag></Tag>
        <Tag></Tag>
      </HStack>
      <Box p="1rem">
        <Text>
          {`A multiplayer trivia game made in pure javascript using express &
          socketio. Create a room and play with your friends. There's more than
          4000 questions and 20 categories from open trivia database.`}
        </Text>
      </Box>
    </Flex>
  );
}
