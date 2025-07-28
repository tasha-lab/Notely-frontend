import { MoreHoriz } from "@mui/icons-material";
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
  isDeleted: string;
  isPrivate: boolean;
}

interface NotesProp {
  notes: Note;
  delay?: number;
  refetch: () => void;
}

const PublicNotes = ({ notes, refetch }: NotesProp) => {
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
              <Box>
                <Stack direction={"row"} justifyContent={"right"}>
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
                    <MenuItem onClick={() => handleDeletingNote(notes.id)}>
                      Delete
                    </MenuItem>
                    <MenuItem onClick={() => handleNoteStatus(notes.id)}>
                      {notes.isPrivate ? "Public" : "Private"}
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
                <Typography variant="body1" mb={".9rem"} overflow={"hidden"}>
                  {notes.synopsis}{" "}
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

export default PublicNotes;
