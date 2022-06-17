import MainLayout from "../layout/MainLayout";
import Categories from "../sections/home/Categories";

import Hero from "../sections/home/Hero";
import Recommended from "../sections/home/Recommended";
import SpecialMenu from "../sections/home/SpecialMenu";
import TopPicks from "../sections/home/TopPicks";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Categories />
        <Hero />
        <TopPicks />
        <SpecialMenu />
        <Recommended />
      </MainLayout>
    </>
  );
};

export default Home;
