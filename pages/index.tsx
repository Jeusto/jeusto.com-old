import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Projects from "../components/Projects/Projects";

export default function Index() {
  return (
    <>
      <Head>
        {`<!-- Primary Meta Tags -->`}
        <title>Jeusto - Arhun Saday</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#111111" />
        <meta
          name="description"
          content="Developer in France, an undergraduate student at the University of Strasbourg."
        />
        {`<!-- Open Graph / Facebook -->`}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jeusto.me/" />
        <meta property="og:title" content="Jeusto - Arhun Saday" />
        <meta property="og:image" content="https://i.imgur.com/cfTxNyc.png" />
        <meta
          property="og:description"
          content="Developer in France, an undergraduate student at the University of Strasbourg."
        />
        {`<!-- Twitter -->`}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jeusto.me/" />
        <meta property="twitter:title" content="Jeusto - Arhun Saday" />
        <meta
          property="twitter:image"
          content="https://i.imgur.com/cfTxNyc.png"
        />
        <meta
          property="twitter:description"
          content="Developer in France, an undergraduate student at the University of Strasbourg."
        />
      </Head>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Featured></Featured>
      <Projects></Projects>
    </>
  );
}
