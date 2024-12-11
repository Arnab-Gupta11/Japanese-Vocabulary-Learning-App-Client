import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserLoayout from "./layout/UserLoayout";
import AdminLayout from "./layout/AdminLayout";
import PublicLayout from "./layout/PublicLayout";
import Admin from "./pages/Admin";
import Lesson from "./pages/User/Lesson";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<UserLoayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/lessons" element={<Lesson />} />
          </Route>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Admin />} />
          </Route>
          <Route path="/" element={<PublicLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
