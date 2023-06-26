import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Box, Typography } from "@mui/material";

export default function FakeRoute() {
  return (
    <Box role="presentation">
      <Typography variant="h1" paddingBottom={1.5}>
        حساب کاربری
      </Typography>
      <Breadcrumbs aria-label="breadcrumb">
        <Typography>خانه</Typography>
        <Typography>کاربر</Typography>
        <Typography>تنظیمات کاربری</Typography>
      </Breadcrumbs>
    </Box>
  );
}
