import Navigations from "../Components/Common/PageNavigations";
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
