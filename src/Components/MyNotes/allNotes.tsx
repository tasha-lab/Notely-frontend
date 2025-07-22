import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  MoreHoriz,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Menu,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";

const AllNotes = () => {
  const [menu, setMenu] = useState<null | HTMLElement>(null);

  const HandleMenuButton = (e: React.MouseEvent<HTMLElement>) => {
    setMenu(e.currentTarget);
  };
  const handleOnClose = () => {
    setMenu(null);
  };
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
      <Box width={"100%"} mt={"2rem"} border={"2px solid black"}>
        <Grid container width={"100%"} border={"2px solid red"}>
          <Card
            sx={{
              width: "18rem",
              height: "13rem",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <CardContent>
              <Box>
                <Stack direction={"row"} justifyContent={"right"}>
                  <Button onClick={HandleMenuButton} sx={{ width: "4rem" }}>
                    <MoreHoriz />
                  </Button>
                </Stack>
                <Stack>
                  <Menu
                    anchorEl={menu}
                    open={Boolean(menu)}
                    onClose={handleOnClose}
                  >
                    <MenuItem>Edit</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Pin</MenuItem>
                  </Menu>
                </Stack>
              </Box>
              <Stack>
                <Typography
                  variant="h4"
                  mb={".5rem"}
                  textTransform={"capitalize"}
                >
                  Title
                </Typography>
                <Typography variant="body1" mb={".5rem"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
                  quaerat?
                </Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"right"}>
                <Button sx={{ width: "7rem" }} variant="contained">
                  View more
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
};

export default AllNotes;
