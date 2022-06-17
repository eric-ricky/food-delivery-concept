import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { IoFastFood } from "react-icons/io5";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import RowContainer from "../../components/RowContainer";

import { categories } from "../../dummy/data";
import { CartCtx } from "../../context/cartContext";

const Menu = ({ restaurant }) => {
  const dishes = restaurant?.dishes.map((dish) => ({ ...dish, qty: 1 }));
  const {
    cart: { cartItems },
    addToCart,
  } = useContext(CartCtx);
  const [filter, setFilter] = useState("meal");
  const [scrollValue, setScrollValue] = useState(0);

  const dishInCart = (dish) => cartItems.some((item) => item.id === dish.id);

  return (
    <section
      className="container mx-auto  w-full pt-4 px-4 md:px-0 pb-16"
      id="categories"
    >
      <div className=" flex flex-col w-full pb-6 mx-auto">
        <div className="w-full flex items-center justify-center lg:gap-2 gap-4 pb-6 mx-auto mb-8">
          <RowContainer scrollValue={scrollValue}>
            {categories &&
              categories.map((category) => (
                <div
                  key={category.id}
                  className={`group ${
                    filter === category.urlParamName
                      ? "bg-cartNumBg"
                      : "bg-card"
                  } w-[94px] min-w-fit p-2 h-auto cursor-pointer rounded-lg drop-shadow-xl flex items-center justify-center hover:bg-cartNumBg `}
                  onClick={() => setFilter(category.urlParamName)}
                >
                  <p
                    className={`text-sm ${
                      filter === category.urlParamName
                        ? "text-white"
                        : "text-textColor"
                    } group-hover:text-white`}
                  >
                    {category.name}
                  </p>
                </div>
              ))}
          </RowContainer>
        </div>

        <div className="flex flex-wrap gap-4 align-center w-full bg-yellow-0 justify-between">
          {restaurant &&
            dishes?.map((dish) => (
              <div
                key={dish.id}
                className="flex w-full bg-green-50 lg:w-[32%] shadow-sm rounded-sm mb-8 relative align-center"
              >
                <div className="min-h-32 w-full p-4">
                  <p className="lg:text-lg text-lg font-medium text-gray-900">
                    {dish.name} {dish.name}
                  </p>
                  <h3 className="text-sm text-gray-700 mb-10">
                    KES {dish.price}
                  </h3>
                </div>

                <div className="flex align-center justify-between absolute bottom-4 left-4 bg-black text-white text-base py-1 px-2 rounded-lg drop-shadow-lg cursor-pointer">
                  {dishInCart(dish) ? (
                    <div className="flex align-center gap-2">
                      <AiFillDelete
                        onClick={() => {
                          const items = cartItems.filter(
                            (item) => item.id !== dish.id
                          );
                          addToCart({
                            restId: restaurant?.id,
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
                            restId: restaurant?.id,
                            cartItems: [...cartItems, dish],
                          })
                        }
                      />
                      <p className="-mt-[3px]">Add</p>
                    </div>
                  )}
                </div>

                <div
                  style={{
                    background: `url(${dish.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="h-32 lg:h-32 w-[200px] overflow-hidden relative my-auto "
                ></div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
