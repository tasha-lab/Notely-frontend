import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

const Navigations = () => {
  return (
    <>
      <Box
        mt={"5rem"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack
          component="a"
          href="/"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ textDecoration: "none", color: "text.primary" }}
        >
          <KeyboardDoubleArrowLeft fontSize="small" />
          <Typography variant="body1">Back to home</Typography>
        </Stack>
        <Stack
          component="a"
          href="/profile"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ textDecoration: "none", color: "text.primary" }}
        >
          <KeyboardDoubleArrowRight fontSize="small" />
          <Typography variant="body1">Back to profile</Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Navigations;
