import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA49B",
      light: "#81cac5",
      dark: "#0c877d",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#de5762",
      light: "#e29ba2",
      dark: "#d43f4a",
      contrastText: "#ffffff",
    },
    action: {
      main: "#ffffff",
      contrastText: "#2AA49B",
    },
  },
});

export default theme;
