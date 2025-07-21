import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9c6644",
    },
    secondary: {
      main: "#7f5539",
    },
    background: {
      default: "#ede0d4",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#b08968",
    },

    // button: {
    //   main: "#7f5539",
    // },
    // custom: {
    //   tan: "#ddb892",
    //   coffee: "#7f5539",
    // },
  },
  typography: {
    body1: {
      fontFamily: `"Roboto", sans-serif`,
      fontSize: `.8rem`,
    },
    h2: {
      fontFamily: `"Fleur De Leah", cursive`,
    },
    h4: {
      fontFamily: `"Fleur De Leah", cursive`,
      fontSize: `1.5rem`,
    },
    h3: {
      fontFamily: `"IBM Plex Serif", serif`,
    },
  },
});

export default theme;
