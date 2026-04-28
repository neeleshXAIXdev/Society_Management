import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      navigate("/login");
      return;
    }

    // Redirect based on role
    if (role === "admin") {
      navigate("/admin");
    } else if (role === "resident") {
      navigate("/resident");
    } else if (role === "guard") {
      navigate("/guard");
    } else {
      navigate("/login"); // fallback
    }
  };

  return (
    <section className="flex items-center justify-center h-[80vh] text-center px-6 bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Smart Society Management
        </motion.h1>

        <motion.p
          className="text-gray-300 mb-6 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Manage residents, visitors, complaints and security with one powerful
          SaaS platform.
        </motion.p>

        <motion.button
          onClick={handleGetStarted}
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded hover:opacity-90 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
