import {
  Flex,
  Box,
  HStack,
  Image,
  Text,
  IconButton,
  Tag,
  TagLeftIcon,
  TagLabel,
  Divider,
  Heading,
  Link,
} from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaReact, FaPython, FaJs, FaSass, FaCode } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";

type CardProps = {
  imageUrl: string;
  title: string;
  desc: string;
  repoLink: string;
  demoLink: string;
  tag: string[];
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
    let tagValues = { color: "gray", icon: FaCode, text: tag };
    switch (tag) {
      case "React":
        tagValues.color = "blue";
        tagValues.icon = FaReact;
        break;
      case "Typescript":
        tagValues.color = "blue";
        tagValues.icon = SiTypescript;
        break;
      case "Javascript":
        tagValues.color = "yellow";
        tagValues.icon = FaJs;
        break;
      case "Next.js":
        tagValues.color = "lightgray";
        tagValues.icon = IoLogoVercel;
        break;
      case "Python":
        tagValues.color = "orange";
        tagValues.icon = FaPython;
        break;
      case "Sass":
        tagValues.color = "pink";
        tagValues.icon = FaSass;
        break;
      default:
        break;
    }
    return tagValues;
  };

  const Tags = tag.map((el) => (
    <Tag
      fontSize="1rem"
      p="0.5rem"
      size="lg"
      key={el}
      colorScheme={getTag(el).color}
    >
      <TagLeftIcon as={getTag(el).icon} />
      <TagLabel>{el}</TagLabel>
    </Tag>
  ));

  return (
    <Flex
      mt="1rem"
      bg="cardBackground"
      borderRadius="1rem"
      overflow="hidden"
      flexDirection="column"
      w="35rem"
    >
      <Image
        width="100%"
        height="15rem"
        fit="cover"
        src={imageUrl}
        alt=""
      ></Image>
      <Flex justifyContent="space-between" alignItems="center" p="1rem">
        <Heading size="2xl">{title}</Heading>
        <HStack spacing="0.5rem">
          <Link href={repoLink} isExternal>
            <IconButton
              bg="transparent"
              fontSize="1.5rem"
              borderRadius="0.5rem"
              aria-label="Project repo"
              icon={<FaGithub />}
            />
          </Link>
          <Link href={demoLink} isExternal>
            <IconButton
              bg="transparent"
              fontSize="1.5rem"
              borderRadius="0.5rem"
              aria-label="Project demo"
              icon={<FaExternalLinkAlt />}
            />
          </Link>
        </HStack>
      </Flex>
      <HStack p="1rem" pt="0rem">
        {Tags}
      </HStack>
      <Divider margin="auto" w="94%" />
      <Box p="1rem">
        <Text color="lightGray">{desc}</Text>
      </Box>
    </Flex>
  );
}
