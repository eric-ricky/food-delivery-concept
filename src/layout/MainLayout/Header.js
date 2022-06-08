import React, { useContext, useState } from "react";
import Link from "next/link";
import { MdShoppingBasket, MdOutlineAccountCircle } from "react-icons/md";
import { motion } from "framer-motion";

import Logo from "../../assets/Logo";
import { CartCtx } from "../../context/cartContext";
import AccountMenu from "../../components/AccountMenu";
import SearchBar from "./SearchBar";
import { AuthContext } from "../../context/authContext";

const Header = () => {
  const { cartShow, showCart, hideCart, cart } = useContext(CartCtx);
  const [showMenu, setShowMenu] = useState(false);
  const { user } = useContext(AuthContext);

  return (
    <header className="fixed w-screen z-50 md:p-6 md:px-16 px-4 p-3 bg-white">
      {/* desktop and tablet */}
      <div className="container mx-auto hidden md:flex w-full h-full items-center justify-between gap-8">
        <Logo />

        <div className="w-[50%] mx-auto">
          <SearchBar />
        </div>
        {/* <div className="flex flex-1 items-center justify-between gap-8 bg-green-700"> */}
        <div className="flex align-center justify-between gap-16">
          <div
            className="relative flex items-center justify-center cursor-pointer drop-shadow-[0_20px_20px_rgba(0,0,0,0.45)]"
            onClick={() => {
              cartShow ? hideCart() : showCart();
            }}
          >
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            {cart?.cartItems && cart?.cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cart?.cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            {user ? (
              <>
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                  alt="user"
                  className="rounded-full w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-[0_18px_15px_rgba(0,0,0,0.25)] cursor-pointer"
                  onClick={() => setShowMenu((prev) => !prev)}
                />

                {showMenu && <AccountMenu user={user} />}
              </>
            ) : (
              <>
                <MdOutlineAccountCircle
                  className="rounded-full w-10 h-10 min-w-[40px] min-h-[40px] drop-shadow-xl cursor-pointer"
                  onClick={() => setShowMenu((prev) => !prev)}
                />

                {showMenu && <AccountMenu user={null} />}
              </>
            )}
          </div>
        </div>
        {/* </div> */}
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full items-center justify-between">
        <Logo />

        <div className="flex items-center justify-center gap-8">
          <div
            className="relative flex items-center justify-center cursor-pointer"
            onClick={showCart}
          >
            <MdShoppingBasket className="text-textColor text-2xl ml-8 cursor-pointer" />
            {cart?.cartItems && cart?.cartItems.length > 0 && (
              <div className=" absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
                <p className="text-xs text-white font-semibold">
                  {cart?.cartItems.length}
                </p>
              </div>
            )}
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="user"
              className="rounded-full w-10 h-10 min-w-[40px] min-h-[40px] cursor-pointer drop-shadow-[0_18px_15px_rgba(0,0,0,0.25)]"
              onClick={() => setShowMenu((prev) => !prev)}
            />
            {showMenu && (
              <AccountMenu
                user={{ email: "james@gmail.com", username: "James Kyalo" }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
