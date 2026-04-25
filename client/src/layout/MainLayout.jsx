import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white">
      <header className="h-16 border-b border-gray-800">
        <Navbar />
      </header>

      <main className="flex-1 flex">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
