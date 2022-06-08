import React, { useState } from "react";
import { IoFastFood } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "../../components/RowContainer";
import { restaurants } from "../../dummy/data";

const TopRated = () => {
  const [filter, setFilter] = useState("chicken");
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = (value) => {
    setScrollValue((prev) => prev + value);
  };

  return (
    <section
      className="container mx-auto w-full pt-4 px-4 md:px-0 pb-16"
      id="categories"
    >
      <div className="w-full flex items-center justify-between mb-16">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100">
          Popular near you
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
                className=" bg-cardOverlay backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
              >
                <div class="bg-gray-200 rounded-lg max-h-48 lg:w-375 w-275 overflow-hidden ">
                  <img
                    src={n.img}
                    alt="Person using a pen to cross a task off a productivity paper card."
                    class="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
                <div className="flex align-center justify-between my-4 w-full p-4">
                  <p class="text-lg font-medium text-gray-900">{n.name}</p>
                  <h3 class="text-sm text-gray-700">4.9</h3>
                </div>
              </div>
            ))}
        </RowContainer>
      </div>
    </section>
  );
};

export default TopRated;
