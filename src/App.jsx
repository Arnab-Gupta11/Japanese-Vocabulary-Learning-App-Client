import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserLoayout from "./layout/UserLoayout";
import AdminLayout from "./layout/AdminLayout";
import PublicLayout from "./layout/PublicLayout";
import Lesson from "./pages/User/Lesson";
import { ThemeProvider } from "./contexts/theme-context";
import Dashboard from "./pages/Admin/Dashboard";
import ManageUser from "./pages/Admin/ManageUser/ManageUser";
import Lessons from "./pages/Admin/Lessons/Lessons";
import AddLesson from "./pages/Admin/AddLesson/AddLesson";
import ManageLesson from "./pages/Admin/ManageLesson/ManageLesson";
import AddVocabularies from "./pages/Admin/AddVocabularies/AddVocabularies";
import ManageVocabularies from "./pages/Admin/ManageVocabularies/ManageVocabularies";
import Home from "./pages/User/Home";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <ThemeProvider storageKey="theme">
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<UserLoayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/lessons" element={<Lesson />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="manage-users" element={<ManageUser />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="add-lesson" element={<AddLesson />} />
              <Route path="manage-lesson" element={<ManageLesson />} />
              <Route path="add-vocabularies" element={<AddVocabularies />} />
              <Route path="manage-vocabularies" element={<ManageVocabularies />} />
            </Route>
            <Route path="/" element={<PublicLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
