import { Avatar, Box, Grid, Paper, Typography } from "@mui/material";

const Reviews = () => {
  return (
    <>
      <Box
        pt={"2rem"}
        justifyContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        mb={"5rem"}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              textTransform: "capitalize",
              fontSize: "2rem",
              textAlign: "center",
              mt: "0",
              mb: "1rem",
            }}
          >
            why people love us
          </Typography>
        </Box>
        <Grid
          container
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          direction={"row"}
          spacing={3}
        >
          <Box sx={{ display: "flex" }} width={"16rem"}>
            <Paper sx={{ display: "flex", p: 1 }}>
              <Avatar
                src="/images/user1.jpg"
                sx={{ marginTop: "2rem" }}
              ></Avatar>
              <Box sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="subtitle1">Jessica Smith</Typography>
                <Typography>
                  "Notely made my revision so much easier. It's like having a
                  personal organizer."
                </Typography>
                <Typography textAlign={"end"}>⭐⭐⭐⭐⭐</Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex" }} width={"16rem"}>
            <Paper sx={{ display: "flex", p: 1 }}>
              <Avatar sx={{ marginTop: "2rem" }}>KT</Avatar>
              <Box sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="subtitle1">Kevin Thompson</Typography>
                <Typography>
                  "I love how clean and minimal the interface is. Helps me
                  focus."
                </Typography>
                <Typography textAlign={"end"}>⭐⭐⭐⭐</Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex" }} width={"16rem"}>
            <Paper sx={{ display: "flex", p: 1 }}>
              <Avatar sx={{ marginTop: "2rem" }}>AR</Avatar>
              <Box sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="subtitle1">Amina Rahim</Typography>
                <Typography>
                  "Sharing notes with my group mates is so easy now."
                </Typography>
                <Typography textAlign={"end"}>⭐⭐⭐⭐⭐</Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex" }} width={"16rem"}>
            <Paper sx={{ display: "flex", p: 1 }}>
              <Avatar sx={{ marginTop: "2rem" }}>MO</Avatar>
              <Box sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="subtitle1">Michael Owino</Typography>
                <Typography>
                  "I can jot ideas down on the go and never lose anything."
                </Typography>
                <Typography textAlign={"end"}>⭐⭐⭐⭐⭐</Typography>
              </Box>
            </Paper>
          </Box>
          <Box sx={{ display: "flex" }} width={"16rem"}>
            <Paper sx={{ display: "flex", p: 1 }}>
              <Avatar sx={{ marginTop: "2rem" }}>LC</Avatar>
              <Box sx={{ paddingLeft: "1.5rem" }}>
                <Typography variant="subtitle1">Laura Chen</Typography>
                <Typography>
                  "Helps me keep all my study material in one place. Love it!"
                </Typography>
                <Typography textAlign={"end"}>⭐⭐⭐⭐</Typography>
              </Box>
            </Paper>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Reviews;
