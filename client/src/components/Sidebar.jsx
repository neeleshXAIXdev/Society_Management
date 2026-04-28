import { NavLink } from "react-router-dom";

const Sidebar = ({ menuItems }) => {
  return (
    <div className="flex justify-start items-center h-10 flex-row w-[95%] mt-3 rounded bg-gray-900 text-white text-xs">
      <ul className="p-2 flex gap-2">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.isParent || false}
              className={({ isActive }) =>
                `flex items-center gap-1 p-1.5 rounded cursor-pointer
                 hover:bg-gray-700 transition
                 ${isActive ? "bg-gray-700" : ""}`
              }
            >
              <Icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
