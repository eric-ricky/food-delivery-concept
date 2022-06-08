import MainLayout from "../layout/MainLayout";

import Hero from "../sections/home/Hero";
import Restaurants from "../sections/home/Restaurants";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <Restaurants />
      </MainLayout>
    </>
  );
};

export default Home;
