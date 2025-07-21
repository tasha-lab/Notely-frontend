import {
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../Api/Axios";
import { toast } from "react-toastify";

interface User {
  firstname: string;
  lastname: string;
  username: string;
  email: string;
  password: string;
}

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["sign-up a user"],
    mutationFn: async (registeredUser: User) => {
      const response = await Api.post("/auth/register", registeredUser);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message || "signup failed");
    },
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/login");
    },
  });

  const handleSignUpUser = () => {
    const newUser = { firstname, lastname, email, username, password };
    console.log(newUser);
    mutate(newUser);
  };

  return (
    <>
      <Box>
        <Grid container p={"3rem"} justifyContent={"center"}>
          <Grid border={"1px solid black"} width={"25rem"}>
            <Stack spacing={3} p={"2rem"}>
              <Stack
                direction={"row"}
                pb={"1rem"}
                justifyContent={"center"}
                width={"100%"}
              >
                <Typography variant="h4">Sign up for free!!</Typography>
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
                label="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Confirm Password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <Button
                variant="contained"
                loading={isPending}
                onClick={handleSignUpUser}
              >
                Sign up
              </Button>
            </Stack>
            <Divider />
            <Stack direction={"row"} justifyContent={"center"} pt={"1rem"}>
              <Typography>
                Already have an account <Link to={"/login"}>Login</Link>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Signup;
