import MainProjects from "@/components/website/Projects/MainProjects";
import SecondaryProjects from "@/components/website/Projects/SecondaryProjects";
import { Flex, useColorModeValue, Heading, Box, Text } from "@chakra-ui/react";
import SectionTitle from "@/components/website/SectionTitle";
import useTranslation from "next-translate/useTranslation";
import { getAllProjects } from "@/utils/getData";
import { Project } from "@/utils/types";
import SlideWhenVisible from "@/hooks/SlideWhenVisible";

export default function AllProjects({ projects }: { projects: Project[] }) {
  const { t } = useTranslation("common");

  return (
    <>
      <Flex
        transition="background-color 200ms linear"
        alignItems="left"
        direction="column"
        m="auto"
        px="10"
        maxW="1000px"
        mb="20"
      >
        <SlideWhenVisible threshold="0.11">
          <Heading
            color={useColorModeValue("teal.500", "teal.200")}
            as="h1"
            size="2xl"
          >
            {t("projects_title")}
          </Heading>
        </SlideWhenVisible>
        <SlideWhenVisible threshold="0.11">
          <Box mt="3" mb="5" w="90%">
            <Text>{t("projects_description")}</Text>
          </Box>
        </SlideWhenVisible>
        <MainProjects projects={projects} />
        <SectionTitle title={t("home_secondaryProjectsHeading")} />
        <SecondaryProjects projects={projects} />
      </Flex>
    </>
  );
}

export async function getStaticProps() {
  const projects = await getAllProjects();

  return {
    props: {
      projects,
    },
  };
}
