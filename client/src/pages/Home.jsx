import Hero from "../components/Hero";
import MainLayout from "../layout/MainLayout";

const Home = () => {
  return (
    <MainLayout>
      <div className=" w-full">
        <Hero />
      </div>
    </MainLayout>
  );
};

export default Home;
