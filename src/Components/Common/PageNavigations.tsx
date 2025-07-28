import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

const Navigations = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        mt={"5rem"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate(-1)}
          style={{ textDecoration: "none" }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <KeyboardDoubleArrowLeft fontSize="small" />
            <Typography variant="body1">Back</Typography>
          </Stack>
        </Button>
        <Button
          variant="outlined"
          component={Link}
          to="/profile"
          style={{ textDecoration: "none" }}
        >
          <Stack
            direction={"row"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            <KeyboardDoubleArrowRight fontSize="small" />
            <Typography variant="body1">Go to profile</Typography>
          </Stack>
        </Button>
      </Box>
    </>
  );
};

export default Navigations;
