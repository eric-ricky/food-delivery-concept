import React from "react";
import { motion } from "framer-motion";
import TopNav from "../sections/payment/TopNav";

const Payment = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className="w-full min-h-screen bg-white drop-shadow-md flex flex-col z-[101] bg-gray-100 overflow-y-scroll scrollbar-none"
    >
      <TopNav />
    </motion.div>
  );
};

export default Payment;
