import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ResidentDashboard from "./pages/ResidentDashboard";
import GuardDashboard from "./pages/GuardDashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import CreateUser from "./pages/admin/CreateUser";
import Complaints from "./pages/admin/Complaints";
import AdminMain from "./pages/AdminMain";
import Dashboard from "./pages/admin/Dashboard";

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
          <Route index element={<Dashboard />} />
          <Route path="create-user" element={<CreateUser />} />
          <Route path="complaints" element={<Complaints />} />
        </Route>

        {/* <Route
          path="/resident-dashboard"
          element={
            <ProtectedRoute allowedRoles={["resident"]}>
              <ResidentDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/security-dashboard"
          element={
            <ProtectedRoute allowedRoles={["security_guard"]}>
              <GuardDashboard />
            </ProtectedRoute>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
