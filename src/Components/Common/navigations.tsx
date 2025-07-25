import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
        <Link to="/" style={{ textDecoration: "none" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <KeyboardDoubleArrowLeft fontSize="small" />
            <Typography variant="body1">Back to home</Typography>
          </Stack>
        </Link>
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <KeyboardDoubleArrowRight fontSize="small" />
            <Typography variant="body1">Go to profile</Typography>
          </Stack>
        </Link>
      </Box>
    </>
  );
};

export default Navigations;
