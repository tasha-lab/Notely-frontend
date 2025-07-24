import EditPost from "../Components/EditNote/EditNote";
import Navigations from "../Components/Common/navigations";
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
