import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { RiRefreshFill } from "react-icons/ri";

import { motion } from "framer-motion";

import EmptyCart from "../assets/img/emptyCart.svg";
import { CartCtx } from "../context/cartContext";
import CartItem from "./CartItem";
import { AuthContext } from "../context/authContext";

const CartContainer = () => {
  const { user } = useContext(AuthContext);
  const {
    cart: { cartItems },
    hideCart,
    clearCart,
  } = useContext(CartCtx);

  const router = useRouter();
  const [flag, setFlag] = useState(1);
  const [tot, setTot] = useState(0);

  useEffect(() => {
    let totalPrice = cartItems.reduce(
      (acc, item) => acc + item.qty * item.price,
      0
    );
    console.log(totalPrice);
    setTot(totalPrice);
  }, [flag]);

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="fixed top-0 right-0 w-full md:w-375 h-screen bg-white drop-shadow-md flex flex-col z-[101]"
    >
      <div className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.div whileTap={{ scale: 0.75 }} onClick={hideCart}>
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.div>
        <p className="text-textColor text-lg font-semibold">Cart</p>

        <motion.p
          whileTap={{ scale: 0.75 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base"
          onClick={clearCart}
        >
          Clear <RiRefreshFill />
        </motion.p>
      </div>

      {cartItems && cartItems.length > 0 ? (
        <div className="w-full h-full bg-slate-100 rounded-t-[2rem] flex flex-col justify-between overflow-y-scroll scrollbar-none">
          {/* cart Items section */}
          <div className="w-full rounded-t-[2rem] bg-slate-100 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <CartItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          {/* cart total section */}
          <div className="w-full bg-[#123456] rounded-t-[2rem] flex flex-col items-center justify-evenly p-8">
            <div className="flex flex-col justify-between align-center w-full">
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Sub Total</p>
                <p className="text-gray-400 text-lg">
                  KES
                  {tot}
                </p>
              </div>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-lg">Delivery</p>
                <p className="text-gray-400 text-lg">KES 39</p>
              </div>

              <hr className="w-full border-b border-gray-600  my-8" />
            </div>

            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-gray-200 text-xl font-semibold">Total</p>
              <p className="text-gray-200 text-xl font-semibold">
                KES {tot + 39}
              </p>
            </div>

            {user ? (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={() => {
                  hideCart();
                  router.push({
                    pathname: "/checkout",
                    query: { returnUrl: router.asPath },
                  });
                }}
              >
                Check Out
              </motion.button>
            ) : (
              <motion.button
                whileTap={{ scale: 0.8 }}
                type="button"
                className="w-full p-2 rounded-lg bg-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={() => {
                  hideCart();
                  router.push({
                    pathname: "/auth/login",
                    query: { returnUrl: router.asPath },
                  });
                }}
              >
                Login to check out
              </motion.button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center gap-6">
          <img src={EmptyCart} className="w-300" alt="" />
          <p className="text-xl text-textColor font-semibold">
            Add some items to your cart
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default CartContainer;
