import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

// Function to calculate fluid font size
const fluidType = (minFont, maxFont) => {
  let XX = 768 / 100;
  let YY = (100 * (maxFont - minFont)) / (1920 - 768);
  let ZZ = minFont / 16;
  return `calc(${ZZ}rem + ((1vw - ${XX}px) * ${YY}))`;
};

// Theme tokens
const colors = {
  background: "#111111",
  cardBackground: "#191919",
  textPrimary: "#ffffff",
  textSecondary: "#A3A3A3",
};
const fonts = {
  body: "Inter",
  heading: "Abhaya Libre",
};
const breakpoints = createBreakpoints({
  base: "0px",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});

// Component styles
const Button = {
  baseStyle: {
    bg: "blue.400",
    _focus: {
      boxShadow: "0 0 1px 3px #7d7d7d, 0 1px 1px rgba(0, 0, 0, .15)",
    },
  },
  sizes: {},
  variants: {
    underline: {
      bg: "transparent",
      _hover: {},
      _focus: {
        boxShadow: "0",
      },
    },
  },
  defaultProps: {},
};
const Link = {
  baseStyle: {
    bg: "transparent",
    _hover: { textDecoration: "none" },
  },
};
const IconButton = {
  baseStyle: {
    bg: "transparent",
    _hover: { textDecoration: "none" },
    _focus: {
      boxShadow: "0 0 1px 3px red, 0 1px 1px rgba(0, 0, 0, .15)",
    },
  },
};
const DrawerCloseButton = {
  baseStyle: {
    _focus: {
      boxShadow: "0 0 1px 3px red, 0 1px 1px rgba(0, 0, 0, .15)",
    },
  },
};
const ModalCloseButton = {
  baseStyle: {
    _focus: {
      boxShadow: "0 0 1px 3px red, 0 1px 1px rgba(0, 0, 0, .15)",
    },
  },
};

// Regroup and extend theme
const overrides = extendTheme({
  ...chakraTheme,
  colors,
  fonts,
  breakpoints,
  fontSizes: {
    base: "16px",
    xs: fluidType(6, 12),
    sm: fluidType(7, 14),
    md: fluidType(8, 16),
    lg: fluidType(9, 18),
    xl: fluidType(10, 20),
    "2xl": fluidType(12, 24),
    "3xl": fluidType(14, 28),
    "4xl": fluidType(18, 36),
    "5xl": fluidType(20, 40),
    "6xl": fluidType(24, 48),
    "7xl": fluidType(32, 64),
    "8xl": fluidType(36, 72),
    display: fluidType(65, 124),
    display2: fluidType(24, 36),
    display3: fluidType(16, 24),
  },
  components: { Button, Link, IconButton, ModalCloseButton, DrawerCloseButton },
  styles: {
    global: {
      body: {
        margin: "0rem 7vw",
        bg: "background",
        color: "textPrimary",
      },
    },
  },
});

const customTheme = extendTheme(overrides);
export default customTheme;
