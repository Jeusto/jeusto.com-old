import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/merriweather";
import customTheme from "../styles/theme";
import GlobalStyle from "../styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalStyle>
      <ChakraProvider resetCSS theme={customTheme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </GlobalStyle>
  );
}
