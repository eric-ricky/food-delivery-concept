import React, { useState } from "react";
import { useRouter } from "next/router";
import { IoFastFood } from "react-icons/io5";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import RowContainer from "../../components/RowContainer";

import { restaurants as toppicks } from "../../dummy/data";

const restaurants = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "name restaurant",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "name restaurant",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "name restaurant",
  },
  {
    id: 4,
    img: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    name: "name restaurant",
  },
];

const TopPicks = () => {
  const router = useRouter();

  const [filter, setFilter] = useState("chicken");
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = (value) => {
    setScrollValue((prev) => prev + value);
  };

  return (
    <section className="container mx-auto w-full pt-2 px-4 md:px-0 mb-8">
      <div className="w-full flex items-center justify-between mb-4">
        <h3 className="text-[22px] font-[600] text-black ">
          Top picks in your area
        </h3>

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

      <RowContainer scrollValue={scrollValue} styles="gap-4">
        {toppicks &&
          toppicks.map((restaurant) => (
            <div
              key={restaurant.id}
              className="rounded-sm flex flex-col items-center justify-center  cursor-pointer bg-green-0"
              onClick={() =>
                router.push({
                  pathname: "/single-restaurant",
                  query: {
                    image: restaurant.img,
                    restId: restaurant.id,
                  },
                })
              }
            >
              <div className="rounded-sm h-32 lg:h-32 w-[275px] drop-shadow-lg overflow-hidden bg-orange-500 relative">
                <img
                  src={restaurant.img}
                  alt="Person using a pen to cross a task off a productivity paper card."
                  className="w-full h-full object-center object-cover hover:opacity-75 bg-cover"
                />
                <p
                  // style={{
                  //   background: `${!true ? "green" : "red"}`,
                  // }}
                  className={`${
                    true ? "bg-green-400" : "bg-red-400"
                  } text-white absolute top-2 left-0 px-2 rounded-t-r-lg`}
                >
                  {true ? "open" : "closed"}
                </p>
              </div>
              <div className="flex align-center justify-between p-2 w-full">
                <div className="flex-1">
                  <p className="text-lg font-bold text-gray-900">
                    {restaurant.name}
                  </p>
                  <p>Kes40 Fee.30-20min</p>
                </div>
                <span className="text-sm text-gray-700 bg-lime-100 rounded-full w-100 h-fit p-[4px]">
                  4.9
                </span>
              </div>
            </div>
          ))}
      </RowContainer>
    </section>
  );
};

export default TopPicks;
