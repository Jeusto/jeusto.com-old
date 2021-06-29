import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jeusto - Arhun Saday</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
    </div>
  );
}
