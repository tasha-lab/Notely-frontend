import { Box, Container, Typography } from "@mui/material";

const Footer = () => {
  return (
    <>
      <Box
        component="footer"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: 1,
          mt: "auto",
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="body2" color="text.primary" align="center">
            © {new Date().getFullYear()} MySite. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
