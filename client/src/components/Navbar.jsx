import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { auth, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav
      className="
      w-full z-50 bg-gray-900/80 backdrop-blur-md
      border-b border-gray-800 px-6 py-4 flex justify-between items-center
      md:fixed md:top-0
    "
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <h1 className="text-lg font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
          SocietyMS
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4">
        {!auth.token ? (
          <button
            onClick={() => navigate("/login")}
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded text-sm hover:opacity-90 transition"
          >
            Login
          </button>
        ) : (
          <>
            {/* Optional: show role */}
            {/* <span className="text-sm text-gray-300 capitalize">
              {auth.role}
            </span> */}

            <button
              onClick={handleLogout}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-1.5 rounded text-sm hover:opacity-90 transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
