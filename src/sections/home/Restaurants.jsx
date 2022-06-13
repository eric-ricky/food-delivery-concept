import React from "react";
import FeatureRestaurants from "../../components/FeatureRestaurants";
import { restaurants as toprated } from "../../dummy/data";

const Restaurants = () => {
  return (
    <>
      <FeatureRestaurants
        title="Top picks near you"
        restaurants={toprated}
        category="popular"
      />
      <FeatureRestaurants
        title="Top Rated"
        restaurants={toprated}
        category="toprated"
      />
      <FeatureRestaurants
        title="Top Rated"
        restaurants={toprated}
        category="others"
      />
    </>
  );
};

export default Restaurants;
