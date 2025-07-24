import { useQuery } from "@tanstack/react-query";
import AllNotes from "../Components/AllNotes/allNotes";
import MiniDrawer from "../Components/Profile/Dashboard";
import Api from "../Api/Axios";
import { Box, Grid } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import Navigations from "../Components/Common/navigations";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
}

const AllNotesPage = () => {
  const { data: notes = [], isLoading } = useQuery<Note[]>({
    queryKey: ["gettingAllNotes"],
    queryFn: async () => {
      const response = await Api.get("/entries");
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
        <Grid
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"1rem"}
        >
          {notes.map((notes: Note, index: number) => (
            <AllNotes key={notes.id} delay={index} notes={notes} />
          ))}
        </Grid>
      </MiniDrawer>
    </>
  );
};

export default AllNotesPage;
