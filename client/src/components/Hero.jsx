import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-gray-100 flex items-center justify-center h-[90vh] text-center px-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Smart Society Management
        </h1>

        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Manage residents, visitors, complaints and security with one powerful
          SaaS platform.
        </p>

        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
