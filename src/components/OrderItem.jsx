import React, { useContext, useState } from "react";
import { BiMinus, BiPlus } from "react-icons/bi";
import { motion } from "framer-motion";
import { CartCtx } from "../context/cartContext";

const OrderItem = ({ item, setFlag, flag }) => {
  const {
    cart: { cartItems },
    addToCart,
  } = useContext(CartCtx);

  const [qty, setQty] = useState(item?.qty);

  const updateQty = (action, id) => {
    if (action === "add") {
      setQty((prev) => prev + 1);
      cartItems?.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.qty += 1;
        }
      });
      setFlag((prev) => prev + 1);
      return;
    }

    if (action === "remove") {
      if (qty === 1) {
        console.log("removing item");
        const items = cartItems.filter((item) => item.id !== id);
        addToCart({
          cartItems: items,
        });
        setFlag(flag + 1);
        return;
      }

      setQty((prev) => prev - 1);
      cartItems?.map((cartItem) => {
        if (cartItem.id === id) {
          cartItem.qty -= 1;
        }
      });
      setFlag((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full p-1 px-2 rounded-lg flex items-center gap-2">
      <img
        src={item?.image}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt=""
      />

      {/* name section */}
      <div className="flex flex-col gap-2">
        <p className="text-base text-black">{item?.name}</p>
        <p className="text-sm block text-gray-900 font-semibold">
          KES {parseFloat(item?.price) * qty}
        </p>
      </div>

      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer">
        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("remove", item?.id)}
        >
          <BiMinus className="text-gray-900 " />
        </motion.div>

        <p className="w-5 h-5 rounded-sm bg-gray text-gray-900 flex items-center justify-center">
          {qty}
        </p>

        <motion.div
          whileTap={{ scale: 0.75 }}
          onClick={() => updateQty("add", item?.id)}
        >
          <BiPlus className="text-gray-900 " />
        </motion.div>
      </div>
    </div>
  );
};

export default OrderItem;
