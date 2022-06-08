import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";

const TopNav = () => {
  const router = useRouter();
  return (
    <div className="fixed w-full flex items-center bg-white justify-between lg:px-16 lg:p-6 px-4 py-2 cursor-pointer rounded-b-[2rem] shadow">
      <motion.div
        whileTap={{ scale: 0.75 }}
        onClick={() => router.push(router.query.returnUrl || "/")}
      >
        <MdOutlineKeyboardBackspace className="text-textColor text-4xl" />
      </motion.div>

      <p className="flex-1 text-center text-textColor text-2xl font-semibold">
        Checkout
      </p>

      <motion.p
        whileTap={{ scale: 0.75 }}
        className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor "
      >
        <BsQuestionCircle className="text-xl" />
      </motion.p>
    </div>
  );
};

export default TopNav;
