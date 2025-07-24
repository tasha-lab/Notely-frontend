import { Box, Grid } from "@mui/material";
import MiniDrawer from "../Components/Profile/Dashboard";
import ViewIndividualNotes from "../Components/Profile/ViewIndividualNotes";
import Navigations from "../Components/Common/navigations";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/Axios";
import { PropagateLoader } from "react-spinners";
import ProfileImage from "../Components/Profile/ProfileImage";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
}

const ProfilePage = () => {
  const { data: notes = [], isLoading } = useQuery<Note[]>({
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
        <Navigations />
        <ProfileImage />
        <Grid
          style={{ marginTop: "3rem" }}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"1rem"}
        >
          {notes.map((notes: Note, index: number) => (
            <ViewIndividualNotes key={notes.id} delay={index} notes={notes} />
          ))}
        </Grid>
      </MiniDrawer>
    </>
  );
};

export default ProfilePage;
