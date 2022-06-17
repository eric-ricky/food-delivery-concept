import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { IoFastFood } from "react-icons/io5";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";

import { CartCtx } from "../../context/cartContext";

import { restaurants } from "../../dummy/data";

const SpecialMenu = () => {
  const dishes = restaurants[0]?.dishes.map((dish) => ({ ...dish, qty: 1 }));

  const {
    cart: { cartItems },
    addToCart,
  } = useContext(CartCtx);
  const [filter, setFilter] = useState("meal");
  const [scrollValue, setScrollValue] = useState(0);

  const dishInCart = (dish) => cartItems.some((item) => item.id === dish.id);

  return (
    <section className="container mx-auto w-full pt-2 px-4 md:px-0 mb-8">
      <div className="w-full flex items-center justify-between mb-4">
        <h3 className="text-[22px] font-[600] text-black ">Our Special Menu</h3>
      </div>

      <div className="flex flex-wrap gap-4 align-center w-full bg-yellow-0 justify-between">
        {restaurants &&
          dishes?.map((dish) => (
            <div
              key={dish.id}
              className="flex w-full bg-green-50 lg:w-[32%] shadow-sm rounded-sm mb-8 align-center"
            >
              <div
                style={{
                  background: `url(${dish.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="bg-gray-200 h-32 lg:h-32 w-[200px] overflow-hidden relative my-auto "
              ></div>

              <div className="min-h-32 w-full p-4 relative">
                <p className="lg:text-lg text-lg font-medium text-gray-900">
                  {dish.name} {dish.name}
                </p>
                <h3 className="text-sm text-gray-700 mb-10">
                  KES {dish.price}
                </h3>

                <div className="flex align-center justify-between absolute bottom-4 left-4 bg-black text-white text-base py-1 px-2 rounded-lg drop-shadow-lg cursor-pointer">
                  {dishInCart(dish) ? (
                    <div className="flex align-center gap-2">
                      <AiFillDelete
                        onClick={() => {
                          const items = cartItems.filter(
                            (item) => item.id !== dish.id
                          );
                          addToCart({
                            restId: restaurants[0]?.id,
                            cartItems: items,
                          });
                        }}
                        style={{
                          marginTop: "0.1rem",
                        }}
                      />
                      <p className="-mt-[3px]">Remove</p>
                    </div>
                  ) : (
                    <div className="flex align-center gap-2">
                      <BsPlusLg
                        onClick={() =>
                          addToCart({
                            restId: restaurants[0]?.id,
                            cartItems: [...cartItems, dish],
                          })
                        }
                      />
                      <p className="-mt-[3px]">Add</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* 
    <RowContainer scrollValue={0} styles="gap-4">
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
            <div className="bg-gray-200 rounded-sm h-32 lg:h-32 w-[275px] drop-shadow-lg overflow-hidden  relative">
              <img
                src={restaurant.img}
                alt="Person using a pen to cross a task off a productivity paper card."
                className="w-full h-full object-center object-cover hover:opacity-75 bg-cover"
              />
              <p className="bg-green-400 text-white absolute top-2 left-0 px-2 rounded-t-r-lg">
                promotion
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
    </RowContainer> */}
    </section>
  );
};

export default SpecialMenu;
