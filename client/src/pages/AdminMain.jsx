import { Home, User, FileText } from "lucide-react";
import MainLayout from "../layout/MainLayout";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AdminMain = () => {
  const menuItems = [
    { id: 1, label: "Dashboard", icon: Home, path: "/admin" },
    { id: 2, label: "Create User", icon: User, path: "/admin/create-user" },
    { id: 3, label: "Complaints", icon: FileText, path: "/admin/complaints" },
  ];
  return (
    <MainLayout>
      <div className="flex justify-center items-center h-full flex-col w-full">
        <Sidebar menuItems={menuItems} />
        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminMain;
