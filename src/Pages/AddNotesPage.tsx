import WritingNotes from "../Components/AddingNotes/WritingNotes";
import MiniDrawer from "../Components/Profile/Dashboard";

const AddNotesPage = () => {
  return (
    <div>
      <MiniDrawer>
        <WritingNotes />
      </MiniDrawer>
    </div>
  );
};

export default AddNotesPage;
