import { ArrowRight } from "@mui/icons-material";
import { Box, Button } from "@mui/material";

const CTA = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "20rem",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <img
        src="/images/journal.avif"
        alt="journal"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: ".6rem",
        }}
      />

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          top: "80%",
          left: "40%",
          zIndex: 1,
          color: "#fff",
          textAlign: "center",
        }}
      >
        Notely <ArrowRight />
      </Button>
    </Box>
  );
};

export default CTA;
