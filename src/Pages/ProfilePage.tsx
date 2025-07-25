import { Grid } from "@mui/material";
import MiniDrawer from "../Components/Profile/Dashboard";
import ViewIndividualNotes from "../Components/Profile/ViewIndividualNotes";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/Axios";
import { PropagateLoader } from "react-spinners";
import ProfileImage from "../Components/Profile/ProfileImage";
import { KeyboardDoubleArrowLeft } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
  isDeleted: string;
}

const ProfilePage = () => {
  const {
    data: notes = [],
    isLoading,
    refetch,
  } = useQuery<Note[]>({
    queryKey: ["gettingAllNotes"],
    queryFn: async () => {
      const response = await Api.get("/entries/user/entries");
      return response.data.data;
    },
  });
  if (isLoading) {
    return (
      <Box>
        <PropagateLoader
          color="#7f5539"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        />
      </Box>
    );
  }
  return (
    <>
      <MiniDrawer>
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
        </Box>
        <ProfileImage />
        <Grid
          style={{ marginTop: "3rem" }}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"1rem"}
        >
          {notes.map((notes: Note, index: number) => (
            <ViewIndividualNotes
              key={notes.id}
              refetch={refetch}
              delay={index}
              notes={notes}
            />
          ))}
        </Grid>
      </MiniDrawer>
    </>
  );
};

export default ProfilePage;
