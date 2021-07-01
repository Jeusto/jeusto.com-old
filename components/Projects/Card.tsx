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
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import { FaReact, FaPython, FaSass, FaCode, FaDatabase } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiPhp, SiTypescript, SiJavascript } from "react-icons/si";
import useMediaQuery from "../../hooks/useMediaQuery";

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
  const isLgBreakPoint = useMediaQuery(1024);

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
        tagValues.icon = SiJavascript;
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
      case "Php":
        tagValues.color = "purple";
        tagValues.icon = SiPhp;
        break;
      case "Sqlite":
        tagValues.color = "teal";
        tagValues.icon = FaDatabase;
        break;
      default:
        break;
    }
    return tagValues;
  };

  const Tags = tag.map((el) => (
    <Tag
      fontSize={isLgBreakPoint ? "1rem" : "0.8rem"}
      p={isLgBreakPoint ? "0.5rem" : "0.4rem"}
      size={isLgBreakPoint ? "md" : "sm"}
      key={el}
      colorScheme={getTag(el).color}
    >
      <TagLeftIcon as={getTag(el).icon} />
      <TagLabel>{el}</TagLabel>
    </Tag>
  ));

  return (
    <Flex
      className="project_card"
      mt="2rem"
      mr="2rem"
      bg="cardBackground"
      borderRadius="1rem"
      overflow="hidden"
      flexDirection="column"
      minW="30rem"
      maxW="40rem"
    >
      <Image w="100%" h="15rem" fit="cover" src={imageUrl} alt=""></Image>
      <Box>
        <Box>
          <Flex justifyContent="space-between" alignItems="center" p="1rem">
            <Heading fontSize="display2">{title}</Heading>
            <HStack spacing="0.5rem">
              <Link href={demoLink} isExternal>
                <IconButton
                  bg="transparent"
                  fontSize="1.5rem"
                  borderRadius="0.5rem"
                  aria-label="Project demo"
                  icon={<FiExternalLink />}
                />
              </Link>

              <Link href={repoLink} isExternal>
                <IconButton
                  bg="transparent"
                  fontSize="1.5rem"
                  borderRadius="0.5rem"
                  aria-label="Project repo"
                  icon={<FiGithub />}
                />
              </Link>
            </HStack>
          </Flex>
          <HStack p="1rem" pt="0rem">
            {Tags}
          </HStack>
          <Divider margin="auto" w="94%" />
        </Box>
        <Flex flexDirection="column" justifyContent="flex-start" p="1rem">
          <Text>{desc}</Text>
        </Flex>
      </Box>
    </Flex>
  );
}
