import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import DeliveryDetails from "../sections/checkout/DeliveryDetails";
import TopNav from "../sections/checkout/TopNav";
import OrderSummary from "../sections/checkout/OrderSummary";

const Checkout = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="w-full min-h-screen bg-white drop-shadow-md flex flex-col z-[101] overflow-y-scroll scrollbar-none"
    >
      <TopNav />
      <DeliveryDetails />
      <OrderSummary />
    </motion.div>
  );
};

export default Checkout;
