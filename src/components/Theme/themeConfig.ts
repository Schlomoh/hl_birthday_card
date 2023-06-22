import { DefaultTheme } from "styled-components";

const theme: DefaultTheme = {
  colors: {
    base: {
      white: "#fcf4f4",
      black: "#121420",
    },
    grey: {
      light: "#c4c4c5",
      medium: "#898a8e",
      dark: "#4d4f57",
    },
    accent: {
      primary: "#ff7f11",
      yellow: "#edf060",
    },
  },
  misc: {
    boxShadow: "0 .5rem 1.5rem rgba(0,0,0,0.15)",
    navBar: {
      height: "4rem",
    },
  },
};

export default theme;
