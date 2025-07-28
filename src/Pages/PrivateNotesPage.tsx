import PrivateNotes from "../Components/Profile/PrivateNotes";
import MiniDrawer from "../Components/Profile/Dashboard";
import Navigations from "../Components/Common/PageNavigations";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/Axios";
import { Box, Grid, Typography } from "@mui/material";
import { PropagateLoader } from "react-spinners";
import { Lock } from "@mui/icons-material";
interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
  isDeleted: string;
  isPrivate: boolean;
}
const PrivateNotesPage = () => {
  const {
    data: notes = [],
    isLoading,
    refetch,
  } = useQuery<Note[]>({
    queryKey: ["gettingPinnedNotes"],
    queryFn: async () => {
      const response = await Api.get("/entries/private");
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
        {notes.length === 0 ? (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height={"80vh"}
          >
            <Grid
              container
              direction={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Typography>
                <Lock sx={{ height: "5rem", width: "5rem" }} />
              </Typography>
              <Typography variant="h4" textAlign={"center"}>
                You do not any private notes!
              </Typography>
            </Grid>
          </Box>
        ) : (
          <Grid
            style={{ marginTop: "1rem" }}
            display={"flex"}
            justifyContent={"center"}
            flexWrap={"wrap"}
            gap={"1rem"}
          >
            {notes.map((notes: Note, index: number) => (
              <PrivateNotes
                key={notes.id}
                delay={index}
                refetch={refetch}
                notes={notes}
              />
            ))}
          </Grid>
        )}
      </MiniDrawer>
    </>
  );
};

export default PrivateNotesPage;
