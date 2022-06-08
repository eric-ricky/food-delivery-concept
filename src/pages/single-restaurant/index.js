import React from "react";
import { useRouter } from "next/router";
import { restaurants } from "../../dummy/data";
import MainLayout from "../../layout/MainLayout";
import Categories from "../../sections/home/Categories";
import Hero from "../../sections/single-restaurant/Hero";

const SingleRestaurant = () => {
  const router = useRouter();
  const { restId } = router.query;
  const restaurant = restaurants.filter((rest) => rest.id === +restId)[0];

  return (
    <MainLayout>
      <Hero restaurant={restaurant} />
      <main className="mt-4">
        <Categories restaurant={restaurant} />
      </main>
    </MainLayout>
  );
};

export default SingleRestaurant;
