import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  Add,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
} from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import Api from "../../Api/Axios";
import { toast } from "react-toastify";

interface NotesData {
  title: string;
  synopsis: string;
  content: string;
}

const WritingNotes = () => {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["creatingNotes"],
    mutationFn: async (noteData: NotesData) => {
      const response = await Api.post("/entries", noteData);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      setTitle("");
      setSynopsis("");
      setContent("");
      navigate("/my-notes");
    },
  });

  const handleAddingNotes = () => {
    const noteData: NotesData = {
      title,
      synopsis,
      content,
    };

    mutate(noteData);
  };
  return (
    <>
      <Box
        mt={"5rem"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Stack
          component="a"
          href="/"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ textDecoration: "none", color: "text.primary" }}
        >
          <KeyboardDoubleArrowLeft fontSize="small" />
          <Typography variant="body1">Back to home</Typography>
        </Stack>
        <Stack
          component="a"
          href="/profile"
          direction={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ textDecoration: "none", color: "text.primary" }}
        >
          <KeyboardDoubleArrowRight fontSize="small" />
          <Typography variant="body1">Back to profile</Typography>
        </Stack>
      </Box>
      <Box
        mt={"3rem"}
        sx={{
          px: { xs: 2, md: 6 },
        }}
      >
        <Grid
          component={"form"}
          display={"flex"}
          justifyContent={"center"}
          p={"1rem"}
          my={"2rem"}
          border={"1px solid black"}
        >
          <FormControl
            sx={{
              width: "100%",
              maxWidth: "40rem",
            }}
          >
            <FormLabel
              sx={{
                color: "text.primary",
                fontSize: "2rem",
              }}
            >
              Title
            </FormLabel>
            <TextField
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                width: "100%",
                input: {
                  fontSize: "1.3rem",
                  textTransform: "capitalize",
                  overflow: "hidden",
                },
              }}
            />
            <FormLabel
              sx={{
                color: "text.primary",
                fontSize: "2rem",
              }}
            >
              Synopsis
            </FormLabel>
            <TextField
              label="synopsis"
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              sx={{
                overflow: "hidden",
                width: "100%",
                input: {
                  fontSize: "1rem",
                },
              }}
            />
          </FormControl>
        </Grid>

        <Grid
          component={"form"}
          border={"1px solid black"}
          p={"1rem"}
          display={"flex"}
          justifyContent={"center"}
        >
          <FormControl
            sx={{
              width: "100%",
              maxWidth: "40rem",
            }}
          >
            <FormLabel
              sx={{
                color: "text.primary",
                fontSize: "2rem",
                overflow: "hidden",
              }}
            >
              Notes
            </FormLabel>
            <TextField
              multiline
              minRows={40}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              sx={{
                width: "100%",
                textArea: {
                  fontFamily: `"Roboto", sans-serif`,
                  fontSize: "1rem",
                  fontWeight: 300,
                },
              }}
            />
          </FormControl>
        </Grid>
        <Stack my={"2rem"} direction={"row"} justifyContent={"right"}>
          <Button
            sx={{ width: "7rem" }}
            variant="contained"
            loading={isPending}
            onClick={handleAddingNotes}
          >
            Add
            <Add />
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default WritingNotes;
