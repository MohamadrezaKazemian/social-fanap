import { Box } from "@mui/material";
import { Search, Profile } from "../../assets/icons";

const Header = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: "space-between",
        right: 0,
        left: 0,
        marginY: 4,
        paddingX: 5,
      }}
    >
      <Box>
        <Search />
      </Box>
      <Box>
        <Profile />
      </Box>
    </Box>
  );
};

export default Header;
