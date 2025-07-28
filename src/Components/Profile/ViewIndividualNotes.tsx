import { MoreHoriz, PushPin } from "@mui/icons-material";
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
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router-dom";
import Api from "../../Api/Axios";
import { toast } from "react-toastify";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
  isDeleted: boolean;
  isPrivate: boolean;
  isPinned: boolean;
}

interface NotesProp {
  notes: Note;
  delay?: number;
  refetch: () => void;
}
const ViewIndividualNotes = ({ notes, refetch }: NotesProp) => {
  const { mutate } = useMutation({
    mutationKey: ["DeleteANote"],
    mutationFn: async (id: string) => {
      const response = await Api.delete(`/entries/${id}`);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      refetch();
    },
  });
  const handleDeletingNote = (id: string) => {
    mutate(id);
  };

  const { mutate: pinnote } = useMutation({
    mutationKey: ["pinaNote"],
    mutationFn: async (id: string) => {
      const response = await Api.patch(`/entries/pinned/${id}`);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      refetch();
    },
  });
  const handlePinningNotes = (id: string) => {
    pinnote(id);
  };

  const { mutate: noteStatus } = useMutation({
    mutationKey: ["SetNoteStatus"],
    mutationFn: async (id: string) => {
      const response = await Api.patch(`/entries/private/${id}`);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      refetch();
    },
  });
  const handleNoteStatus = (id: string) => {
    noteStatus(id);
  };

  const [menu, setMenu] = useState<null | HTMLElement>(null);

  const HandleMenuButton = (e: React.MouseEvent<HTMLElement>) => {
    setMenu(e.currentTarget);
  };
  const handleOnClose = () => {
    setMenu(null);
  };
  return (
    <>
      <Box width={"16rem"}>
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
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Typography
                    sx={{
                      bgcolor: notes.isPrivate ? "#fddede" : "#d0f0c0",
                      width: "4rem",
                      display: "flex",
                      justifyContent: "center",
                      borderRadius: ".6rem",
                      height: "1.2rem",
                    }}
                  >
                    {notes.isPrivate ? "Private" : "public"}
                  </Typography>
                  <Typography>
                    {notes.isPinned ? <PushPin fontSize="small" /> : ""}
                  </Typography>
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
                    <MenuItem onClick={() => handlePinningNotes(notes.id)}>
                      {notes.isPinned ? "unpin" : "pin"}
                    </MenuItem>
                    <MenuItem onClick={() => handleNoteStatus(notes.id)}>
                      {notes.isPrivate ? "Public" : "Private"}
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleDeletingNote(notes.id)}
                      sx={{ bgcolor: "#fddede" }}
                    >
                      Delete
                    </MenuItem>
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
