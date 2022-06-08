import React from "react";
import { BiPlus } from "react-icons/bi";
import { FaUserEdit } from "react-icons/fa";

import MainLayout from "../../layout/MainLayout";

const Account = () => {
  return (
    <MainLayout>
      <section className="container mx-auto w-full pt-32 px-4 md:px-0 mb-10">
        <div className="flex align-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="user"
            className="rounded-full w-14 h-14 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer"
          />

          <div className="flex -mt-2 align-center flex-col ">
            <h3 className="lg:text-[2.5rem] text-[2rem] font-medium text-[#2a2b3c]">
              James Kyalo
            </h3>
            <p className="lg:text-xl text-lg text-[#989594] ">
              james@gmail.com
            </p>
            <p className=" flex align-center justify-center w-fit rounded-lg hover:shadow-lg transition-all ease-in-out text-black mt-4 cursor-pointer">
              <FaUserEdit className="text-xl text-black font-medium mr-2" />{" "}
              Edit
            </p>
          </div>
        </div>

        <div className="bg-orange-100 lg:w-[50%] min-h-[130px] flex justify-between align-center py-4 lg:px-[10px] px-4 rounded-md lg:flex-row flex-col mt-16">
          <div className="flex flex-1 align-center flex-col justify-center lg:p-8 p-2">
            <p className="text-lg text-[#989594]">Wallet</p>
            <p className="text-[2.5rem] font-lg text-[#123456] my-2 ">
              KES 0.00
            </p>
          </div>
        </div>

        <div className="bg-green-100 lg:w-[50%] min-h-[130px] flex justify-between align-center py-4 lg:px-[10px] px-4 rounded-md lg:flex-row flex-col mt-16">
          <div className="flex flex-1 align-center flex-col justify-center lg:px-8 p-4">
            <p className="text-lg text-[#989594]">Payment Methods</p>
            <p className="text-[2.5rem] font-lg text-[#123456] my-2 flex gap-8 ">
              <span>Mpesa</span>
              <span>Cash</span>
            </p>
            <p className=" flex align-center justify-center w-fit rounded-lg hover:shadow-lg transition-all ease-in-out text-black mt-4 cursor-pointer">
              <BiPlus className="text-xl text-black font-medium" /> Add payment
              method
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Account;
