import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

interface Notes {
  title: string;
  synopsis: string;
  content: string;
  id: string;
  dateCreated: string;
  user: { firstname: string; lastname: string; avatar: string };
}

interface NoteProps {
  note: Notes;
}

const ViewNote = ({ note }: NoteProps) => {
  const initials =
    `${note.user.firstname}`[0] + `${note.user.lastname}`[0].toUpperCase();
  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 4,
        display: "flex",
        mt: "3rem",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Card
        sx={{ width: "100%", maxWidth: "800px", p: 3, borderRadius: "1rem" }}
      >
        <Stack direction="row" alignItems="center" spacing={2} mb={2}>
          <Avatar
            sx={{ width: "3.5rem", height: "3.5rem" }}
            src={note?.user?.avatar}
          >
            {!note?.user?.avatar && initials}
          </Avatar>
          <Box>
            <Typography variant="subtitle1">
              {note.user.firstname} {note.user.lastname}
            </Typography>
            <Stack>
              <Typography variant="caption" color="text.secondary">
                {new Date(note.dateCreated).toISOString().split("T")[0]}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(note.dateCreated).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </Typography>
            </Stack>
          </Box>
        </Stack>

        <Typography variant="h4" fontWeight={700} gutterBottom>
          {note.title}
        </Typography>

        <Divider />

        <CardContent sx={{ px: 0 }}>
          <Typography
            variant="body1"
            sx={{
              whiteSpace: "pre-wrap",
              fontSize: "1.1rem",
              fontFamily: `"Roboto", sans-serif`,
            }}
          >
            {note.content}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ViewNote;
