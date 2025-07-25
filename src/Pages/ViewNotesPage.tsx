import { Grid } from "@mui/material";
import MiniDrawer from "../Components/Profile/Dashboard";
import ViewNote from "../Components/ViewASingleNote/viewNote";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/Axios";
import { PropagateLoader } from "react-spinners";
import {
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

interface Notes {
  title: string;
  synopsis: string;
  content: string;
  id: string;
  dateCreated: string;
  user: { firstname: string; lastname: string; avatar: string };
}

const ViewNotes = () => {
  const { id } = useParams();
  const { data: note, isLoading } = useQuery<Notes>({
    queryKey: ["getASingleNote", id],
    queryFn: async () => {
      const response = await Api.get(`/entries/${id}`);
      return response.data.data;
    },
  });
  if (isLoading) {
    return (
      <PropagateLoader
        color="#7f5539"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      />
    );
  }
  return (
    <div>
      <MiniDrawer>
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
            <Typography variant="body1">Go to profile</Typography>
          </Stack>
        </Box>
        <Grid>{note && <ViewNote note={note} />}</Grid>
      </MiniDrawer>
    </div>
  );
};

export default ViewNotes;
