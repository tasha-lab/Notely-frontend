import { Route, Routes } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import "./App.css";
import SignupPage from "./Pages/SignupPage";
import LoginPage from "./Pages/LoginPage";
import { ToastContainer } from "react-toastify";
import ProfilePage from "./Pages/ProfilePage";
import AddNotesPage from "./Pages/AddNotesPage";
import AllNotesPage from "./Pages/allNotesPage";
import EditpostPage from "./Pages/EditpostPage";
import ViewNotes from "./Pages/ViewNotesPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/my-notes" element={<AllNotesPage />} />
        <Route path="/new-note" element={<AddNotesPage />} />
        <Route path="/edit-a-post/:id" element={<EditpostPage />} />
        <Route path="/note/:id" element={<ViewNotes />} />
      </Routes>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </>
  );
};

export default App;
