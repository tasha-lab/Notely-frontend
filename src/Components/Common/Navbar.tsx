import { AppBar, Avatar, Box, Container, Stack, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <AppBar
        position="static"
        sx={{
          bgcolor: "primary.main",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ width: "4rem", height: "3rem", position: "relative" }}>
              <img
                src="https://img.icons8.com/ios/50/books.png"
                alt=""
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>

            <Stack spacing={4} direction={"row"}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#1a1a1a",
                  fontSize: "1.2rem",
                }}
              >
                Home
              </Link>
              <Link
                to="/my-notes"
                style={{
                  textDecoration: "none",
                  color: "#1a1a1a",
                  fontSize: "1.2rem",
                }}
              >
                My Notes
              </Link>
            </Stack>
            <Box>
              <Avatar>
                <Link to="/profile" style={{ textDecoration: "none" }}>
                  T
                </Link>
              </Avatar>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navbar;
