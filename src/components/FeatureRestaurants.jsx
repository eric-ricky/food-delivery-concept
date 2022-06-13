import { useRouter } from "next/router";
import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "./RowContainer";

const FeatureRestaurants = ({ title, restaurants, category }) => {
  const router = useRouter();
  const [filter, setFilter] = useState("chicken");
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = (value) => {
    setScrollValue((prev) => prev + value);
  };

  return (
    <section
      className="container mx-auto w-full pt-4 px-4 md:px-0 pb-4"
      id={category}
    >
      <div className="w-full flex items-center justify-between mb-4">
        <p className="text-2xl font-bold  text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-0.5 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          {title}
        </p>

        <div className="hidden md:flex gap-3 items-center">
          <div
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer  hover:shadow-lg flex items-center justify-center"
            onClick={() => handleScroll(-200)}
          >
            <MdChevronLeft className="text-lg text-white" />
          </div>
          <div
            className="w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
            onClick={() => handleScroll(200)}
          >
            <MdChevronRight className="text-lg text-white" />
          </div>
        </div>
      </div>

      <div className="flex align-center justify-center">
        <RowContainer scrollValue={scrollValue}>
          {restaurants &&
            restaurants.map((n) => (
              <div
                key={n.id}
                className=" bg-cardOverlay backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center drop-shadow-lg cursor-pointer"
                onClick={() =>
                  router.push({
                    pathname: "/single-restaurant",
                    query: {
                      image: n.img,
                      restId: n.id,
                    },
                  })
                }
              >
                <div className="bg-gray-200 rounded-lg max-h-48 lg:w-375 w-225 overflow-hidden ">
                  <img
                    src={n.img}
                    alt="Person using a pen to cross a task off a productivity paper card."
                    className="w-full h-full object-center object-cover hover:opacity-75"
                  />
                </div>
                <div className="flex align-center justify-between my-4 w-full p-4">
                  <p className="text-lg font-medium text-gray-900">{n.name}</p>
                  <h3 className="text-sm text-gray-700">4.9</h3>
                </div>
              </div>
            ))}
        </RowContainer>
      </div>
    </section>
  );
};

export default FeatureRestaurants;
