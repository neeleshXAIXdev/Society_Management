import { useEffect, useState } from "react";
import MainLayout from "../layout/MainLayout";
import { motion } from "framer-motion";
import API from "../api/axios.js";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  const { auth } = useAuth();

  useEffect(() => {
    if (auth.role) {
      switch (auth.role) {
        case "admin":
          navigate("/admin");
          break;
        case "resident":
          navigate("/resident");
          break;
        case "guard":
          navigate("/guard");
          break;
        default:
          navigate("/");
      }
    }
  }, [auth.role]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("v1/auth/login", formData);
      login(res.data);
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <MainLayout>
      <div className="flex justify-center items-center min-h-[80vh] w-full px-4">
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          onSubmit={handleLogin}
          className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-md space-y-5 shadow-2xl"
        >
          <h2 className="text-2xl font-bold text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome Back 👋
          </h2>

          <input
            type="email"
            placeholder="Email"
            name="email"
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            value={formData.password}
            onChange={handleChange}
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2.5 rounded-xl font-semibold text-white hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Login
          </button>
        </motion.form>
      </div>
    </MainLayout>
  );
};

export default Login;
