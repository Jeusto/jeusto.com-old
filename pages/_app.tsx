import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "../styles/styles";
import Global from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Global>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Global>
  );
}
export default MyApp;
