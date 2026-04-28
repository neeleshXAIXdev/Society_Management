import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateUser from "./pages/admin/CreateUser";
import Complaints from "./pages/admin/Complaints";
import AdminMain from "./pages/AdminMain";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ResidentDashboard from "./pages/resident/ResidentDashboard";
import ResidentMain from "./pages/ResidentMain";
import GuardMain from "./pages/GuardMain";
import GuardDashboard from "./pages/guard/GuardDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminMain />
            </ProtectedRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="complaints" element={<Complaints />} />
        </Route>

        <Route
          path="/resident"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <ResidentMain />
            </ProtectedRoute>
          }
        >
          <Route index element={<ResidentDashboard />} />
        </Route>

        <Route
          path="/guard"
          element={
            <ProtectedRoute allowedRoles={["guard"]}>
              <GuardMain />
            </ProtectedRoute>
          }
        >
          <Route index element={<GuardDashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
