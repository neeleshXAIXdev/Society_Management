const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-gray-900/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto py-6 px-4 text-center text-gray-400">
        <h2 className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-white bg-clip-text text-transparent">
          Society Management
        </h2>

        <p className="text-sm">
          Built with <span className="text-pink-400">❤️</span> using MERN
        </p>

        <p className="text-xs mt-2 text-gray-500">© 2026 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
