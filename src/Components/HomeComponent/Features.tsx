import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const Features = () => {
  return (
    <>
      <Box
        pt={"5rem"}
        justifyContent={"center"}
        display={"flex"}
        flexWrap={"wrap"}
        mb={"5rem"}
      >
        <Grid
          container
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"center"}
          direction={"row"}
          spacing={3}
        >
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia sx={{ height: "12rem", width: "100%" }}>
              <img
                src="/images/photo-1544560212-77289e5ea6cd.avif"
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  textAlign: "center",
                  fontSize: "1.8rem",
                  pb: "1rem",
                }}
              >
                The choice is yours
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontFamily: `"Roboto", sans-serif`,
                  fontWeight: "100",
                  textTransform: "capitalize",
                }}
              >
                customize your paper and page to your liking
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia sx={{ height: "12rem", width: "100%" }}>
              <img
                src="/images/photo-1598620617148-c9e8ddee6711.avif"
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  textAlign: "center",
                  fontSize: "1.8rem",
                  pb: "1rem",
                }}
                variant="h4"
              >
                Clear your tangled mind
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontFamily: `"Roboto", sans-serif`,
                  fontWeight: "100",
                  textTransform: "capitalize",
                }}
              >
                Explore a 100+ ways to arrange your notes and scribble your
                ideas
              </Typography>
            </CardContent>
          </Card>
          <Card sx={{ width: "20rem", height: "25rem" }}>
            <CardMedia sx={{ height: "12rem", width: "100%" }}>
              <img
                src="/images/photo-1585007600263-71228e40c8d1.avif"
                alt=""
                width={"100%"}
                height={"100%"}
                style={{ objectFit: "cover" }}
              />
            </CardMedia>
            <CardContent>
              <Typography
                variant="h4"
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  textAlign: "center",
                  fontSize: "1.8rem",
                  pb: "1rem",
                }}
              >
                Write down your thoughts
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  textAlign: "center",
                  fontSize: "1.2rem",
                  fontFamily: `"Roboto", sans-serif`,
                  fontWeight: "100",
                  textTransform: "capitalize",
                }}
              >
                Note down,shape &share your ideas
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Box>
    </>
  );
};

export default Features;
