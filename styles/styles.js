import { theme as chakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// Theme tokens
const colors = {
  background: "#111111",
  cardBackground: "#191919",
  textPrimary: "#ffffff",
  textSecondary: "#A3A3A3",
};
const fonts = {
  body: "Inter",
  heading: "Merriweather",
};

// Component styles
const Button = {
  baseStyle: {},
  sizes: {},
  variants: { ghost: { bg: "transparent", _hover: { bg: "#1c1c1c" } } },
  defaultProps: {},
};

// Regroup all and extend theme
const overrides = extendTheme({
  ...chakraTheme,
  colors,
  fonts,
  components: { Button },
  // Global styles
  styles: {
    global: {
      body: {
        bg: "background",
        color: "textPrimary",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
});

const customTheme = extendTheme(overrides);
export default customTheme;
