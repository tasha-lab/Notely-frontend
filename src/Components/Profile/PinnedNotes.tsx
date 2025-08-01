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
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Api from "../../Api/Axios";
import { useMutation } from "@tanstack/react-query";

interface Note {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  dateCreated: string;
  lastUpdated: string;
  isDeleted: string;
  isPrivate: boolean;
  isPinned: boolean;
}

interface NotesProp {
  notes: Note;
  delay?: number;
  refetch: () => void;
}

const PinnedNotes = ({ notes, refetch }: NotesProp) => {
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
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <PushPin fontSize="small" />
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
                    <MenuItem onClick={() => handlePinningNotes(notes.id)}>
                      {notes.isPinned ? "unpin" : "pin"}
                    </MenuItem>
                    <MenuItem
                      component={Link}
                      to={`/edit-a-post/${notes.id}`}
                      state={{ note: notes }}
                    >
                      Edit
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

export default PinnedNotes;
