import React from "react";
import { motion } from "framer-motion";
import { BiTime } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";

const DeliveryDetails = () => {
  return (
    <div className="container mx-auto lg:pt-32 pt-24 px-4">
      <h3 className="text-lg font-medium leading-6 text-gray-900 my-4 ">
        Delivery Details
      </h3>

      <div className="flex align-center gap-4">
        <motion.div whileTap={{ scale: 0.75 }}>
          <BiTime className="text-textColor text-2xl" />
        </motion.div>

        <p className="lg:text-lg text-base text-[#113444] ">
          Delivery / as soon as possible
        </p>
      </div>

      <div className="flex align-center gap-4">
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdLocationOn className="text-textColor text-2xl" />
        </motion.div>
        <p className="lg:text-lg text-base text-[#113444] ">
          V2W7+8V9, Near Do's Office, Off Jkuat Entry Road, Juja
        </p>
      </div>
    </div>
  );
};

export default DeliveryDetails;
