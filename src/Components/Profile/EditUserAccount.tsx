import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Api from "../../Api/Axios";
import { toast } from "react-toastify";
import { useAuth } from "../../Store/useAuth";

interface UserAccount {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
}

const UserAccount = () => {
  const { refreshUser, user } = useAuth();
  const [firstname, setFirstname] = useState(user?.user?.firstname || "");
  const [lastname, setLastname] = useState(user?.user?.lastname || "");
  const [username, setUsername] = useState(user?.user?.username || "");
  const [email, setEmail] = useState(user?.user?.email || "");

  const unchangedDetails =
    firstname === user?.user?.firstname &&
    lastname === user?.user?.lastname &&
    username === user?.user?.username;

  const { isPending, mutate } = useMutation({
    mutationKey: ["UpdatingUserDetails"],
    mutationFn: async (updatedUser: UserAccount) => {
      const response = await Api.patch("/auth/user", updatedUser);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      refreshUser();
    },
  });
  const handleEditDetails = () => {
    const edit: UserAccount = {
      firstname,
      lastname,
      username,
      email,
    };
    mutate(edit);
  };

  return (
    <>
      <Box
        bgcolor="background.default"
        sx={{
          flex: "1 1 300px",
          maxWidth: "100%",
          minWidth: 0,
        }}
      >
        <Grid container p="1rem" justifyContent="center">
          <Paper
            sx={{
              borderRadius: "2rem",
              width: "100%",
              maxWidth: "25rem",
              p: "1.5rem",
              "@media (max-width: 490px)": {
                p: "1rem",
              },
            }}
          >
            <Stack spacing={2} p="1rem">
              <Stack
                direction="row"
                pb="1rem"
                justifyContent="center"
                width="100%"
              >
                <Typography variant="h4">Edit your details</Typography>
              </Stack>
              <TextField
                variant="filled"
                label="Enter your Firstname"
                required
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your Lastname"
                required
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your Email"
                required
                value={email}
                disabled
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={handleEditDetails}
                loading={isPending}
                disabled={unchangedDetails}
              >
                Edit Details
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default UserAccount;
