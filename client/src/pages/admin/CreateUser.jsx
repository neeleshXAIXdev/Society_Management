import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import API from "../../api/axios";

const CreateUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    flat: "",
    profilePhoto: "",
  });

  // const [roles, setRoles] = useState([]);
  // const [flats, setFlats] = useState([]);

  // 🔥 Fetch roles & flats
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const roleRes = await API.get("/v1/roles");
  //       const flatRes = await API.get("/v1/flats");

  //       setRoles(roleRes.data);
  //       setFlats(flatRes.data);
  //     } catch (err) {
  //       console.error(err);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("v1/auth/createUser", formData);

      alert("User created successfully");

      // reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        role: "",
        flat: "",
        profilePhoto: "",
      });
    } catch (err) {
      console.error(err);
      alert("Error creating user");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] px-4">
      <motion.form
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/10 p-8 rounded-3xl w-full max-w-lg space-y-5 shadow-2xl"
      >
        <h2 className="text-2xl font-bold text-center text-white">
          Create User
        </h2>

        {/* Name */}
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
        />

        {/* Role */}
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
        >
          <option value="">Select Role</option> {/* ✅ IMPORTANT */}
          <option value="69e9c82ddb1aa37d2bd7966a">Resident</option>
          <option value="69e9c82ddb1aa37d2bd7966b">Security Guard</option>
        </select>

        {/* Flat */}
        <input
          type="text"
          name="flat"
          placeholder="Enter flat number"
          value={formData.flat}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
        />

        {/* Profile Photo */}
        <input
          type="text"
          name="profilePhoto"
          placeholder="Profile Photo URL"
          value={formData.profilePhoto}
          onChange={handleChange}
          className="w-full p-3 rounded-xl bg-white/5 border border-white/20 text-white"
        />

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2.5 rounded-xl font-semibold text-white hover:scale-105 transition"
        >
          Create User
        </button>
      </motion.form>
    </div>
  );
};

export default CreateUser;
