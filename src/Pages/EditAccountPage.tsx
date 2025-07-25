import { Grid } from "@mui/material";
import MiniDrawer from "../Components/Profile/Dashboard";
import ProfileImage from "../Components/Profile/ProfileImage";
import UserAccount from "../Components/Profile/EditUserAccount";
import EditUserPass from "../Components/Profile/EditUserPass";

const UserAccountPage = () => {
  return (
    <>
      <MiniDrawer>
        <Grid
          style={{ marginTop: "2rem" }}
          display={"flex"}
          justifyContent={"center"}
          flexWrap={"wrap"}
          gap={"1rem"}
        >
          <ProfileImage />
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="center"
          flexWrap={"wrap"}
          gap={"2rem"}
        >
          <UserAccount />
          <EditUserPass />
        </Grid>
      </MiniDrawer>
    </>
  );
};

export default UserAccountPage;
