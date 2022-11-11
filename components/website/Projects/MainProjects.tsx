import { Box, SimpleGrid } from "@chakra-ui/layout";
import MainProjectCard from "@/components/website/Projects/MainProjectCard";
import useTranslation from "next-translate/useTranslation";
import { Project } from "@/utils/types";

export default function MainProjects({ projects }: { projects: Project[] }) {
  const { lang } = useTranslation("common");

  return (
    <Box id="projects">
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 2 }} spacing="5">
        {Object.values(projects)
          .filter((project) => project.isSecondary === false)
          .map((project) => (
            <MainProjectCard
              key={project.order}
              image={project.image}
              title={project.title}
              description={
                lang === "fr" ? project.descriptionFr : project.description
              }
              repoLink={project.repoLink}
              demoLink={project.demoLink}
              tags={project.tags}
            ></MainProjectCard>
          ))}
      </SimpleGrid>
    </Box>
  );
}
