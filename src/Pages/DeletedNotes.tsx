import MiniDrawer from "../Components/Profile/Dashboard";
import DeleteNotesUI from "../Components/Profile/DeletedNotes";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/Axios";
import { PropagateLoader } from "react-spinners";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import Navigations from "../Components/Common/Navigations";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
  isDeleted: string;
}

const DeletedNotes = () => {
  const {
    data: notes = [],
    isLoading,
    refetch,
  } = useQuery<Note[]>({
    queryKey: ["gettingDeletedNotes"],
    queryFn: async () => {
      const response = await Api.get("/entries/trash");
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
          style={{ marginTop: "1rem" }}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"1rem"}
        >
          {notes.map((notes: Note, index: number) => (
            <DeleteNotesUI
              key={notes.id}
              delay={index}
              refetch={refetch}
              notes={notes}
            />
          ))}
        </Grid>
      </MiniDrawer>
    </>
  );
};

export default DeletedNotes;
