import { MoreHoriz } from "@mui/icons-material";
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
import { Link } from "react-router-dom";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
}

interface NotesProp {
  notes: Note;
  delay?: number;
}
const ViewIndividualNotes = ({ notes }: NotesProp) => {
  const [menu, setMenu] = useState<null | HTMLElement>(null);

  const HandleMenuButton = (e: React.MouseEvent<HTMLElement>) => {
    setMenu(e.currentTarget);
  };
  const handleOnClose = () => {
    setMenu(null);
  };
  return (
    <>
      <Box width={"16rem"} mt={"2rem"}>
        <Grid container width={"100%"}>
          <Card
            sx={{
              width: { xs: "100%", lg: "18rem" },
              height: "15rem",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <CardContent sx={{ width: "100%" }}>
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
                    <MenuItem
                      component={Link}
                      to={`/edit-a-post/${notes.id}`}
                      state={{ note: notes }}
                    >
                      Edit
                    </MenuItem>
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
                  {notes.title}
                </Typography>
                <Typography variant="body1" mb={".9rem"}>
                  {notes.synopsis.split(" ").slice(0, 20).join(" ")}
                  {notes.synopsis.split(" ").length > 20 && "..."}
                </Typography>
              </Stack>
              <Stack direction={"row"} justifyContent={"right"}>
                <Button
                  sx={{
                    position: "absolute",
                    display: "flex",
                    bottom: ".5rem",
                    width: "5rem",
                  }}
                  variant="contained"
                  component={Link}
                  to={`/note/${notes.id}`}
                >
                  View
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
};

export default ViewIndividualNotes;
