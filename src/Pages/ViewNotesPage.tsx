import { Grid } from "@mui/material";
import MiniDrawer from "../Components/Profile/Dashboard";
import ViewNote from "../Components/ViewASingleNote/viewNote";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Api from "../Api/Axios";
import { PropagateLoader } from "react-spinners";
import { Box } from "@mui/material";
import Navigations from "../Components/Common/PageNavigations";

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
    staleTime: 0,
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
        <Navigations />
        <Box
          mt={"5rem"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        ></Box>
        <Grid>{note && <ViewNote note={note} />}</Grid>
      </MiniDrawer>
    </div>
  );
};

export default ViewNotes;
