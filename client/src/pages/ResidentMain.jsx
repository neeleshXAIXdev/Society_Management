import { Home } from "lucide-react";
import MainLayout from "../layout/MainLayout";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const ResidentMain = () => {
  const menuItems = [
    {
      id: 1,
      label: "Dashboard",
      icon: Home,
      path: "/resident",
      isParent: true,
    },
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

export default ResidentMain;
