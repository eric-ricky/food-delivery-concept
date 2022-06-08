import React, { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";

import { IoFastFood } from "react-icons/io5";
import { BsPlusLg, BsDashLg } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import RowContainer from "../../components/RowContainer";

import { categories } from "../../dummy/data";
import { CartCtx } from "../../context/cartContext";

const Categories = ({ restaurant }) => {
  const dishes = restaurant?.dishes.map((dish) => ({ ...dish, qty: 1 }));
  const {
    cart: { cartItems },
    addToCart,
  } = useContext(CartCtx);
  const [filter, setFilter] = useState("meal");
  const [scrollValue, setScrollValue] = useState(0);

  const dishInCart = (dish) => {
    // return items.some((item) => item.id === dish.id);
    return cartItems.some((item) => item.id === dish.id);
  };

  return (
    <section
      className="container mx-auto  w-full pt-4 px-4 md:px-0 pb-16"
      id="categories"
    >
      <div className=" flex flex-col w-full pb-6 mx-auto">
        <div className="w-full flex items-center justify-center lg:gap-2 gap-4 pb-6 mx-auto">
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

        <div className="flex align-center justify-center flex-wrap lg:gap-8 gap-4 mt-16">
          {restaurant &&
            dishes?.map((dish) => (
              <div
                key={dish.id}
                className="w-32 lg:w-60 mb-4 bg-cardOverlay backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center drop-shadow-lg cursor-pointer"
              >
                <div
                  style={{
                    background: `url(${dish.image})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                  className="rounded-lg h-32 lg:h-48 w-full overflow-hidden "
                >
                  <div className="flex align-center justify-between absolute top-4 right-4 bg-white text-black text-base py-1 px-2 rounded-lg drop-shadow-lg">
                    {dishInCart(dish) ? (
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
                    ) : (
                      <BsPlusLg
                        onClick={() =>
                          addToCart({
                            restId: restaurant?.id,
                            cartItems: [...cartItems, dish],
                          })
                        }
                      />
                    )}
                  </div>
                </div>

                <div className="max-h-20 flex align-center justify-between flex-col my-4 w-full p-4">
                  <p className="lg:text-lg text-xs font-medium text-gray-900">
                    {dish.name}
                  </p>
                  <h3 className="text-sm text-gray-700">KES {dish.price}</h3>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
