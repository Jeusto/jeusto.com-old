import { Box, Heading, Flex } from "@chakra-ui/layout";
import Card from "./Card";

export default function Featured() {
  return (
    <Box mt="10rem">
      <Heading fontWeight="700" as="h2" fontSize="display2">
        🎉 Other projects
      </Heading>
      <Flex>
        <Card
          imageUrl="https://i.imgur.com/qxBeAkj.png"
          title="Trivia Ten"
          desc="A multiplayer trivia game made in pure javascript using express & socketio. Create a room and play with your friends. There's more than 4000 questions and 20 categories from open trivia database."
          repoLink="https://github.com/Jeusto/trivia-ten"
          demoLink="https://trivia-ten.herokuapp.com/"
          tag="Javascript"
        ></Card>
      </Flex>
    </Box>
  );
}
