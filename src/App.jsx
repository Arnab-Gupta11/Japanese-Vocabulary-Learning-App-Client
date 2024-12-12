import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserLoayout from "./layout/UserLoayout";
import AdminLayout from "./layout/AdminLayout";
import PublicLayout from "./layout/PublicLayout";
import { ThemeProvider } from "./contexts/theme-context";
// import Dashboard from "./pages/Admin/Dashboard";
import ManageUser from "./pages/Admin/ManageUser/ManageUser";
import AddLesson from "./pages/Admin/AddLesson/AddLesson";
import ManageLesson from "./pages/Admin/ManageLesson/ManageLesson";
import AddVocabularies from "./pages/Admin/AddVocabularies/AddVocabularies";
import ManageVocabularies from "./pages/Admin/ManageVocabularies/ManageVocabularies";
import { Toaster } from "react-hot-toast";
import UpadateLesson from "./pages/Admin/ManageLesson/UpadateLesson";
import UpdateVocabulary from "./pages/Admin/ManageVocabularies/UpdateVocabulary";
import Lessons from "./pages/Admin/ManageLesson/ManageLesson";
import Home from "./pages/User/Home";
import Tutorials from "./pages/User/Tutorials";
import ViewLesson from "./pages/User/ViewLesson";

function App() {
  return (
    <div className="font-Work-Sans">
      <ThemeProvider storageKey="theme">
        <Toaster position="top-right" reverseOrder={false} />
        <BrowserRouter>
          <Routes>
            <Route element={<UserLoayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/lessons/:lessonNo" element={<ViewLesson />} />
              <Route path="/tutorials" element={<Tutorials />} />
            </Route>
            <Route path="/admin" element={<AdminLayout />}>
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              <Route path="manage-users" element={<ManageUser />} />
              <Route path="lessons" element={<Lessons />} />
              <Route path="add-lesson" element={<AddLesson />} />
              <Route path="manage-lesson" element={<ManageLesson />} />
              <Route path="manage-lesson/:lessonId" element={<UpadateLesson />} />
              <Route path="add-vocabularies" element={<AddVocabularies />} />
              <Route path="manage-vocabularies" element={<ManageVocabularies />} />
              <Route path="manage-vocabularies/:id" element={<UpdateVocabulary />} />
            </Route>
            <Route path="/" element={<PublicLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
