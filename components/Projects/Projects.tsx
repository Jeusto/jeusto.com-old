import { Box, Heading, Flex } from "@chakra-ui/layout";
import Card from "./Card";

export default function Featured() {
  return (
    <Box id="projects" pt="10rem">
      <Heading fontWeight="700" as="h1" fontSize="display2">
        {`Other projects I've done`}
      </Heading>
      <Flex>
        <Card
          imageUrl="https://i.imgur.com/vUZty5n.png"
          title="Trivia Ten"
          desc="A multiplayer trivia game made in pure javascript using express & socketio. Create a room and play with your friends. There's more than 4000 questions and 20 categories from open trivia database."
          repoLink="https://github.com/Jeusto/trivia-ten"
          demoLink="https://trivia-ten.herokuapp.com/"
          tag={["Javascript", "Socket.io", "Express"]}
        ></Card>
      </Flex>
    </Box>
  );
}
