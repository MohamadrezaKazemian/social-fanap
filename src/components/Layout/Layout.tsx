import { ReactNode } from "react";
import Header from "./Header";
import theme from "../../theme";
import { ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline } from "@mui/material";
import RTL from "../RTL";
interface LayoutProps {
  children: ReactNode | ReactNode[];
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <ThemeProvider theme={theme}>
      <RTL>
        <Box
          padding={5}
          maxWidth={theme.breakpoints.values.lg}
          margin={`0 auto`}
        >
          <CssBaseline />
          <Header />
          {children}
        </Box>
      </RTL>
    </ThemeProvider>
  );
};

export default Layout;
