import { Box, Heading, Flex, SimpleGrid } from "@chakra-ui/layout";
import Card from "./Card";

export default function Featured() {
  return (
    <Box id="projects" pt="10rem">
      <Heading className="gradient_text1" fontSize="display2">
        {`Other projects I've made`}
      </Heading>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
        <Card
          imageUrl="https://i.imgur.com/vUZty5n.png"
          title="Trivia Ten"
          desc="A multiplayer trivia game made in pure javascript using express & socketio. Create a room and play with your friends. There's more than 4000 questions and 20 categories from open trivia database."
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
          imageUrl="https://camo.githubusercontent.com/2f2d932626189e1fe26c9c6f3de087203e6efa0f01dddbbcff45e0552b0290e4/68747470733a2f2f692e696d6775722e636f6d2f344739627a62472e676966"
          title="Streamer is live"
          desc="A Chrome extension to see the status of your favorite twitch streamers and get an alert when they go live."
          repoLink="https://github.com/Jeusto/streamer-is-live"
          demoLink="https://github.com/Jeusto/streamer-is-live"
          tag={["Javascript", "Sass"]}
        ></Card>
        <Card
          imageUrl="https://github.com/Jeusto/daily-wallpapers/raw/master/public/demo.gif"
          title="Daily wallpapers"
          desc="A simple website to navigate through all the top wallpapers posted on Reddit every day."
          repoLink="https://github.com/Jeusto/daily-wallpapers"
          demoLink="https://daily-wallpapers.vercel.app/"
          tag={["React", "Styled components"]}
        ></Card>
        <Card
          imageUrl="https://camo.githubusercontent.com/67a4e505c0fb4a231c511b51003ab06023ae739552382c7abe29a5badd1748ab/68747470733a2f2f692e696d6775722e636f6d2f70467430306a6b2e706e67"
          title="Tomotasks"
          desc="A productivity web app combining a countdown and a task list to use the Pomodoro technique."
          repoLink="https://github.com/Jeusto/tomotasks"
          demoLink="https://tomotasks.vercel.app/"
          tag={["React"]}
        ></Card>
        <Card
          imageUrl="https://github.com/Jeusto/game-of-life/raw/master/public/demo.gif"
          title="Game of life"
          desc="John Conway's game of life made in React. Create an initial configuration and observe how it evolves."
          repoLink="https://github.com/Jeusto/game-of-life"
          demoLink="https://gol-conway.vercel.app/"
          tag={["React"]}
        ></Card>
        <Card
          imageUrl="https://camo.githubusercontent.com/b1df51c71d929a35ef4183a863abae96a5fab582dd017160eeb89b254bab511b/68747470733a2f2f692e696d6775722e636f6d2f4d7330336463632e676966"
          title="Where's the ISS ?"
          desc="Observe the current location of the international space station with an interactive globe."
          repoLink="https://github.com/Jeusto/wheres-the-iss"
          demoLink="https://wheres-the-iss.vercel.app/"
          tag={["Javascript", "Three.js"]}
        ></Card>
      </SimpleGrid>
    </Box>
  );
}
