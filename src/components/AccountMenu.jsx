import React, { useContext } from "react";
import { useRouter } from "next/router";
import {
  MdOutlineAccountCircle,
  MdOutlineSettings,
  MdLogout,
  MdFastfood,
} from "react-icons/md";
import { AuthContext } from "../context/authContext";

const AccountMenu = ({ user }) => {
  const router = useRouter();
  const { onLogout } = useContext(AuthContext);

  return (
    <div className="mw-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-12 pt-2 right-0">
      {!!user && (
        <>
          <div className="flex flex-col items-center  px-4 py-3">
            <p className="text-orange-500  text-sm">{user?.email}</p>
            <span className="pb-2 text-sm">{user?.username}</span>
          </div>
          <hr className="mb-2" />

          <div className="flex flex-col  py-2 gap-2 ">
            <p
              onClick={() => router.push("/user/account")}
              className="flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out px-4 py-2 text-textColor text-base"
            >
              <MdOutlineAccountCircle />
              Account
            </p>
            <p
              onClick={() => router.push("/user/orders")}
              className="flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out px-4 py-2 text-textColor text-base"
            >
              <MdFastfood />
              My Orders
            </p>
            <p
              onClick={() => router.push("/user/settings")}
              className="flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out px-4 py-2 text-textColor text-base"
            >
              <MdOutlineSettings />
              Settings
            </p>
          </div>
        </>
      )}

      {!!user ? (
        <button
          className="rounded-b-lg flex items-center gap-3 cursor-pointer hover:bg-orange-200 bg-orange-400 transition-all duration-100 ease-in-out px-4 py-2 mt-2 text-white text-base"
          onClick={onLogout}
        >
          <MdLogout />
          Logout
        </button>
      ) : (
        <button
          className="rounded-lg flex items-center gap-3 cursor-pointer hover:bg-orange-200 bg-orange-400 transition-all duration-100 ease-in-out px-4 py-2 mt-0 text-white text-base"
          onClick={() => router.push("/auth/login")}
        >
          <MdLogout />
          Login
        </button>
      )}
    </div>
  );
};

export default AccountMenu;
