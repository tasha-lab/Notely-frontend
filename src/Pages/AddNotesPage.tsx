import WritingNotes from "../Components/AddingNotes/WritingNotes";
import Navigations from "../Components/Common/PageNavigations";

import MiniDrawer from "../Components/Profile/Dashboard";

const AddNotesPage = () => {
  return (
    <div>
      <MiniDrawer>
        <Navigations />
        <WritingNotes />
      </MiniDrawer>
    </div>
  );
};

export default AddNotesPage;
