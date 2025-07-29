import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
  user: { firstname: string; lastname: string; avatar: string };
}

interface NotesProp {
  notes: Note;
  delay?: number;
}

const AllNotes = ({ notes }: NotesProp) => {
  const initials =
    `${notes.user?.firstname?.[0]}${notes.user?.lastname?.[0]}`.toUpperCase();
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
              <Stack
                direction={"row"}
                justifyContent={"space-between"}
                pb={".3rem"}
              >
                <Avatar
                  sx={{
                    height: "2rem",
                    width: "2rem",
                    color: "#000",
                  }}
                  src={notes.user?.avatar || undefined}
                >
                  {!notes.user?.avatar && initials}
                </Avatar>
                <Typography>
                  {new Date(notes.dateCreated).toISOString().split("T")[0]}
                </Typography>
              </Stack>
              <Divider />
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

export default AllNotes;
