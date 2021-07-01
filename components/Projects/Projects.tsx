import { Box, Heading, Flex, Spacer, Stack, HStack } from "@chakra-ui/layout";
import Card from "./Card";

export default function Featured() {
  return (
    <Box id="projects" pt="10rem">
      <Heading mb="-1rem" className="gradient_text1" fontSize="display2">
        {`Other projects I've made`}
      </Heading>
      <Flex
        spacing="5rem"
        flexWrap="wrap"
        justifyContent="space-between"
        alignItems="center"
      >
        <Card
          imageUrl="https://i.imgur.com/vUZty5n.png"
          title="Trivia Ten"
          desc="A multiplayer trivia game with rooms to play with your friends in real time."
          repoLink="https://github.com/Jeusto/trivia-ten"
          demoLink="https://trivia-ten.herokuapp.com/"
          tag={["Javascript", "Socket.io", "Express"]}
        ></Card>
        <Card
          imageUrl="https://i.imgur.com/7t5gaUJ.png"
          title="Zombie recipes"
          desc="A fullstack recipe website with user submissions, language selection and more."
          repoLink="https://github.com/Jeusto/zombie-recipes"
          demoLink="https://freshflesh.000webhostapp.com/index.php"
          tag={["Php", "Sqlite", "Sass"]}
        ></Card>
        <Card
          imageUrl="https://i.imgur.com/dA7y9Q6.png"
          title="Streamer is live"
          desc="A Chrome extension to see the status of your favorite twitch streamers and get an alert when they go live."
          repoLink="https://github.com/Jeusto/streamer-is-live"
          demoLink="https://github.com/Jeusto/streamer-is-live"
          tag={["Javascript", "Sass"]}
        ></Card>
        <Card
          imageUrl="https://i.imgur.com/M9TO2qR.png"
          title="Daily wallpapers"
          desc="A simple website to navigate through all the top wallpapers posted on Reddit every day."
          repoLink="https://github.com/Jeusto/daily-wallpapers"
          demoLink="https://daily-wallpapers.vercel.app/"
          tag={["React", "Styled components"]}
        ></Card>
        <Card
          imageUrl="https://i.imgur.com/AR2avfa.png"
          title="Tomotasks"
          desc="A productivity web app combining a countdown and a task list to use the Pomodoro technique."
          repoLink="https://github.com/Jeusto/tomotasks"
          demoLink="https://tomotasks.vercel.app/"
          tag={["React"]}
        ></Card>
        <Card
          imageUrl="https://i.imgur.com/YbrALwI.png"
          title="Game of life"
          desc="John Conway's game of life made in React. Create an initial configuration and observe how it evolves."
          repoLink="https://github.com/Jeusto/game-of-life"
          demoLink="https://gol-conway.vercel.app/"
          tag={["React"]}
        ></Card>
        <Card
          imageUrl="https://i.imgur.com/j0RtPun.png"
          title="Where's the ISS ?"
          desc="Observe the current location of the international space station with an interactive globe."
          repoLink="https://github.com/Jeusto/wheres-the-iss"
          demoLink="https://wheres-the-iss.vercel.app/"
          tag={["Javascript", "Three.js"]}
        ></Card>
      </Flex>
    </Box>
  );
}
