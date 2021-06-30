import NextHead from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Featured from "../components/Featured/Featured";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

export default function Index() {
  return (
    <>
      <NextHead>
        <title>Jeusto - Arhun Saday</title>
        <link rel="icon" href="/favicon.ico" />
      </NextHead>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Featured></Featured>
      <Projects></Projects>
      <Contact></Contact>
    </>
  );
}
