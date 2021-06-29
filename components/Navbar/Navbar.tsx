import { Flex, Spacer, Button } from "@chakra-ui/react";
import logo from "/public/logo.svg";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex
      w="100%"
      px="2rem"
      py="1rem"
      backgroundColor="background"
      justifyContent="space-between"
    >
      <Image layout="fixed" width="45" height="45" alt="tr" src={logo}></Image>
      <Flex>
        <Link href="/" passHref>
          <Button variant="ghost">Home</Button>
        </Link>
        <Link href="#featured_project" passHref>
          <Button variant="ghost">Featured</Button>
        </Link>
        <Link href="#projects" passHref>
          <Button variant="ghost">Projects</Button>
        </Link>
        <Link href="#contact" passHref>
          <Button variant="ghost">Contact</Button>
        </Link>
      </Flex>
    </Flex>
  );
}
