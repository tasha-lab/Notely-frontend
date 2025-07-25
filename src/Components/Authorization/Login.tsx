import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Stack,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/useAuth";
import { toast } from "react-toastify";

const Login = () => {
  const [password, setPassword] = useState("");
  const [identifier, setIdentifier] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const { isPending, mutate } = useMutation({
    mutationKey: ["loginExistingUser"],
    mutationFn: async () => {
      const data = await login(identifier, password);
      return data;
    },
    onError: (error: any) => {
      toast.error(error.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      if (data?.message == "Login Successfully") {
        navigate("/");
      }
    },
  });

  const handleLoginUser = (e: React.FormEvent) => {
    e.preventDefault();
    if (!identifier || !password) {
      toast.error("please fill all fields");
      return;
    }
    mutate();
  };

  return (
    <>
      <Box sx={{ height: "100vh" }} bgcolor={"background.default"}>
        <Grid container p={"3rem"} justifyContent={"center"}>
          <Paper
            sx={{
              width: "25rem",
              p: "2rem",
            }}
          >
            <Stack
              direction={"row"}
              pb={"1rem"}
              justifyContent={"center"}
              width={"100%"}
            >
              <Typography variant="h4">Welcome Back</Typography>
            </Stack>
            <Stack spacing={3}>
              <TextField
                variant="filled"
                label="Enter your email or username"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your current password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="contained"
                onClick={handleLoginUser}
                loading={isPending}
              >
                Log in
              </Button>
            </Stack>
            <Stack mt={"1rem"}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <Divider />
              <Typography display={"flex"} justifyContent={"center"}>
                Don't have an account <Link to={"/signup"}>Sign up</Link>
              </Typography>
            </Stack>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default Login;
