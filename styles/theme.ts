import "@fontsource/merriweather";
import "@fontsource/inter/variable.css";
import "@fontsource/jetbrains-mono/variable.css";
import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import type { StyleFunctionProps } from "@chakra-ui/theme-tools";

const fonts = {
  body: `"Merriweather", ui-serif, serif`,
  heading: `"Inter", ui-sans-serif, sans-serif`,
  code: "JetBrains Mono, monospace",
  mono: "JetBrains Mono, monospace",
};
const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
  "4xl": "2.25rem",
  "5xl": "3rem",
  "6xl": "3.75rem",
  "7xl": "4.5rem",
  "8xl": "6rem",
  "9xl": "8rem",
};
const styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
      fontSize: "16px",
      scrollPaddingTop: "5rem",
      overflowY: "scroll",
    },
    body: {
      bg: mode("gray.100", "gray.900")(props),
    },
    ".chakra-heading": {
      position: "relative",
      marginLeft: "-6",
      paddingLeft: "6",
      "&:hover": {
        ".chakra-link::before": {
          content: `"#"`,
          display: "inline-block",
          width: "100%",
          position: "absolute",
          left: "0",
          color: mode("teal.400", "teal.200")(props),
        },
      },
    },
    ".rehype-code-title": {
      marginBottom: "-1rem",
      marginTop: "1rem",
      fontFamily: fonts.mono,
      opacity: 0.6,
    },
  }),
};
const colors = {
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#E5E5E5",
    300: "#D4D4D4",
    400: "#A3A3A3",
    500: "#737373",
    600: "#525252",
    700: "#404040",
    800: "#262626",
    850: "#1D1D1D",
    900: "#171717",
  },
};

const components = {
  Heading: {
    baseStyle: (props: StyleFunctionProps) => ({
      fontWeight: "500",
      letterSpacing: "-0.025em",
      color: props.colorMode === "dark" ? "gray.100" : "gray.800",
    }),
    variants: {
      brand: (props: StyleFunctionProps) => ({
        color: props.colorMode === "dark" ? "teal.200" : "teal.500",
      }),
    },
  },
  Text: {
    baseStyle: (props: StyleFunctionProps) => ({
      color: props.colorMode === "dark" ? "gray.300" : "gray.600",
    }),
  },
  Link: {
    baseStyle: {
      "&:hover": {
        textDecoration: "none",
      },
    },
    variants: {
      blog: (props) => ({
        textDecorationColor: mode("teal.400", "teal.200")(props),
        textDecoration: "underline",
        textUnderlineOffset: "0.3em",
        "&:hover": {
          textDecoration: "underline",
          color: mode("teal.500", "teal.200")(props),
        },
      }),
    },
  },
  Button: {
    baseStyle: {
      fontWeight: "500",
      fontFamily: fonts.heading,
    },
    variants: {
      solid: (props) => ({
        bg: mode("gray.100", "gray.800")(props),
        "&:hover": {
          bg: mode("gray.200", "gray.700")(props),
        },
      }),
      cardSolid: (props) => ({
        bg: mode("gray.100", "gray.800")(props),
        "&:hover": {
          bg: mode("gray.200", "gray.700")(props),
        },
      }),
      ghost: (props) => ({
        "&:hover": {
          bg: mode("gray.200", "gray.800")(props),
        },
      }),
      cardGhost: (props) => ({
        "&:hover": {
          bg: mode("gray.200", "gray.800")(props),
        },
      }),
    },
  },
};

const config = {
  initialColorMode: "system",
  disableTransitionOnChange: false,
};

const overrides = extendTheme({
  ...chakraTheme,
  config,
  fonts,
  fontSizes,
  styles,
  colors,
  components,
});

export default extendTheme(overrides);
