import { CameraAlt, Edit } from "@mui/icons-material";
import { Avatar, Box, Button, Stack } from "@mui/material";
import { useState } from "react";
import Api from "../../Api/Axios";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import { useAuth } from "../../Store/useAuth";

const ProfileImage = () => {
  const { user, refreshUser } = useAuth();
  const [preview, setPreview] = useState<string | null>(
    user?.user?.avatar || null
  );
  const [avatar, setAvatar] = useState<File | null>(null);
  const [isPending, setIsPending] = useState(false);

  const handleImageInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setAvatar(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleAvatarSave = async () => {
    if (!avatar) return;
    setIsPending(true);
    const formData = new FormData();
    formData.append("avatar", avatar);
    try {
      await Api.patch("/auth/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      refreshUser();
      setIsPending(false);
      toast.success("Profile image added successfully");
    } catch (error) {
      setIsPending(false);
      toast.error("Upload Failed");
    }
  };

  return (
    <Box width="100%" mt="2rem">
      <Stack
        direction="column"
        alignItems="center"
        spacing={3}
        justifyContent="center"
      >
        <Box sx={{ position: "relative", width: "10rem", height: "10rem" }}>
          <label htmlFor="upload-avatar">
            <input
              type="file"
              accept="image/*"
              id="upload-avatar"
              style={{ display: "none" }}
              onChange={handleImageInput}
            />
            <Avatar
              src={preview || undefined}
              sx={{
                width: "100%",
                height: "100%",
                cursor: "pointer",
                bgcolor: "grey.200",
              }}
            >
              {!preview && (
                <CameraAlt
                  sx={{ color: "text.primary", width: "3rem", height: "3rem" }}
                />
              )}
            </Avatar>
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                bgcolor: "rgba(0, 0, 0, 0.4)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "50%",
                opacity: 0,
                transition: "opacity 0.3s ease-in-out",
                "&:hover": {
                  opacity: 1,
                },
              }}
            >
              <Edit sx={{ color: "#fff", fontSize: "2rem" }} />
            </Box>
          </label>
        </Box>

        <Button
          onClick={handleAvatarSave}
          variant="contained"
          sx={{ width: "5rem", height: "2rem" }}
          disabled={!avatar}
        >
          {isPending ? <BeatLoader color="#ede0d4" /> : "save"}
        </Button>
        {/* <img src={user?.user.avatar} alt="image" /> */}
      </Stack>
    </Box>
  );
};

export default ProfileImage;
