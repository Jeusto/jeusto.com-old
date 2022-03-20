import { Box, Heading, SimpleGrid } from "@chakra-ui/layout";
import Card from "./Card";
import SlideWhenVisible from "../../hooks/SlideWhenVisible";
import useTranslation from "next-translate/useTranslation";

type ProjectsProps = {
  projects: object;
};

export default function Projects({ projects }: ProjectsProps) {
  const { t, lang } = useTranslation("common");

  return (
    <Box id="projects" pt="10rem" mb="5rem">
      <SlideWhenVisible threshold="0.11">
        <Heading mb="1rem" className="gradient_text1" fontSize="display2">
          {t("projects_heading")}
        </Heading>
      </SlideWhenVisible>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"3rem"}>
        {Object.values(projects)
          .sort(function (a, b) {
            return a.order - b.order;
          })
          .map((project) => (
            <Card
              key={project.order}
              image={project.image}
              title={project.title}
              description={
                lang === "fr" ? project.descriptionFr : project.description
              }
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              tags={project.tags}
            ></Card>
          ))}
      </SimpleGrid>
    </Box>
  );
}
