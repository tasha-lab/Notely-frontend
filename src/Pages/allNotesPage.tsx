import AllNotes from "../Components/MyNotes/allNotes";
import MiniDrawer from "../Components/Profile/Dashboard";

const AllNotesPage = () => {
  return (
    <>
      <MiniDrawer>
        <AllNotes />
      </MiniDrawer>
    </>
  );
};

export default AllNotesPage;
