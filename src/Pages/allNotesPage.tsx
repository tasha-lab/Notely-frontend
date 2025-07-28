import { useQuery } from "@tanstack/react-query";
import AllNotes from "../Components/AllNotes/allNotes";
import MiniDrawer from "../Components/Profile/Dashboard";
import Api from "../Api/Axios";
import { Grid } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import { Box } from "@mui/material";
import Navigations from "../Components/Common/PageNavigations";

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
    staleTime: 0,
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
