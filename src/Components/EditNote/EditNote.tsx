import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Api from "../../Api/Axios";
import { toast } from "react-toastify";

interface Notes {
  title: string;
  synopsis: string;
  content: string;
}

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [content, setContent] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const editNote = location.state?.note;

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setSynopsis(editNote.synopsis);
      setContent(editNote.content);
    }
  }, [editNote]);
  const { isPending, mutate } = useMutation({
    mutationKey: ["editANote"],
    mutationFn: async (editedNote: Notes) => {
      const response = await Api.patch(`/entries/editNote/${id}`, editedNote);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      console.log(data.message);
      setTitle("");
      setSynopsis("");
      setContent("");
      navigate("/my-notes");
    },
  });

  const handleEditingNotes = () => {
    const note = { title, synopsis, content };
    mutate(note);
  };

  return (
    <>
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
              value={synopsis}
              onChange={(e) => setSynopsis(e.target.value)}
              label="synopsis"
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
              value={content}
              onChange={(e) => setContent(e.target.value)}
              multiline
              minRows={20}
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
            onClick={handleEditingNotes}
            loading={isPending}
            sx={{ width: "7rem" }}
            variant="contained"
          >
            Edit
          </Button>
        </Stack>
      </Box>
    </>
  );
};

export default EditPost;
