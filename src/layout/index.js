import React, { useContext } from "react";
import CartContainer from "../components/CartContainer";
import { CartCtx } from "../context/cartContext";

const Layout = ({ children }) => {
  const { cartShow } = useContext(CartCtx);
  return (
    <>
      {children}
      {cartShow && <CartContainer />}
    </>
  );
};

export default Layout;
