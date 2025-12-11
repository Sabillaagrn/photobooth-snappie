import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// USER
import Start from "./pages/user/Start";
import TakePhoto from "./pages/user/TakeCamera";
import EditFrame from "./pages/user/EditFrame";
import UserLayout from "./layouts/userLayout";

// ADMIN
import Login from "./pages/admin/Login";
import ManageFrame from "./pages/admin/ManageFrame";
import ManageColour from "./pages/admin/ManageColour";
import Transaction from "./pages/admin/Transaction";
import AdminLayout from "./layouts/adminLayout";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ========= USER ========= */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Start />} />
          <Route path="take-photo" element={<TakePhoto />} />
          <Route path="edit-frame" element={<EditFrame />} />
        </Route>

        {/* ========= ADMIN LOGIN ========= */}
        <Route path="/admin" element={<Login />} />
        <Route path="/admin/login" element={<Login />} />

        {/* ========= ADMIN DASHBOARD (PAKAI LAYOUT) ========= */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route path="frame" element={<ManageFrame />} />
          <Route path="colour" element={<ManageColour />} />
          <Route path="transaction" element={<Transaction />} />
        </Route>

        {/* ========= REDIRECT ========= */}
        <Route path="/" element={<Navigate to="/user" />} />      
        <Route path="*" element={<Navigate to="/user" />} />


      </Routes>
    </BrowserRouter>
  );
}
