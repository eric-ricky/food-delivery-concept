import React, { useContext, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import CartItem from "../../components/CartItem";
import OrderItem from "../../components/OrderItem";
import { CartCtx } from "../../context/cartContext";

const OrderSummary = () => {
  const router = useRouter();
  const {
    cart: { cartItems },
  } = useContext(CartCtx);
  const [flag, setFlag] = useState(0);
  const [tot, setTot] = useState(0);

  console.log(cartItems);

  return (
    <div className="container mx-auto pt-8 px-4">
      <h3 class="text-lg font-medium leading-6 text-gray-900">Order Summary</h3>

      {cartItems && cartItems.length > 0 && (
        <div className="lg:w-[50%] w-full  rounded-t-[2rem] flex flex-col justify-between overflow-y-scroll scrollbar-none pb-8">
          {/* cart Items section */}
          <div className="w-full max-h-1/2 rounded-t-[2rem] bg-slate-100 px-2 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
            {/* cart Item */}
            {cartItems &&
              cartItems.length > 0 &&
              cartItems.map((item) => (
                <OrderItem
                  key={item.id}
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                />
              ))}
          </div>

          <div className="pb-4">
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

              <hr className="w-full border-b border-gray-600  my-4" />
            </div>

            <div className="w-full flex items-center justify-between mb-4">
              <p className="text-gray-900 text-xl font-semibold">Total</p>
              <p className="text-gray-900 text-xl font-semibold">
                KES {tot + 39}
              </p>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg"
            onClick={() => router.push("/payment")}
          >
            Place Order
          </motion.button>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
