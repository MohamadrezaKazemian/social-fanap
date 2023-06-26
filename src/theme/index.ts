import { createTheme } from "@mui/material/styles";
import { orange, grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: orange,
    secondary: grey,
    mode: "dark",
  },
  direction: "rtl",
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: 14,
          fontFamily: "IRANSans, Arial",
        },
        h1: {
          fontSize: "1.2rem",
          fontWeight: `bolder`,
        },
        h2: {
          fontSize: "0.9rem",
          fontWeight: `bold`,
        },
        subtitle1: {
          fontSize: "0.8em",
          color: grey[500],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: "600",
          fontSize: `0.9rem`,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderRadius: `10px`,
            },
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        outlined: {
          height: `0`,
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'IRANSans';
          font-style: normal;
          font-weight: 400;
          src: local('IRANSans'), url('/fonts/IRANSans.ttf') format('truetype');
        }
      `,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 800,
      lg: 960,
      xl: 1920,
    },
  },
});

export default theme;
