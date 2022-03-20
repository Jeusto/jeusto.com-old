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
  buttonBackground: "#222222",
  textPrimary: "#ffffff",
  textSecondary: "#A3A3A3",
};
const fonts = {
  body: "Inter",
  heading: "Abhaya Libre",
};
const breakpoints = createBreakpoints({
  base: "0px",
  xs: "320",
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
});
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Component styles
const Button = {
  sizes: {},
  variants: {
    ghost: {
      bg: "cardBackground",
      _hover: { bg: "buttonBackground" },
      _active: { bg: "buttonBackground" },
      _focus: { boxShadow: "0" },
    },
    ghost2: {
      bg: "rgba(48, 48, 48, 0.75)",
      _hover: { bg: "#303030" },
      _active: { bg: "#303030" },
      _focus: { boxShadow: "0" },
    },
    underline: {
      bg: "transparent",
      _focus: { boxShadow: "0" },
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
const CloseButton = {
  variants: {
    ghost: {
      _hover: { bg: "buttonBackground" },
      _focus: {
        boxShadow: "0",
      },
    },
  },
};

// Regroup and extend theme
const overrides = extendTheme({
  ...chakraTheme,
  colors,
  fonts,
  breakpoints,
  config,
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
    display: fluidType(50, 92),
    display2: fluidType(24, 36),
    display3: fluidType(16, 24),
  },
  components: { Button, Link, CloseButton },
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

export default extendTheme(overrides);
