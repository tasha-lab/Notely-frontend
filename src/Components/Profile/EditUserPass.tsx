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
interface userPassword {
  oldPassword: string;
  newPassword: string;
}
const EditUserPass = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { refreshUser } = useAuth();
  const unchangedPassword =
    !oldPassword ||
    !newPassword ||
    !confirmPassword ||
    confirmPassword != newPassword;
  const { mutate, isPending } = useMutation({
    mutationKey: ["updatingPassword"],
    mutationFn: async (updatePassword: userPassword) => {
      const response = await Api.patch("/auth/password", updatePassword);
      return response.data;
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message);
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
      refreshUser();
    },
  });
  const handleChangingPassword = () => {
    if (newPassword === oldPassword) {
      return toast.error("No changes made to password");
    }
    if (confirmPassword != newPassword) {
      return toast.error("Password do not match");
    }
    mutate({ newPassword, oldPassword });
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
                <Typography variant="h4">Update Password</Typography>
              </Stack>
              <TextField
                variant="filled"
                label="Enter your old Password"
                required
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
              />
              <TextField
                variant="filled"
                label="Enter your new Password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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
                onClick={handleChangingPassword}
                loading={isPending}
                disabled={unchangedPassword}
              >
                Edit Password
              </Button>
            </Stack>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};

export default EditUserPass;
