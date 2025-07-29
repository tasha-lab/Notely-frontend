import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/useAuth";

const HeroSection = () => {
  const navigate = useNavigate();
  const { token } = useAuth();
  return (
    <div>
      <Box
        sx={{
          position: "relative",
          height: "32rem",
          overflow: "hidden",
          mt: "3rem",
          mb: "3rem",
          borderRadius: ".6rem",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage:
              "url('https://ik.imagekit.io/i41ltmdfl/user/hero-img.avif?updatedAt=1753702144146')",

            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(92, 64, 51, 0.6)",
            zIndex: 2,
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 3,
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            px: 2,
            flexDirection: "column",
          }}
        >
          <Typography variant="h2">
            Arrange your notes with Notely today!
          </Typography>
          <Button
            variant="contained"
            sx={{ mt: "2rem" }}
            onClick={() => {
              token ? navigate("/new-note") : navigate("/signup");
            }}
          >
            Get Started
            <ArrowRightAlt />
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default HeroSection;
