import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <nav
      className="
      w-full z-50 bg-[#0f172a]
       border-b shadow-sm px-6 py-3 flex justify-between items-center md:fixed md:top-0
    "
    >
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <h1 className="text-lg font-bold text-blue-600">SocietyMS</h1>
      </div>

      <div>
        {!isLoggedIn ? (
          <button
            onClick={() => navigate("/login")}
            className="bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 text-sm"
          >
            Login
          </button>
        ) : (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1.5 rounded hover:bg-red-600 text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
