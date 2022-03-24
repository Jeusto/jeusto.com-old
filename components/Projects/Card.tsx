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
import {
  SiPhp,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiFlask,
} from "react-icons/si";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaReact, FaPython, FaSass, FaDatabase, FaJava } from "react-icons/fa";
import { IoLogoVercel } from "react-icons/io5";
import { HiOutlineCode } from "react-icons/hi";
import useMediaQuery from "../../hooks/useMediaQuery";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";

type CardProps = {
  image: string;
  title: string;
  description: string;
  repoLink: string;
  demoLink: string;
  tags: string[];
};

export default function Card({
  image,
  title,
  description,
  repoLink,
  demoLink,
  tags,
}: CardProps) {
  const isLgBreakPoint = useMediaQuery(1024);

  const tags_list = [
    {
      name: "Typescript",
      bg_color: "#243140",
      color: "#59a8ff",
      icon: SiTypescript,
    },
    {
      name: "Javascript",
      bg_color: "#3b371c",
      color: "#d4c22f",
      icon: SiJavascript,
    },
    {
      name: "Next.js",
      bg_color: "#121212",
      color: "#e2e8f0",
      icon: IoLogoVercel,
    },
    { name: "React", bg_color: "#41c0d9", color: "#41c0d9", icon: FaReact },
    { name: "Python", bg_color: "#40371a", color: "#d6b038", icon: FaPython },
    { name: "Sass", bg_color: "#47313c", color: "#fa78b9", icon: FaSass },
    { name: "Php", bg_color: "#37394a", color: "#a2abfa", icon: SiPhp },
    { name: "Java", bg_color: "#3d1d1d", color: "#fc686b", icon: FaJava },
    { name: "Sqlite", bg_color: "#2b3540", color: "#aad0fa", icon: FaDatabase },
    { name: "MongoDB", bg_color: "#283b1e", color: "#7ac253", icon: SiMongodb },
    { name: "Flask", bg_color: "#121212", color: "#e2e8f0", icon: SiFlask },
  ];

  const getTag = (tag_name: string) => {
    let t = tags_list.find((t) => t.name === tag_name);

    if (t) {
      return t;
    }

    return (t = {
      name: tag_name,
      bg_color: "#3a3b3c",
      color: "#e2e8f0",
      icon: HiOutlineCode,
    });
  };

  const Tags = tags.map((el) => {
    let t = getTag(el);
    return (
      <Tag
        fontSize={isLgBreakPoint ? "1rem" : "0.8rem"}
        p={isLgBreakPoint ? "0.5rem" : "0.4rem"}
        size={isLgBreakPoint ? "md" : "sm"}
        key={el}
        bg={t.bg_color}
        color={t.color}
      >
        <TagLeftIcon as={t.icon} />
        <TagLabel>{el}</TagLabel>
      </Tag>
    );
  });

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
        {image !== "" ? (
          <AspectRatio ratio={25 / 10}>
            <Image src={image} alt=""></Image>
          </AspectRatio>
        ) : (
          ""
        )}
        <Box>
          <Box>
            <Flex justifyContent="space-between" alignItems="center" p="1rem">
              <Heading fontSize="display2">{title}</Heading>
              <HStack spacing="0.5rem">
                {demoLink !== "" ? (
                  <Link href={demoLink} isExternal>
                    <IconButton
                      variant="ghost"
                      fontSize="1.5rem"
                      borderRadius="0.5rem"
                      aria-label="Project demo"
                      icon={<FiExternalLink />}
                    />
                  </Link>
                ) : (
                  ""
                )}
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
            <Text>{description}</Text>
          </Flex>
        </Box>
      </Flex>
    </SlideWhenVisible>
  );
}
