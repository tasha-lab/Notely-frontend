import Navigations from "../Components/Common/Navigations";
import EditPost from "../Components/EditNote/EditNote";
import MiniDrawer from "../Components/Profile/Dashboard";

const EditpostPage = () => {
  return (
    <>
      <MiniDrawer>
        <Navigations />
        <EditPost />
      </MiniDrawer>
    </>
  );
};

export default EditpostPage;
