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
  Heading,
  Link,
  AspectRatio,
} from "@chakra-ui/react";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact, FaPython, FaSass, FaDatabase, FaJava } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { SiPhp, SiTypescript, SiJavascript, SiMongodb } from "react-icons/si";
import { HiOutlineCode } from "react-icons/hi";
import useMediaQuery from "../../hooks/useMediaQuery";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";

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
    let tagValues = {
      text: tag,
      backgroundColor: "#3a3b3c",
      textColor: "#e2e8f0",
      icon: HiOutlineCode,
    };
    switch (tag) {
      case "React":
        tagValues.backgroundColor = "#23383d";
        tagValues.textColor = "#41c0d9";
        tagValues.icon = FaReact;
        break;
      case "Typescript":
        tagValues.backgroundColor = "#243140";
        tagValues.textColor = "#59a8ff";
        tagValues.icon = SiTypescript;
        break;
      case "Javascript":
        tagValues.backgroundColor = "#3b371c";
        tagValues.textColor = "#d4c22f";
        tagValues.icon = SiJavascript;
        break;
      case "Next.js":
        tagValues.backgroundColor = "#121212";
        tagValues.textColor = "#e2e8f0";
        tagValues.icon = IoLogoVercel;
        break;
      case "Python":
        tagValues.backgroundColor = "#40371a";
        tagValues.textColor = "#d6b038";
        tagValues.icon = FaPython;
        break;
      case "Sass":
        tagValues.backgroundColor = "#47313c";
        tagValues.textColor = "#fa78b9";
        tagValues.icon = FaSass;
        break;
      case "Php":
        tagValues.backgroundColor = "#37394a";
        tagValues.textColor = "#a2abfa";
        tagValues.icon = SiPhp;
        break;
      case "Java":
        tagValues.backgroundColor = "#3d1d1d";
        tagValues.textColor = "#fc686b";
        tagValues.icon = FaJava;
        break;
      case "Sqlite":
        tagValues.backgroundColor = "#2b3540";
        tagValues.textColor = "#aad0fa";
        tagValues.icon = FaDatabase;
        break;
      case "MongoDB":
        tagValues.backgroundColor = "#283b1e";
        tagValues.textColor = "#7ac253";
        tagValues.icon = SiMongodb;
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
      bg={getTag(el).backgroundColor}
      color={getTag(el).textColor}
    >
      <TagLeftIcon as={getTag(el).icon} />
      <TagLabel>{el}</TagLabel>
    </Tag>
  ));

  return (
    <SlideWhenVisible threshold="0.11">
      <Flex
        boxShadow="sm"
        className="project_card"
        bg="cardBackground"
        borderRadius="1rem"
        overflow="hidden"
        flexDirection="column"
        height="100%"
      >
        {imageUrl !== "" ? (
          <AspectRatio ratio={25 / 10}>
            <Image src={imageUrl} alt=""></Image>
          </AspectRatio>
        ) : (
          ""
        )}
        <Box>
          <Box>
            <Flex justifyContent="space-between" alignItems="center" p="1rem">
              <Heading fontSize="display2">{title}</Heading>
              <HStack spacing="0.5rem">
                <Link href={demoLink} isExternal>
                  <IconButton
                    variant="ghost"
                    fontSize="1.5rem"
                    borderRadius="0.5rem"
                    aria-label="Project demo"
                    icon={<FiExternalLink />}
                  />
                </Link>

                <Link href={repoLink} isExternal>
                  <IconButton
                    variant="ghost"
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
          </Box>
          <Flex
            borderTop="1px solid #2c2d2e"
            flexDirection="column"
            justifyContent="flex-start"
            mx="1rem"
            py="1rem"
          >
            <Text>{desc}</Text>
          </Flex>
        </Box>
      </Flex>
    </SlideWhenVisible>
  );
}
